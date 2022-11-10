import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateReview = () => {
    const update = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl'>You can update your review here</h2>
            <form onSubmit={handleUpdate}>
                <div className="card-body w-96 m-auto">


                    <div className="form-control">

                        <textarea className="textarea textarea-bordered h-24" placeholder="Your Review" name="message" defaultValue={update.message} ></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Review</button>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default UpdateReview;