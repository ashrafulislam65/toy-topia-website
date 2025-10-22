import React from 'react';
import Slider from '../components/Slider';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <div>
            <banner>
                <Banner></Banner>
            </banner>
            <section>
                <Slider></Slider>
            </section>
            <section></section>
            
        </div>
    );
};

export default Home;