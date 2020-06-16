import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary my-1">
                <h1 className="navbar-brand">RND BLG</h1>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to='/' className="nav-link text-white">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/authors' className="nav-link text-white">Authors</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className="nav-link text-white">About</Link>
                    </li>
                </ul>

            </nav>
        </>
    );
}

export { Header };