import React from 'react';
import "./Banner.css"
import hero from "../../assets/hero.png"

const Banner = () => {
    return (
        <div className="max-w-[1150px] mx-auto bg-base-200 Playfair rounded-2xl py-16 mb-20 px-20">
            <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                <img
                    src={hero}
                    className="max-w-[318px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold max-w-[526px] mb-[40px]">Books to freshen up your bookshelf</h1>
                    <button className="btn WorkSans bg-[#23BE0A] py-[25px] px-[28px] text-xl font-bold text-white rounded-[8px]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;