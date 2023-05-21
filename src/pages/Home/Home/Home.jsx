import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Gallery from '../Banner/Gallery';
import FunSection from '../Banner/FunSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Products></Products>
            <FunSection></FunSection>
        </div>
    );
};

export default Home;