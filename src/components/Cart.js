

import React, { useState, useEffect } from "react";

function Cart(props) {

    const {
        stickersInCart, removeStickerFromCart
    } = props;
    
    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = () => {
        let total = 0;

        stickersInCart.map((item) => (
            total += item.price
        ))
        setTotalPrice(total);
    }

    useEffect(() => {
        updateTotalPrice();
    });

    return (

        <div className="Cart">
            <h1>Total (N{totalPrice})</h1>

            {stickersInCart.map((sticker, idx) => (
                <div key={sticker.name} className="sticker">
                    <img
                        src={sticker.image}
                        alt={sticker.image}
                        id={sticker.image}
                        className='item-image'
                    />
                    
                    <h3>{sticker.name}</h3>
                    <div>
                        <h4>{sticker.currency} {sticker.price}</h4>
                    </div>
                    
                    <button id={idx} onClick={removeStickerFromCart}> Remove Sticker </button>
                </div>
            ))}
        </div>
    );
}

export default Cart