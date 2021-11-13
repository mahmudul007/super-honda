import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';



const Rating = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://salty-taiga-73343.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('rivew given succesfully');
                }
                reset();
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <TextField

                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                defaultValue={user.displayName}
                sx={{ width: '50%' }}

                required
                {...register("Name")}

            />
            <br />
            <br />

            <TextField
                id="outlined-multiline-flexible"
                label="Enter Your Rivew"
                multiline
                maxRows={4}
                sx={{ width: '50%', height: '70%' }}
                required
                {...register("Rivew")}

            />
            <br />
            <br />
            <Button type="submit" variant="contained" > Send Feed Back</Button>



        </form>
    );
};

export default Rating;