import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="navbar-nav">
                <li>
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        to="/home"
                    >
                        Home
                    </NavLink>
                </li>
                <li>

                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        to="/checkout"
                    >
                        <span aria-label="emoji" role="img">
                            🛒
                        </span>{' '}
                        Checkout
                    </NavLink>
                </li>
                <li>

                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        to="/payments"
                    >
                        <span aria-label="emoji" role="img">
                            💸
                        </span>{' '}
                        Payments
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        to="/customers"
                    >
                        <span aria-label="emoji" role="img">
                            🧑🏿‍🤝‍🧑🏻
                        </span>{' '}
                        Customers
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                        to="/subscriptions"
                    >
                        <span aria-label="emoji" role="img">
                            🔄
                        </span>{' '}
                        Subscriptions
                    </NavLink>
                </li>
            </ul>
        </nav>

    );
}

export default Navigation;