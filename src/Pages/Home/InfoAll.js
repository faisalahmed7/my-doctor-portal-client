import React from 'react';
import InfoCardDetails from './InfoCardDetails';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoAll = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            <InfoCardDetails img={clock} cardTitle='Opening Hour' bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCardDetails>
            <InfoCardDetails img={marker} cardTitle='Location' bgClass='bg-accent'></InfoCardDetails>
            <InfoCardDetails img={phone} cardTitle='Contact US' bgClass='bg-gradient-to-r from-secondary to-primary'></InfoCardDetails>
        </div>
    );
};

export default InfoAll;