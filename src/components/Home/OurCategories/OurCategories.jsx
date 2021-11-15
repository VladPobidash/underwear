import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import CardSale1 from "../../../assets/card-sale-1.jpg";
import "./ourCategories.scss";

const OurCategories = () => {
  const OurCategoriesStorage = [
    { id: 1, name: "Купальники", photo: CardSale1 },
    { id: 2, name: "Бюстгалтери", photo: CardSale1 },
    { id: 3, name: "Трусики", photo: CardSale1 },
    { id: 4, name: "Комплекты", photo: CardSale1 },
  ];
  return (
    <section className="our_categories">
      <div className="container ourCategories__container">
        <span className="our_categories__title">Categories</span>
        <div className="our_categories__wrapper">
          {OurCategoriesStorage.map((cat) => {
            return (
              <div className="our_categories__card">
                <img
                  className="our_categories__img"
                  src={cat.photo}
                  alt="our_categories-img"
                />
                <div className="our_categories__bottom">
                  <div className="our_categories__text">{cat.name}</div>
                  <Tabs>
                    <Tab
                      sx={{
                        fontFamily: "Lobster",
                        fontSize: "15px",
                        border: "1px solid #000",
                        borderRadius: "10px",
                        padding: "3px",
                      }}
                      className="our_categories__btn"
                      label="Перейти"
                      to="/allCategories"
                      component={Link}
                    />
                  </Tabs>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurCategories;
