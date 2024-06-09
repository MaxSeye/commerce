import React from "react";
import Hero from "../Components/Hero/Heros";
import Popular from "../Components/Popular/Populars";
import Offers from "../Components/Offers/Offerss";
import NewCollection from "../Components/NewCollections/NewCollections";
import Newletters from "../Components/Newletters/Newletterss";
import Footers from "../Components/Footer/Footer";
function Shop () {
    return ( 
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            
            <NewCollection/>
            <Newletters/>

        </div> );
}

export default Shop ;