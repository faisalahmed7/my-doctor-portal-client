import React from 'react';
import Banner from './Banner';
import HomeServices from './HomeServices';
import InfoAll from './InfoAll';
import MakeAppointment from './MakeAppointment';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoAll></InfoAll>
            <HomeServices></HomeServices>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;