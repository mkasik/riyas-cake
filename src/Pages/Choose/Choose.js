import React from 'react';
import img1 from './best.jpg';
import img2 from './fast.png';
import img3 from './offer.jpg';


const Choose = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Why Choose My Cake</h2>
            <div class=" grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 mb-24">
                <div  >
                    <img className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-40 w-40 m-auto rounded-full  ' alt='' src={img1}></img>

                    <h3 className='text-2xl font-semibold mt-1'>Best Offer</h3>

                </div>
                <div class="">
                    <img className='h-40 m-auto w-40 rounded-full' alt='' src={img2}></img>

                    <h3 className='text-2xl font-semibold mt-1'>Fast Delivery </h3>
                </div>
                <div class="...">
                    <img className='h-40 m-auto w-40 rounded-full' alt='' src={img3}></img>

                    <h3 className='text-2xl font-semibold mt-1'>Special Offer</h3>
                </div>

            </div>
        </div>
    );
};

export default Choose;