import React, { useEffect, useState } from 'react';
import ServiceCard from '../../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='bg-base-200 mb-6'>
            <h2 className=' pt-6 text-4xl text-center font-semibold'>My Services</h2>

            <div className=' mt-11  w-11/12 m-auto  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;