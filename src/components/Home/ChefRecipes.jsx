import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HiHeart, HiThumbUp } from "react-icons/hi";


const ChefRecipes = () => {
    const [data, setData] = useState([]);
    const { id } = useParams()
    // console.log(Id)
    useEffect(() => {

        fetch('http://localhost:5000/chefsdata')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])



    const newData = data.find(d => d.id == id)
    // console.log(newData)
    return (
        <div className='container mx-auto mt-8'>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure><img src={newData?.picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{newData?.name}</h2>
                    <p>{newData?.description}</p>
                    <p>Experience :{newData?.years_of_experience}</p>
                    <p>Recipes :{newData?.number_of_recipes}</p>
                    <p className='flex items-center gap-3'><HiThumbUp></HiThumbUp>{newData?.likes} </p>

                </div>
            </div>


            <div className='mt-9 '>
                <div className='flex p-9 mx-auto items-center justify-center'>
                    <div className="card w-96 bg-base-100 shadow-xl m-4">

                        <figure><img className='rounded' src={newData?.recipes?.[0]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{newData?.recipes_info?.name}</h2>
                            <p className=' text-xl font-medium'>Ingredients</p>
                            <ul>
                                <li>{newData?.recipes_info?.ingredients?.[0]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[1]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[2]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[3]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[4]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[5]}</li>
                            </ul>
                            <button className="btn btn-primary gap-2">
                                Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>

                        </div>

                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl m-4">

                        <figure><img className='rounded' src={newData?.recipes?.[1]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{newData?.recipes_info?.name}</h2>
                            <p className=' text-xl font-medium'>Ingredients</p>
                            <ul>
                                <li>{newData?.recipes_info?.ingredients?.[0]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[1]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[2]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[3]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[4]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[5]}</li>
                            </ul>
                            <button className="btn btn-primary gap-2">
                                Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl m-4">

                        <figure><img className='rounded' src={newData?.recipes?.[2]} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{newData?.recipes_info?.name}</h2>
                            <p className=' text-xl font-medium'>Ingredients</p>
                            <ul>
                                <li>{newData?.recipes_info?.ingredients?.[0]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[1]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[2]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[3]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[4]}</li>
                                <li>{newData?.recipes_info?.ingredients?.[5]}</li>
                            </ul>
                            <button className="btn btn-primary gap-2">
                                Favorite
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </button>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ChefRecipes;