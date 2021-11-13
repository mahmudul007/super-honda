import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Allshow from './Allshow';
import Navigation from '../Shared/Navigation/Navigation';

const Allproducts = () => {
    const [services, setServices] = useState([]);

    //find all products
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 5));
                console.log(data)
            })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>

                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Our Products
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Allshow
                                key={service._id}
                                service={service}
                            ></Allshow>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Allproducts;