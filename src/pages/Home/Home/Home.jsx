import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Gallery from '../Banner/Gallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Products></Products>
        </div>
    );
};

export default Home;