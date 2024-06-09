import React,{ useContext } from "react";  
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";

function Product () {
    const{all_products}=useContext(ShopContext);
    const{productId}=useParams();
    const product=all_products.find((e)=>e.id===Number(productId));
    return ( 
        <div>
           <BreadCrum product={product}/> 
           <ProductDisplay product={product}/>
        </div>
        
        );
}

export default Product ;