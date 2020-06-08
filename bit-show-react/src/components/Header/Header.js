import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-around mb-2 px-0">
            <a className="navbar-brand" href="../../public/index.html">BitShow</a>
            <form className="form-inline">
                <div className="dropdown">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <div className="dropdown-wrapper">

                    </div>
                </div>
            </form>
        </nav>
    );
}

export { Header };