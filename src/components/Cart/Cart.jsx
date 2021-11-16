import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CartItems from "./CartItems/CartItems.jsx";
import OrderForm from "./OrderForm/OrderForm.jsx";


import "./cart.scss";

import { useCartModal } from "./useCartModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  const { open, handleClose } = useCartModal();
  

  console.log(open);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="cart"
    >
      <Box sx={style}>
        <h2 className="cart__title">Оформление заказа</h2>
        <CartItems />
        <OrderForm />
      </Box>
    </Modal>
  );
};

export default Cart;
