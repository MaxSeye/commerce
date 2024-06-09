import React from 'react';
import './Footer.css';
import logo from '../Assets/logo.jpeg';
import instagram from '../Assets/instagram.jpeg';
import pintesler from '../Assets/pintesler.jpeg';
import whatsapp from '../Assets/whatsapp.jpeg';

function Footers () {
    return (
        <div className="footer">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
          <ul className="footer-links">
           <li>Company</li>
           <li>Products</li>
           <li>Offices</li>
           <li>About</li>
           <li>Contact</li>
          </ul>
          <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintesler} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>
          </div>
          <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - Pape Magate Seye</p>
          </div>
        </div>
          );
}

export default Footers ;