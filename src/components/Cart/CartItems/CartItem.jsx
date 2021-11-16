import React from 'react';
import CardProduct from "../../../assets/instagram-img1.jpg";

const CartItem = () => {
   return (
      <li className="card__product-item">
            <img
              style={{ width: "80px", height: "80px" }}
              src={CardProduct}
              alt=""
              className="card__product-img"
            />
            <div className="card__product-text">
              <div className="name">Женские кроссовки Puma Force 1 Shadow</div>
              <div className="price">190 789 ₽ </div>
            </div>
            <div className="card__product-button">
              <div className="card__product-button-top">
                <button className="add">+</button>
                <div className="amount">1</div>
                <button className="remove">-</button>
              </div>
              <div className="card__product-button-bottom">
                <button className="delete">Удалить</button>
              </div>
            </div>
          </li>
   );
}
 
export default CartItem;