import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Makeadmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const adminOnblur = e => {
        setEmail(e.target.value)


    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch("https://salty-taiga-73343.herokuapp.com/users/admin", {
            method: 'PUT',
            headers: {
                'authorization': `Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>make admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={adminOnblur}
                    variant="outlined" />
                <Button type="submit" variant="contained"> Make Admin</Button>


            </form>
            {success && <Alert severity="success">Admin added successfully!</Alert>}
        </div>
    );
};

export default Makeadmin;