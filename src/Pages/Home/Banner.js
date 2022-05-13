import React from 'react';
import bg from '../../assets/images/bg.png'
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`,

        }}
            className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">At our dentist office in Medford, our philosophy of care is defined by our personalized service and advanced, high-tech treatments. We approach every patient with the same level of gentle, thorough care and attention we would give a member of our own family – and it shows! You’ll love the warm and friendly staff and relaxing office environment.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;