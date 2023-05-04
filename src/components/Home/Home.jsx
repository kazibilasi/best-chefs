import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import ChefInfo from './ChefInfo';

const Home = () => {
    const [chefsInfo, setChefsInfo] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-kazibilasi.vercel.app/chefsdata')
            .then(res => res.json())
            .then(data => setChefsInfo(data))
            
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 container mx-auto mt-11'>
                {
                    chefsInfo.map(chefInfo =>
                    <ChefInfo
                    key = {chefInfo}
                    chefsInfo={chefInfo}
                    
                    ></ChefInfo>)


                }
            </div>

        </div>
    );
};

export default Home;