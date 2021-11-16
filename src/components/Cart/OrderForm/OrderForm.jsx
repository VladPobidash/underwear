import React from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";


const OrderForm = () => {
   const [values, setValues] = React.useState({
      name: "",
      phone: "",
      email: ""
    });
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
   return (
      <div className="cart__form">
          <FormControl
            fullWidth
            sx={{ m: 1, margin: "0", marginBottom: "30px" }}
            variant="filled"
          >
            <InputLabel
              sx={{ fontSize: "16px", lineHeight: "140%" }}
              htmlFor="filled-adornment-name"
            >
             Ваше имя
            </InputLabel>
            <FilledInput
              id="filled-adornment-name"
              value={values.name}
              onChange={handleChange("name")}
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1, margin: "0", marginBottom: "30px" }}
            variant="filled"
          >
            <InputLabel
              sx={{ fontSize: "16px", lineHeight: "140%" }}
              htmlFor="filled-adornment-phone"
            >
              Номер телефона
            </InputLabel>
            <FilledInput
              id="filled-adornment-phone"
              value={values.phone}
              onChange={handleChange("phone")}
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <FormControl
            fullWidth
            sx={{ m: 1, margin: "0", marginBottom: "40px" }}
            variant="filled"
          >
            <InputLabel
              sx={{ fontSize: "16px", lineHeight: "140%" }}
              htmlFor="filled-adornment-email"
            >
              E-mail
            </InputLabel>
            <FilledInput
              id="filled-adornment-email"
              value={values.email}
              onChange={handleChange("email")}
              sx={{
                width: "100%",
              }}
            />
          </FormControl>
          <button className="cart__form-button">Оформить заказ</button>
        </div>
   );
}
 
export default OrderForm;