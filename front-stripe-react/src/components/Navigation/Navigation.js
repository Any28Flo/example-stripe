import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Link} from 'react-router-dom';
const Navigation =(props) =>{
    return (
        <nav>
            <ul className="navbar-nav">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/checkout">
                <span aria-label="emoji" role="img">
                  🛒
                </span>{' '}
                        Checkout
                    </Link>
                </li>
                <li>
                    <Link to="/payments">
                <span aria-label="emoji" role="img">
                  💸
                </span>{' '}
                        Payments
                    </Link>
                </li>
                <li>
                    <Link to="/customers">
                <span aria-label="emoji" role="img">
                  🧑🏿‍🤝‍🧑🏻
                </span>{' '}
                        Customers
                    </Link>
                </li>
                <li>
                    <Link to="/subscriptions">
                <span aria-label="emoji" role="img">
                  🔄
                </span>{' '}
                        Subscriptions
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Navigation;