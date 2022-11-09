import React from 'react';

const Review = ({ review }) => {
    const { photo, name, message } = review;
    console.log(photo, name, message)

    return (
        <div>
            <div className='flex back'>
                <img className='rounded-full w-12 h-12 flex-none ' src={photo} alt=""></img>
                <h2 className="card-title flex-auto w-64 text-left ml-1">{name}</h2>
            </div>

            <div className="card mb-3  w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="card-actions justify-start">
                        <p>{message}</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Review;