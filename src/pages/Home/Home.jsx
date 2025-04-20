import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';

const Home = () => {
    const useLoad = useLoaderData()
    return (
        <div className='px-15'>
            <Banner></Banner>
            <Books useLoad={useLoad}></Books>
        </div>
    );
};

export default Home;