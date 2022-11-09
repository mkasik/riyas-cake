import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link>Vanilla Cake</Link>
                    <Link>Chocolate Cake </Link>
                    <Link>Coffee Cake</Link>
                    <Link>Red Velvet Cake</Link>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link>Home 9.00-24.00</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link>About Us</Link>
                    <Link>Terms And Condition</Link>
                    <Link>Privacy Policy</Link>

                </div>
            </footer>
        </div>
    );
};

export default Footer;