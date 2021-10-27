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
  return (
    <section className="sale">
      <div className="container sale__container">
        <span className="sale__title">Sale</span>
        <div className="sale__card-wrapper">
          <div className="sale__card">
            <img className="sale__img" src={CardSale1} alt="sale" />
            <div className="sale__card-text">
              <div className="sale__left">
                <p className="sale__name">Braziliano</p>
                <span className="sale__price">300 грн</span>
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
          <div className="sale__card">
            <img className="sale__img" src={CardSale2} alt="sale" />
            <div className="sale__card-text">
              <div className="sale__left">
                <p className="sale__name">Braziliano</p>
                <span className="sale__price">300 грн</span>
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
          <div className="sale__card">
            <img className="sale__img" src={CardSale3} alt="sale" />
            <div className="sale__card-text">
              <div className="sale__left">
                <p className="sale__name">Braziliano</p>
                <span className="sale__price">300 грн</span>
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
        </div>
      </div>
    </section>
  );
};

export default Sale;
