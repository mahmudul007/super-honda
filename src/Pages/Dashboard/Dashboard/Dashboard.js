import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    useRouteMatch,
    Route
} from "react-router-dom";
import Makeadmin from '../Makeadmin/Makeadmin';
import Seemyorder from '../Seemyorder/Seemyorder';
import Managemyorders from '../Managemyorders/Managemyorders';
import Addproduct from '../Addproduct/Addproduct';
import Rating from '../Feedback/Rating';
import Manageproducts from '../Manageproducts/Manageproducts';
import Manageallorders from '../Manageallorders/Manageallorders';
import Adminroute from '../../Login/Adminroute/Adminroute';
import useAuth from '../../../hooks/useAuth';



const drawerWidth = 240;

function Dashboard(props) {
    const { admin, user, logout } = useAuth();
    const { window } = props;
    let { path, url } = useRouteMatch();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <Link to="/home" style={{ textDecoration: 'none', color: '' }}> <Button>Home</Button></Link><br />

            <Link to={`${url}`} style={{ textDecoration: 'none', color: '' }}> <Button>My Profile</Button> </Link><br />




            <Link to={`${url}/feedback`} style={{ textDecoration: 'none', color: '' }}> <Button>Give feedback </Button></Link><br />
            <Link to={`${url}/managemyorder`} style={{ textDecoration: 'none', color: '' }}> <Button> My order </Button></Link>
            <br />
            <Divider />

            {
                admin &&

                <Box>
                    <h5>Admin Panel</h5>
                    <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: '' }}> <Button> AddProduct </Button></Link> <br />
                    <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: '' }}> <Button> Manage Products</Button></Link> <br />
                    <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: '' }}> <Button> Manage all Orders</Button></Link> <br />
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '' }}> <Button> Make admin </Button></Link> <br />
                </Box>}





            <Divider />
            {user?.email ?
                <Button onClick={logout} variant="light">Logout</Button> :
                <p>Not logged in</p>

            }

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            My Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Box sx={{ flexGrow: 1 }}>
                        <Switch>
                            <Route exact path={path}>
                                <Seemyorder></Seemyorder>
                            </Route>

                            <Route path={`${path}/makeAdmin`}>
                                <Makeadmin></Makeadmin>

                            </Route>
                            <Route path={`${path}/addProduct`}>
                                <Addproduct></Addproduct>
                            </Route>
                            <Adminroute path={`${path}/makeAdmin`}>
                                <Makeadmin></Makeadmin>

                            </Adminroute>
                            <Route path={`${path}/managemyorder`}>
                                <Managemyorders></Managemyorders>

                            </Route>
                            <Route path={`${path}/feedback`}>
                                <Rating></Rating>

                            </Route>
                            <Adminroute path={`${path}/manageProducts`}>
                                <Manageproducts></Manageproducts>

                            </Adminroute>
                            <Adminroute path={`${path}/manageOrders`}>

                                <Manageallorders></Manageallorders>

                            </Adminroute>


                        </Switch>

                    </Box>


                </Box>
            </Box>
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
