import React from 'react';
import img1 from './one.jpg';
import img2 from './three.jpg';
import img3 from './two.jpg'

const HappyCustomer = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold'>Happy Customer</h1>
            <div class="grid grid-cols-3 gap-4 mt-6 mb-8">
                <div  >
                    <img className='h-40 w-40 m-auto rounded-full  ' alt='' src={img1}></img>
                    <p className='m-auto text-base mt-2 w-2/3'> “Amazing food. PERIOD. Service is always perfect, food is always on point and your all cake are attrack to me so good “</p>
                    <h3 className='text-2xl font-semibold mt-1'>David Max</h3>

                </div>
                <div class="">
                    <img className='h-40 m-auto w-40 rounded-full' alt='' src={img2}></img>
                    <p className='m-auto text-base mt-2 w-2/3'> “Service is always perfect, food is always on point, Amazing food. PERIOD.  and the cake is very testy and “</p>
                    <h3 className='text-2xl font-semibold mt-1'>Palisa </h3>
                </div>
                <div class="...">
                    <img className='h-40 m-auto w-40 rounded-full' alt='' src={img3}></img>
                    <p className='m-auto text-base mt-2 w-2/3'>  Food is always on point, Amazing food. PERIOD.  and delivery is very fast and I am glad. </p>
                    <h3 className='text-2xl font-semibold mt-1'>Jon Son</h3>
                </div>

            </div>
        </div>
    );
};

export default HappyCustomer;