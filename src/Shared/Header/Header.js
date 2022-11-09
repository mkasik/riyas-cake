import React from 'react';
import { Link } from 'react-router-dom';
import img from './logo 2.png';
import './Header.css'


const Header = () => {

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
                    <Link to={'/login'}><button className="btn normal-case">Login</button></Link>
                    <Link to={'/register'}><button className="btn normal-case">Register</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;