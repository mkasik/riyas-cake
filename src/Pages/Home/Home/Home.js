import React, { useEffect, useState } from 'react';
import img from './one.jpg';
import img2 from './two.jpg';
import img3 from './three.jpg';
import img4 from './four.jpg';
import ServiceThree from '../../ServiceThree/ServiceThree';
import { Link } from 'react-router-dom';
import HappyCustomer from '../../../HappyCustomer/HappyCustomer';


const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services3')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img} className="w-full h-screen " />
                    <div className="absolute flex justify-between transform -translate-y-1/5 left-5 right-5 top-2/4">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/5 left-5 right-5 top-2/4">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/5 left-5 right-5 top-2/4">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full h-screen" />
                    <div className="absolute flex justify-between transform -translate-y-1/5 left-5 right-5 top-2/4">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>



            <div className='bg-base-200 mb-6'>
                <h2 className=' pt-6 text-4xl text-center font-semibold'>My Services</h2>

                <div className=' mt-11 mb-11  w-11/12 m-auto  grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceThree
                            key={service._id}
                            service={service}
                        ></ServiceThree>)
                    }
                </div>
                <Link className='mt-6' to={'/services'}><button className="btn btn-primary mb-6">See All Services</button></Link>
            </div>

            <HappyCustomer></HappyCustomer>

        </div>
    );
};

export default Home;