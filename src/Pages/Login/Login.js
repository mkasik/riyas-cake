import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import img from './preview-removebg-preview.png';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');

    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
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
    const handleGoogleSignIn = () => {

        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <h1 className='mb-96 -mt-44 -mt-26 text-4xl font-semibold'>Please Login</h1>
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
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <label >
                                    New To Riya's Cake? Please
                                    <Link to={'/register'} ><button className="btn btn-link normal-case">Register</button></Link>
                                </label>
                                <label >
                                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary"><FaGoogle></FaGoogle> <span className='ml-1 normal-case'>Google</span></button>

                                </label>
                                {/* {error} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;