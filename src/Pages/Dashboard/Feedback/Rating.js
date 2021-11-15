import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';


const Rating = () => {

    const [review, setRivew] = useState({});
    const { user } = useAuth();
    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRivew = { ...review }

        newRivew[field] = value;
        console.log(newRivew);

        setRivew(newRivew);
    }


    const handleRatingChange = e => {
        let v = parseInt(e.target.value);
        if (v < 1) e.target.value = 0;
        if (v > 5) e.target.value = 5;
    }

    const handleSubmit = e => {
        fetch('https://salty-taiga-73343.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Rivew Added SuccessFully');

                }
                console.log(data);
            })
        e.preventDefault();


    }


    return (
        <form >

            <TextField

                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                name="Name"
                defaultValue={user.displayName}
                sx={{ width: '50%' }}
                onBlur={handleOnblur}
                required


            />
            <br />
            <br />

            <TextField
                id="outlined-multiline-flexible"
                label="Enter Your Rivew"
                multiline
                name="Rivew"

                onBlur={handleOnblur}
                maxRows={4}
                sx={{ width: '50%', height: '70%' }}
                required


            />
            <br />
            <br />


            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                onChange={handleRatingChange}
                onBlur={handleOnblur}
                InputLabelProps={{
                    shrink: true,
                }}
                maxRows={4}
                sx={{ width: '50%', height: '70%' }}
                name="Rating"
            />
            <br />
            <br />
            <Button type="submit" variant="contained" onClick={handleSubmit} > Send Feed Back</Button>



        </form>
    );
};

export default Rating;