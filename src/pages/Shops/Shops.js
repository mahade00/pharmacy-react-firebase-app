import React, { useEffect, useState } from 'react';
import Shop from '../Shop/Shop';
import './Shops.css';

const Shops = () => {
    const [shops, setShops] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setShops(data))
    },[])

    return (
        <div className='shops-main'>
            <h2>Available Medecine</h2>
            <div className='shops'>
                {
                shops.map(shop => <Shop
                    key={shop.id}
                    image={shop.image}
                    name={shop.name}
                    price={shop.price}
                    company={shop.company}

                    
                ></Shop>)
            }
            </div>
            
        </div>
    );
};

export default Shops;