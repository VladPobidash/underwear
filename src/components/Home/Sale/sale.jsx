import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../Sale/sale.scss";
import CardSale1 from "../../assets/card-sale-1.jpg";
import CardSale2 from "../../assets/card-sale-2.jpg";
import CardSale3 from "../../assets/card-sale-3.jpg";

const Sale = () => {
  const saleCardStorage = [
    { id: 1, name: "Braziliano", price: "300 грн", photo: CardSale1 },
    { id: 2, name: "Strings", price: "400 грн", photo: CardSale2 },
    { id: 3, name: "Usualy", price: "500 грн", photo: CardSale3 },
  ];
  return (
    <>
      <section className="sale">
        <div className="container sale__container">
          <span className="sale__title">Sale</span>
          <div className="sale__card-wrapper">
            {saleCardStorage.map((card) => {
              return (
                <div className="sale__card">
                  <img className="sale__img" src={card.photo} alt="sale" />
                  <div className="sale__card-text">
                    <div className="sale__left">
                      <p className="sale__name">{card.name}</p>
                      <span className="sale__price">{card.price}</span>
                    </div>
                    <div className="sale__right">
                      <Tabs>
                        <Tab
                          label={<SearchIcon />}
                          to="/asdafssaf"
                          component={Link}
                        />
                      </Tabs>
                      <Tabs>
                        <Tab
                          label={<FavoriteBorderIcon className="icon" />}
                          to="/asdafssaf"
                          component={Link}
                        />
                      </Tabs>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default Sale;
