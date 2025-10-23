import React from 'react';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';

const PopularToy = ({ toy }) => {
    const { toyId,toyName,description, pictureURL, price, rating, availableQuantity } = toy;
    return (
        <div className=''>
            <div className="card mb-[20px] md:h-[450px] bg-base-100 w-full md:w-76 lg:w-96 shadow-sm">
                <figure>
                    <img
                        className=''
                        src={pictureURL}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {toyName}
                        <div className="badge bg-[#1a1a1a] text-white rounded-4xl">{availableQuantity}</div>
                    </h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold flex gap-1 items-center'>Rating: {rating} <IoStar className='text-amber-300' /></p>
                    <div className="card-actions justify-end">
                       <Link to={`/details/${toyId}`}> <button className='btn bg-[#425f46] text-white rounded-4xl'>View More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularToy;