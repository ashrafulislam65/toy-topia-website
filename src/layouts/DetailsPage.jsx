import { useEffect, useState } from 'react';
import { IoStar } from 'react-icons/io5';
import { useLoaderData, useParams } from 'react-router';
import useTitle from '../hooks/useTitle';
import { toast } from 'react-toastify';


const DetailsPage = () => {
    const { id } = useParams();
    useTitle(`Toy ${id}`);
    const data = useLoaderData();
    const [foundToy, setFoundToy] = useState(null);
    useEffect(() => {
        if (data && id) {
            const filteredToys = data.filter(toy => toy.toyId == id);
            setFoundToy(filteredToys);

        }


    }, [data, id]);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Show success alert
        toast.success('Success! Your request has been submitted. We will contact you soon!');
    };

    if (!foundToy) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-bars loading-xl"></span>

            </div>
        );
    }
    const { toyName, sellerName, sellerEmail, subCategory, price, rating, availableQuantity, description, pictureURL } = foundToy[0];
    return (
        <div className='mt-16'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Toy Details</h1>
                        <p className="py-6 text-lg text-gray-600">
                            "Spark Creativity, Fuel Imagination! This isn't just a toy - it's a journey to wonderland! "
                        </p>
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
                                <div className='flex gap-5'>
                                    <p className='font-bold'>Price: ${price}</p>
                                    <p className='font-bold flex gap-1 items-center'>Rating: {rating} <IoStar className='text-amber-300' /></p>
                                </div>
                                <div>
                                    <p>Seller Name: {sellerName} </p>
                                    <p>Seller Email: {sellerEmail}</p>
                                    <p>Sub Category: {subCategory}</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='text-center py-10 text-6xl font-bold bg-base-200' >Try Now</div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Begin Your Toy Adventure!</h1>
                        <p className="py-6 text-lg">
                            "Step into a world where every toy tells a story and every playtime creates lasting memories.
                            Join thousands of happy families in our magical toy kingdom!"
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit} action="">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input type="text" className="input" placeholder="Name" />
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />

                                    <button className="btn btn-neutral mt-4">Try Now</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsPage;