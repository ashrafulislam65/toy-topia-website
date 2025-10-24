import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import PopularToys from '../components/PopularToys';
import useTitle from '../hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Slider></Slider>
                
            </section>
            <section>
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <PopularToys></PopularToys>

                </Suspense>
                
            </section>
            
        </div>
    );
};

export default Home;