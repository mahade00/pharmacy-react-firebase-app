import React from 'react';
import './Shop.css';


const Shop = (props) => {
    const { name,price,image,company } =props;
    return (
        <div className='shop-main'>
            <div className='shop'>
                 <img src={ image} />
            <p className='name'>Name: {name}</p>
            <p className='price'>Price: {price}</p>            
            <p className='company'>Company: {company}</p>
            <button>Add To Cart</button>
            </div>
           
        </div>
    );
};

export default Shop;