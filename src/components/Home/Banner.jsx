import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-5 rounded-md'>



            <div className="carousel w-full h-1/4">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/male-cook-white-uniform-hat-putting-salt-herbs-food-plate-with-vegetables-before-serving-while-working-restaurant-kitchen_106485-4499.jpg?size=626&ext=jpg&ga=GA1.2.1570833622.1680187286&semt=robertav1_2_sidr" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/medium-shot-chef-cutting-vegetables_23-2148723303.jpg?size=626&ext=jpg&ga=GA1.2.1570833622.1680187286&semt=robertav1_2_sidr" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/concentrated-male-chef-garnishing-food-kitchen_1134-1508.jpg?size=626&ext=jpg&ga=GA1.2.1570833622.1680187286&semt=robertav1_2_sidr" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/head-chef-adding-fresh-chopped-green-herbs-pan-while-cooking-gourmet-dish-restaurant-professional-kitchen-food-industry-workers-preparing-delicious-meal-using-organic-vegetables_482257-40135.jpg?size=626&ext=jpg&ga=GA1.1.1570833622.1680187286&semt=robertav1_2_sidr" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;