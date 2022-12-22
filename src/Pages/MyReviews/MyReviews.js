import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const MyReviews = () => {
    useTitle('My Reviews')

    const { user } = useContext(AuthContext);

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://cake-server-mocha.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    const reviews = review.filter(rr => rr.email === user.email);
    console.log(reviews)


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://cake-server-mocha.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {

                        alert('Deleted Successfully');
                        const remaining = reviews.filter(rr => rr._id !== id);
                        setReview(remaining);
                    }
                })
        }

    }

    return (
        <div>
            <h2 className='text-2xl font-bold'>You have {reviews.length} Reviews</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Service Name</th>
                            <th>Your Review</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(revieww =>
                                <tr>

                                    <td>{revieww.serviceName}</td>
                                    <td>{revieww.message}</td>
                                    <td>{
                                        <> <Link to={`/update/${revieww._id}`}><button className='mr-2'><FaEdit></FaEdit></button></Link>
                                            <button onClick={() => handleDelete(revieww._id)}><FaRegTrashAlt></FaRegTrashAlt></button>
                                        </>
                                    }</td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyReviews;