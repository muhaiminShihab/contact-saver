import React from 'react';
import { Link } from 'react-router-dom';

const WebLayout = () => {
  return (
    <div className="header-area bg-light py-3">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <Link to="/" className="logo">
                        <span class="material-symbols-rounded">book</span>
                    </Link>
                </div>
                <div className="col-lg-9 text-end">
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                        <li><Link to="/sign-in">Sign-in</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WebLayout