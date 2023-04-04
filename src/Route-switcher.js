import React from "react";
import './Route-switcher.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Availablestickers from './components/AvailableStickers';
import Homepage from "./components/HomePage";
import ShopPage from "./components/Shop";
import Cart from "./components/Cart";
import Nav from "./components/Nav";


const RouteSwitch = () => {

  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  const addStickerToCartByIdx = (e) => {
    const idx = parseInt(e.target.id);
    const sticker = Availablestickers[idx];
    setCart(cart.concat(sticker));
  }

  const removeStickerFromCart = (e) => {
    const idx = parseInt(e.target.id);
    const holdCart = cart.slice();
    holdCart.splice(idx, 1);
    setCart(holdCart);
  }

  const updateCartSize = () => {
    setCartSize(cart.length);
  }

  useEffect(() => {
    updateCartSize();
  });

  return (
    <Router shop>
      <Nav
        cartSize={cartSize} 
      />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/shop" element={
          <ShopPage
            stickersInshop={Availablestickers}
            addStickerToCartByIdx={addStickerToCartByIdx}
            removeStickerFromCart={removeStickerFromCart}
            cart={cart}
          />
        } />

        <Route path="/cart" element={
          <Cart
            stickersInCart={cart}
            removeStickerFromCart={removeStickerFromCart}
          />
        } />

      </Routes>
    </Router>
  );
};

export default RouteSwitch;