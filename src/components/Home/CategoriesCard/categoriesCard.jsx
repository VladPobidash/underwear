import React from "react";
import "../CategoriesCard/categoriesCard.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import CardSale1 from "../../assets/card-sale-1.jpg";

const CategoriesCard = () => {
  const CategoriesCardStorage = [
    { id: 1, name: "Купальники", photo: CardSale1 },
    { id: 2, name: "Бюстгалтери", photo: CardSale1 },
    { id: 3, name: "Трусики", photo: CardSale1 },
    { id: 4, name: "Комплекты", photo: CardSale1 },
  ];
  return (
    <section className="categoriesCard">
      <div className="container categoriesCard__container">
        <span className="categoriesCard__title">Categories</span>
        <div className="categoriesCard__wrapper">
          {CategoriesCardStorage.map((cat) => {
            return (
              <div className="categoriesCard__card">
                <img
                  className="categoriesCard__img"
                  src={cat.photo}
                  alt="categoriesCard-img"
                />
                <div className="categoriesCard__bottom">
                  <div className="categoriesCard__text">{cat.name}</div>
                  <Tabs>
                    <Tab
                      sx={{
                        background: "#e8b395",
                        borderRadius: "10px",
                        color: "#FFF",
                      }}
                      className="categoriesCard__btn"
                      label="Перейти"
                      to="/asdafssaf"
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

export default CategoriesCard;
