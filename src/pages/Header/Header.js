import React from 'react';
import Banner from '../Banner/Banner.js'
import Doctors from '../Doctors/Doctors.js';
import Footer from '../Footer/Footer.js';
import NavBar from '../NavBar/NavBar';
import Services from '../Services/Services.js';
import Shop from '../Shop/Shop.js';
import Shops from '../Shops/Shops.js';



const header = () => {
    return (
        <div>
            <NavBar/>
            <Banner /> 
            <Shops />
            <Services />
            <Doctors />
            <Footer/>
          
            
            
        </div>
    );
};

export default header;