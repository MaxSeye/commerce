import React from "react";
import './Heros.css';
import icon from'../Assets/icon.jpeg'
// import max from'../Assets/max.JPG'
import img from'../Assets/img.jpeg'


function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src={icon} alt=""/>
                </div>
                <p>Collection</p>
                <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
            <div>Latest Collections</div>
            {/* <img src={icon} alt=""/> */}

            </div>
            </div>
            <div className="hero-right">
            <img src={img} alt="" />

            </div>
        </div>

         );
}

export default Hero;