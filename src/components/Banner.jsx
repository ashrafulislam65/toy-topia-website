import React from 'react';
import bannerBg from '../assets/banner.jpg';

const Banner = () => {
    return (
        <div className='bg-[#a4a898] mt-16'>
            <div className="px-20  md:h-[500px]">
                <div className=" md:flex  gap-5  ">
                    
                    <div className=' w-full md:w-1/2 md:py-20'>
                        <h1 className="text-5xl font-bold">A New Box of Toys Every Month</h1>
                        <p className="py-6">
                           We deliver Boxes of fantastic toys right to your door. Each box is filled with age-appropriate toys that are sure to delight and engage your child.
                        </p>
                        <button className="btn bg-[#425f46] text-white rounded-4xl border-[#425f46]">Get Your Toys</button>
                    </div>
                    <img
                        src={bannerBg}
                        alt="Banner Image"
                        className="w-full mt-2 md:w-1/2  rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;