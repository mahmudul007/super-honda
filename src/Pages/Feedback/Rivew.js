import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Rivews from './Rivews'

const Rivew = () => {
    const [feedbakcs, setFeedbakcs] = useState([]);
    useEffect(() => {
        fetch('https://salty-taiga-73343.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setFeedbakcs(data)

                console.log(data)
            })
    }, [])

    return (
        <Box sx={{ flexGrow: 1, bgcolor: '#e6ffff' }}>
            <Container >

                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Feed Back
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        feedbakcs.map(service => <Rivews
                            key={service._id}
                            service={service}
                        ></Rivews>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Rivew;