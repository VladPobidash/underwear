import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ComplectPhoto from "../../assets/card-sale-3.jpg";

const CategoryCard = (card) => {
  return (
    <div className="category__card">
      <img src={ComplectPhoto} alt="category__img" className="category__img" />
      <div className="card__bottom">
        <p className="card__name">{card.name}</p>
        <span className="card__price">{card.price}</span>
        <Tabs>
          <Tab
            label={<FavoriteBorderIcon className="card__like" />}
            to="/asdafssaf"
            component={Link}
          />
        </Tabs>
        <Tabs>
          <Tab
            sx={{
              fontFamily: "Lobster",
              fontSize: "15px",
              border: "1px solid #000",
              borderRadius: "10px",
              padding: "3px",
              background: "#000",
              color: "#fff",
            }}
            className="card__button"
            label="Перейти"
            to="/product/3"
            component={Link}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default CategoryCard;
