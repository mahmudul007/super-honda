import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img from '../../Image/image1.jpg';
import { Button, Container, Typography } from '@mui/material';
import { height } from '@mui/system';
import {
    Link
} from "react-router-dom";

const bannerBg = {
    background: `url(${img})`,


}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid sx={{ p: 8, m: 2 }} container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Best Shop  <br />
                            For dream Motorcycle
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Link to='/allproducts' style={{ textDecoration: 'none' }}> <Button variant="contained" >  See More </Button> </Link>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '77%' }} src={img} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;