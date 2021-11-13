import React from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import img from '../../Image/cobi-krumholz-mZKF19ydEzk-unsplash.jpg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Helmet = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, bgcolor: '#99ffff', p: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8} md={6} >
                        <Typography variant="h4">
                            Helmet For Our Rider
                        </Typography>
                        <br />
                        <br />

                        <Link to="/helmets">  <Button>See All helmet</Button> </Link>




                    </Grid>
                    <Grid item xs={8} md={6}>
                        <img src={img} style={{ width: '50%' }} alt="" />


                    </Grid>

                </Grid>
            </Box>
        </>
    );
};

export default Helmet;