import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Container } from '@mui/material';


const Rivews = ({ service }) => {
    const { Name
        , Rivew } = service;
    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 2, bgcolor: '#e6ffff', boxShadow: 2, color: 'info.main', boxShadow: 5 }}>

                <CardContent>
                    <Typography variant="h5" color="text.primary" component="div">
                        {Name
                        }
                    </Typography>
                    <Typography variant="p" color="text.primary">
                        {Rivew}
                    </Typography>
                </CardContent>

            </Card>
        </Grid>

    );
};

export default Rivews;