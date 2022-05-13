import React from 'react';
import InfoCardDetails from './InfoCardDetails';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const InfoAll = () => {
    const infoDetails = [


        {
            _id: 1,
            cardTitle: 'Opening Hour',
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            img: clock
        },
        {
            _id: 2,
            cardTitle: 'Location',
            bgClass: 'bg-accent',
            img: marker
        },
        {
            _id: 3,
            cardTitle: 'Contact Us',
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
            img: phone
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            {
                infoDetails.map(info => <InfoCardDetails
                    key={info._id}
                    info={info}
                >
                </InfoCardDetails>)
            }
        </div>
    );
};

export default InfoAll;