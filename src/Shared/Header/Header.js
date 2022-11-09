import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from './logo 2.png';
import './Header.css'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from "react-icons/fa";


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log("photo url: ", user.photoURL)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar  bg-neutral">
                <div className="navbar-start">

                    <Link to={'/'}> <img alt='' src={img}></img></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <Link to={'/'}><button className="btn normal-case">Home</button></Link>
                        <Link to={'/services'}><button className="btn normal-case">Services</button></Link>
                        <Link to={'/blog'}><button className="btn normal-case">Blog</button></Link>


                    </ul>
                </div>
                <div className="navbar-end">


                    {user?.uid ?
                        <>

                            {user?.photoURL ?
                                <img title={user?.displayName} src={user?.photoURL}

                                    className='rounded-full h-12 w-12'
                                    alt='User images'></img>
                                : <FaUserAlt></FaUserAlt>
                            }
                            <Link to={'/addservices'}><button className="btn normal-case">Add Services</button></Link>
                            <Link to={'/myreviews'}><button className="btn normal-case">My Reviews</button></Link>
                            <button onClick={handleLogOut} className="btn normal-case">Logout</button>
                        </> :
                        <>
                            <Link to={'/login'}><button className="btn normal-case">Login</button></Link>
                            <Link to={'/register'}><button className="btn normal-case">Register</button></Link>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;