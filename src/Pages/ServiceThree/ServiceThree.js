import React from 'react';
import { Link } from 'react-router-dom';

const ServiceThree = ({ service }) => {
    const { _id, name, img, price, details, weight } = service;
    return (
        <div>
            <div className="card card-compact w-96 m-auto  bg-base-100 shadow-xl">
                <figure className='w-96 h-52'><img src={img} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}

                    </h2>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline">Price: {price} TK</div>
                        <div className="badge badge-outline">Weight: {weight}</div>
                    </div>
                    <p>{`${details.slice(0, 100)}`} ...</p>

                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceThree;