import { use } from "react";
import PopularToy from "./PopularToy";

const popularToysPromise = fetch("/popular-toys.json").then((res)=> res.json());

const PopularToys = () => {
    const popularToys = use(popularToysPromise);
    return (
        <div className="bg-base-200">
            <h3 className=' py-20 text-center text-5xl font-bold'>Popular Toys ({popularToys.length})</h3>
            <div className="md:px-20 grid  gap-3  lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {
                    popularToys.map((toy)=>(
                        <PopularToy toy={toy} key={toy.toyId}></PopularToy>
                    ))
                }
            </div>
            
        </div>
    );
};

export default PopularToys;