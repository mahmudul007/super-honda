import { Typography } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';


const About = () => {


    // console.log(user);
    return (
        <>  <h1 className="text-primary  text-center">Thanks for Visit Us </h1>
            <Navbar className='p:5' bg="dark" collapseOnSelect expand="lg">

                <Container>
                    <Typography variant="h4" sx={{ color: '#99ffff', p: 5, }}> Contact Us:01686821567</Typography>
                    <Typography variant="p" sx={{ color: '#99ffff', p: 5, }}>Address:Dhaka,Bangladesh </Typography>


                </Container>
            </Navbar>
        </>
    );
};

export default About;