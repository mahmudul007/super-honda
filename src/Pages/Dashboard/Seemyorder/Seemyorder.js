import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Seemyorder = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1>My Profile </h1>
            <p>Name: {user.displayName}</p>
            <p>Others Will Coming soon..........</p>

        </div>
    );
};

export default Seemyorder;