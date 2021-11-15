import React, { useEffect } from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import { useParams } from 'react-router';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import img1 from '../../Image/karthegan-padmanaban-riCHphKK3Qs-unsplash.jpg';
import Navigation from '../../Shared/Navigation/Navigation';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useState } from 'react';


const Order = ({ props }) => {
    const { serviceId } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState({});
    const { register, handleSubmit, reset } = useForm({});

    //
    useEffect(() => {
        fetch(`https://salty-taiga-73343.herokuapp.com/products/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
            })

    }, [])
    //
    const onSubmit = data => {


        console.log(data);
        axios.post('https://salty-taiga-73343.herokuapp.com/orders', data)
            .then(res => {

                if (res.data.insertedId) {
                    alert('book seccuefully');
                }
                reset();
            })
    };

    return (

        <>
            <Navigation></Navigation>


            <Box sx={{ flexGrow: 1 }}>
                <h1>Order a honda</h1>
                <Grid container spacing={2}>

                    <Grid item xs={6}>
                        <Card >

                            <img style={{ width: '80%', height: '100%' }} src={details.imag} alt="" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {details.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {details.description}
                                </Typography>
                            </CardContent>

                        </Card>


                    </Grid>
                    <Grid item xs={6}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Book order</h1>
                            <input placeholder="name" {...register("name")} defaultValue={details.name} /> <br />
                            <input placeholder="Email " {...register("email")} defaultValue={user.email} /> <br />
                            <input placeholder="Name " {...register("Name")} defaultValue={user.displayName} /> <br />
                            <input type="adress" placeholder="address" {...register("address")} /> <br />
                            <input type="number" {...register("phone")} /> <br />
                            <input type="submit" />
                        </form>


                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default Order;