import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Addproduct = () => {

    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        console.log(newProduct);
        setProduct(newProduct);

    }
    const handleProductSubmit = e => {
        const products = {
            ...product
        }
        // send to the server
        fetch('https://salty-taiga-73343.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('submitted')



            });
        e.preventDefault();
    }

    return (

        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
                <Typography sx={{}} variant="body1" gutterBottom>Add Honda</Typography>
                <form onSubmit={handleProductSubmit}>
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="standard-basic"
                        label="Honda model name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="standard-basic"
                        label="Description"
                        name="description"
                        type="description"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="standard-basic"
                        label="image"
                        name="imag"
                        type="imag"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="standard-basic"
                        label="price"
                        name="price"
                        type="number"
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Add</Button>
                </form>

            </Grid>

        </Grid>






    );
};

export default Addproduct;