import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <span className="footer-title">Services</span>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>

                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                    <Link>Home</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;