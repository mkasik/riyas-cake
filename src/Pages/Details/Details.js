import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';
import './Details.css'



const Details = () => {
    const { user } = useContext(AuthContext);
    const { _id, name, img, price, details, stock, brand, weight } = useLoaderData();
    const [reviews, setReviews] = useState([]);
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        // const names = form.name.value;
        // const email = form.email.value;
        // const photo = form.photo.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: name,
            name: user.displayName,
            email: user.email,
            message,
            photo: user.photoURL
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Succesfully');
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);
    const result = reviews.filter(rr => rr.service === _id);
    console.log(result);

    return (
        <div>
            <div className="flex  w-11/12 mt-6 mb-6 m-auto bg-base-200 ">
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

            <h1 className="text-3xl font-bold">Reviews</h1>

            <div className="flex back w-full">
                <div className="grid  flex-grow card  rounded-box place-items-center">

                    {
                        result.map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>


                <div className="grid  flex-grow card  rounded-box place-items-center">

                    <form onSubmit={handleReview}>

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            {
                                user?.uid ? <div className="card-body">


                                    <div className="form-control">

                                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Review" name="message" ></textarea>

                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Review</button>
                                    </div>
                                </div> : <>
                                    <h2 className='text-3xl font-bold'>Please Login for add review </h2>
                                    <Link className='btn' to={'/login'}>Login</Link></>
                            }
                        </div>

                    </form>
                </div>
            </div>




        </div>
    );
};

export default Details;