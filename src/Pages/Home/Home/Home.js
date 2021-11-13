import React from 'react';


import Banner from '../Banner/Banner';
import Products from '../Services/Products';
import Rivew from '../../Feedback/Rivew';
import Topnav from '../../Shared/Topnav';
import About from '../../About/About';
import Helmet from '../Helmet/Helmet';




const Home = () => {
    return (
        <div>

            <Topnav></Topnav>
            <Banner></Banner>
            <Products></Products>
            <Rivew></Rivew>
            <Helmet></Helmet>
            <About></About>

        </div >
    );
};

export default Home;