import React from 'react';

const CartItemsTop = () => {
   return (
      <div className="cart__items-top">
        <div className="items__order">
          Товаров в заказе: <span className="items__order-span">3 шт</span>
        </div>
        <div className="total__price">
          Общая сумма заказа:{" "}
          <span className="total__price-span">25 789 ₽</span>
        </div>
      </div>
   );
}
 
export default CartItemsTop;