import React from 'react';
import { Link } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Foodies HUB</Link>

                <ul className="right">

                    <li><Link to="/">Shop <i class="fa fa-shopping-bag" aria-hidden="true"></i> </Link></li>
                    <li><Link to="/compare">Compare<i class="fa fa-exchange" aria-hidden="true"></i> </Link></li>
                    <li><Link to="/cart">My cart<i class="fa fa-shopping-cart" aria-hidden="true"></i> </Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;