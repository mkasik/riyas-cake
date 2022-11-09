import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { name, img, price, ratings, details, stock, brand, weight } = useLoaderData();
    return (
        <div>
            <div className="flex w-11/12 mt-6 mb-6 m-auto bg-base-200 ">
                <div className="grid  flex-grow card bg-base-100 rounded-box place-items-center">

                    <img className='rounded-md ' alt='' src={img}></img>
                </div>

                <div className="grid  flex-grow card bg-base-100  place-items-center">
                    <div className="card      mr-6 bg-base-100 ">

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{name}</h2>
                            <div className="divider"></div>
                            <h2 className="card-title">Brand: {brand}</h2>
                            <h2 className="card-title">Price: {price} TK</h2>
                            <h2 className="card-title">Weight: {weight}</h2>
                            <h2 className="card-title">Stock: {stock} pcs</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Details;