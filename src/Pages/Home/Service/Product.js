import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, name, description, imag, price } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, bgcolor: '#ccffcc', boxShadow: 10 }}>
                <CardMedia
                    component="img"
                    sx={{ p: 3 }}
                    style={{ margin: '2' }}
                    image={imag}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price:  {price}
                    </Typography>
                </CardContent>
                <Link to={`/order/${_id}`} style={{ textDecoration: 'none' }}>  <Button sx={{ m: 2 }} variant="contained">Buy Now</Button></Link>
            </Card>
        </Grid>
    );
};

export default Product;