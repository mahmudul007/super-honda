import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";

const googoleProvider = new GoogleAuthProvider();



// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    // const [token, setToken] = useState('');

    const auth = getAuth();

    const registerUser = (email, name, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                //save user
                saveUser(email, name, 'POST');
                //send name into user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    //sin in with google

    const signInwithgoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googoleProvider)
            .then((result) => {

                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setAuthError('');
                // ...
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                //     .then(idToken => {
                //         setToken(idToken);

                //     })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    /////

    useEffect(() => {
        fetch(`https://salty-taiga-73343.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])



    ///

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://salty-taiga-73343.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()




    }

    return {
        user,
        admin,
        isLoading,
        authError,

        registerUser,
        loginUser,
        logout,
        signInwithgoogle
    }
}

export default useFirebase;