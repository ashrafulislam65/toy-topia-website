import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Banner from '../components/Banner';
import PopularToys from '../components/PopularToys';
import useTitle from '../hooks/useTitle';
import { CiGift } from 'react-icons/ci';

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
             <section className="py-8 bg-yellow-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl justify-center items-center gap-2 flex font-bold mb-4"><span className='flex justify-center items-center text-center'><CiGift className='' /></span><p>Special Offers</p></h2>
                    <p className="text-lg mb-4">Get 20% off on your first order!</p>
                    <button className="btn bg-[#4c5848] text-white rounded-4xl">Shop Now</button>
                </div>
            </section>
            <section>
                <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    <PopularToys></PopularToys>

                </Suspense>
                
            </section>
            <section className="py-8 bg-base-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-center mb-6">What Parents Say</h2>
                    <div className="max-w-md mx-auto text-center">
                        <p className="text-gray-600 italic">
                            "My kids love the toys from ToyTopia! Quality is amazing and delivery was fast."
                        </p>
                        <p className="mt-2 font-semibold">- Sarah M.</p>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default Home;