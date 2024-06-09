import React, { useState, } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../Assets/logo.jpeg';
import cart_icon from '../Assets/cart_icon.jpeg';

function Navbar() {
    const [menu, setMenu] = useState("Shop");
    return (
        <div className='navbar' >
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}>
                    <Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu === "Shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Mens") }}>
                    <Link style={{textDecoration:'none'}} to="/Mens">Men</Link>{menu === "Mens" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("womans") }}>
                    <Link style={{textDecoration:'none'}} to="/womans">Woman</Link>{menu === "womans" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{textDecoration:'none'}} to="/kids">Kid</Link>{menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt=""/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
}

export default Navbar;
