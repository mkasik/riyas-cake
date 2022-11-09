import React from 'react';
import { Link } from 'react-router-dom';
import img from './preview-removebg-preview.png';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <h1 className='mb-96 -mt-44 -mt-24 text-4xl font-semibold'>Please Login</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img alt='' src={img}></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label >
                                New To Riya's Cake? Please
                                <Link to={'/register'} ><button className="btn btn-link normal-case">Register</button></Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;