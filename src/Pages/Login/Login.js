import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from './preview-removebg-preview.png';

const Login = () => {
    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log(user.uid);
                alert('Login Succesfully');
                form.reset();

            })
            .catch(e => {
                console.error(e)
                setError(e.message)
            });
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <h1 className='mb-96 -mt-44 -mt-24 text-4xl font-semibold'>Please Login</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">

                        <img alt='' src={img}></img>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <label >
                                    New To Riya's Cake? Please
                                    <Link to={'/register'} ><button className="btn btn-link normal-case">Register</button></Link>
                                </label>
                                {error}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;