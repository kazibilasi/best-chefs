import React from 'react';
import { Link } from 'react-router-dom';

const ChefInfo = ({ chefsInfo }) => {

    const { name, picture, id } = chefsInfo
    return (
        <div >
            <div className=' mt-4 p-4'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={picture} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>"Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart."</p>
                        <div className="card-actions">
                            <Link to={`/chefRecipes/${id}`} className="btn btn-primary">View Recipes</Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ChefInfo;