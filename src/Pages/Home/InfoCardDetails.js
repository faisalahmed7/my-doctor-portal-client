import React from 'react';

const InfoCardDetails = ({ info }) => {
    const { img, cardTitle, bgClass } = info;
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure><img className='pl-5 pt-4' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>Click the button to listen on Spotify app.</p>

            </div>
        </div>
    );
};

export default InfoCardDetails;