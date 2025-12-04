import React from 'react';

const AboutUs = () => {
    return (
        <div className='mt-16'>
            <div className="min-h-screen  px-4 md:px-16 lg:px-32 py-16 bg-[#fdfdfd]">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">About ToyTopia</h1>

                <div className="max-w-4xl mx-auto text-gray-700 space-y-6 text-justify md:text-left">
                    <p>
                        Welcome to ToyTopia, the ultimate destination for kids' toys! Our mission is to provide
                        safe, fun, and educational toys for children of all ages. We carefully select our products
                        to ensure they stimulate creativity and imagination while promoting learning.
                    </p>
                    <p>
                        At ToyTopia, we believe every child deserves the joy of play. Our collection ranges from
                        classic toys to the latest trends, all sourced with love and care. Whether you are shopping
                        for toddlers, preschoolers, or older kids, you will find something special here.
                    </p>
                    <p>
                        Join us in creating unforgettable memories and encouraging learning through play.
                        ToyTopia is not just a store—it’s a place where fun and education come together!
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;