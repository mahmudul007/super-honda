import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PrettyRating from "pretty-rating-react";
import {
    faHeart,
    faStar,
    faHeartBroken,
    faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-solid-svg-icons";


const Rivews = ({ service }) => {
    const { Name
        , Rivew, Rating } = service;
    const icons = {
        star: {
            complete: faStar,
            half: faStarHalfAlt,
            empty: farStar,
        },
        heart: {
            complete: faHeart,
            half: faHeartBroken,
            empty: farHeart,
        },
    };

    const colors = {
        star: ['#d9ad26', '#d9ad26', '#434b4d'],
        heart: ['#9b111e', '#a83f39'],
    };

    return (

        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 2, bgcolor: '#e6ffff', color: 'info.main', boxShadow: 5 }}>

                <CardContent>

                    <Typography variant="h5" color="text.primary" component="div">
                        {Name
                        }
                    </Typography>


                    <Typography variant="p" color="text.primary">
                        {Rivew}
                    </Typography>
                    <Typography variant="h5" color="text.primary" component="div">
                        <PrettyRating value={Rating} icons={icons.star} colors={colors.star} />
                    </Typography>

                </CardContent>

            </Card>
        </Grid>

    );
};

export default Rivews;