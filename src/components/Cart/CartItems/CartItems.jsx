import React from "react";
import CartItemsTop from "../CartItems/CartItemsTop";
import CartItem from "../CartItems/CartItem";

const CartItems = () => {
  return (
    <div className="cart__items">
      <CartItemsTop />
      <div className="cart__items-bottom">
        <ul className="card__product">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
