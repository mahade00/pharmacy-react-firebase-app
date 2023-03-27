import React from 'react';
import Banner from '../Banner/Banner.js'
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop.js';
import Shops from '../Shops/Shops.js';



const header = () => {
    return (
        <div>
            <NavBar/>
            <Banner /> 
            <Shops/>
          
            
            
        </div>
    );
};

export default header;