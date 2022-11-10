import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
    const update = useLoaderData();

    console.log(update);
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        console.log(update);
        alert('Your review update successfull')
        form.reset();
    }



    return (
        <div>
            <h2 className='text-2xl'>You can update your review here</h2>
            <form onSubmit={handleUpdate}>
                <div className="card-body w-96 m-auto">


                    <div className="form-control">

                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Review" name="message" defaultValue={update.message} ></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update Review</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default UpdateReview;