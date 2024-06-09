import React from "react";
import './BreadCrum.css';
import dropdown from "../Assets/dropdown.jpeg";

function BreadCrum(props) {
    const{product}=props;
    return ( 
        <div className="BreadCrum">
        HOME <img src={dropdown} alt="" /> SHOP <img src={dropdown} alt="" />{product.category} <img src={dropdown} alt="" />{product.name}
        </div> );
}

export default BreadCrum;