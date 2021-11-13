import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Product from '../Service/Product';
// import fluoride from '../../../images/fluoride.png';
// import cavity from '../../../images/cavity.png';
// import whitening from '../../../images/whitening.png';




const Products = () => {
    const [services, setServices] = useState([]);

    //find all products
    useEffect(() => {
        fetch('https://salty-taiga-73343.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6));
                console.log(data)
            })
    }, [])

    return (
        <Box sx={{ flexGrow: 1, bgcolor: ' #ccffff' }}>
            <Container>

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Our Products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Product
                            key={service._id}
                            service={service}
                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;