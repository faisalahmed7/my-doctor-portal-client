import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';
import InfoAll from './InfoAll';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoAll></InfoAll>
            <HomeServices></HomeServices>
        </div>
    );
};

export default Home;