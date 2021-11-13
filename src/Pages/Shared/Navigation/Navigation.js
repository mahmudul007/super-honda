import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar xs={12} md={12} position="static" sx={{ p: 0 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>  Super Honda Shop</Link>
                    </Typography>
                    <Link to='/dashboard'>
                        <Button color="inherit" style={{ textDecoration: 'none', color: 'white' }}>My Dashboard</Button>
                    </Link>
                    {
                        user?.email ?


                            <Button onClick={logout} color="inherit">LogOut</Button> :
                            <Button> <Link as={Link} to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
                    }


                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default Navigation;