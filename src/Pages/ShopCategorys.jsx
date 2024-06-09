import React, { useContext } from "react";
import  './CSS/ShopCategory.css'
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown.jpeg";
import Item from "../Components/Item/items";
const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return ( 
        <div className="shop-category">
       <img className="shop-category-banner" src={props.banner} alt="" />
       <div className="shop-category-indexSort">
       <p>
        <span>Showing 1-12</span>
         out of 36 products
       </p>
       <div className="shop-category-sort">
        Sort by <img src={dropdown} alt="" />
       </div>
       </div>
      <br/>
      <br/>

       <div className="shopcategory-products">
       {all_products.map((item,i)=>{
       if(props.category===item.category){
        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>;
       } 
       else{
       return null;
   }

    
         })}
       </div>
       <div className="shop-category-loadmore">
        Explore More
       </div>
        </div>
         );
}

export default ShopCategory ;