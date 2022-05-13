import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero min-h-screen my-16">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='' />
                <div className='lg:ml-16'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat exercitationem amet ducimus aliquid alias sit incidunt! At, repudiandae non? Aperiam.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;