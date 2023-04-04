import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const {
        cartSize
    } = props;

    return (
        <div className="Nav">
            <ul>
                <Link to="/">
                    <li> HOME </li>
                </Link>
                <Link to="/shop">
                    <li> SHOP </li>
                </Link>
                <Link to="/cart">
                    <li> CART ({cartSize}) </li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;
