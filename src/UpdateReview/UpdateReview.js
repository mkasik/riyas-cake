import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const UpdateReview = () => {
    useTitle('Update Review')
    const [review, setReview] = useState({});
    const [refresh, setRefresh] = useState(false);
    const update = useLoaderData();
    if (update.success) {
        setReview(update.data);
        console.log("this is data", update.data)
    } else {
        fetch(`https://cake-server-mkasik.vercel.app/review`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(review)

        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert('success')
                } else {
                    alert('error')
                }
            })
    }

    console.log(update);
    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        console.log(update);
        alert('Your review update successfull')
        form.reset();

        const review = {
            message,
        }
        console.log(review);
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