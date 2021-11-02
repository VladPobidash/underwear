import { useRouteMatch } from "react-router";
import React, { useState } from "react";
import "../pages/category.scss";
import Nouislider from "nouislider-react";
import Footer from "../components/Home/Footer/Footer";
import ComplectPhoto from "../components/assets/card-sale-3.jpg";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const Category = () => {
  const route = useRouteMatch();
  console.log(route);
  const categoryPath = [
    { _id: 1, text: "Комплекти", path: "/kits" },
    { _id: 2, text: "Бюзгальтери", path: "/bras" },
    { _id: 3, text: "Трусики", path: "/panties" },
    { _id: 4, text: "Купальники", path: "/swimwear" },
    { _id: 5, text: "SALE", path: "/sale" },
  ];

  const kkk = categoryPath.map((k) => {
    if (k.path === route.path) {
      return k.text;
    }
  });

  const cardStorage = [
    { id: 1, photo: ComplectPhoto, name: "Braziliano", price: "300 грн" },
    { id: 2, photo: ComplectPhoto, name: "Chilintano", price: "400 грн" },
    { id: 3, photo: ComplectPhoto, name: "Maximiliano", price: "500 грн" },
    { id: 4, photo: ComplectPhoto, name: "Djekichano", price: "600 грн" },
  ];

  return (
    <section className="category">
      <div className="container category__container">
        <h1 className="category__title">{kkk}</h1>
        <div className="category__wrapper">
          <div className="category__left">
            <div className="category__wrapper-slider">
              <div className="slider__title">Цена</div>
              <Nouislider
                range={{ min: 0, max: 100 }}
                start={[0, 100]}
                tooltips
              />
            </div>
            <div className="category__filter-title">Фильтер по размеру</div>
            <div className="category__filter-table">
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      <a href="#">XS</a>
                    </th>
                    <th>
                      <a href="#">S</a>
                    </th>
                    <th>
                      <a href="#">M</a>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <a href="#">L</a>
                    </th>
                    <th>
                      <a href="#">XL</a>
                    </th>
                    <th>
                      <a href="#">XXL</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="category__color-title">Фильтер по цвету</div>
            <div className="category__color-table">
              <table className="table__color">
                <tbody>
                  <tr>
                    <th>
                      <a href="#">1</a>
                    </th>
                    <th>
                      <a href="#">2</a>
                    </th>
                    <th>
                      <a href="#">3</a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="category__reset">
              <button className="category__reset-btn">Сбросить все</button>
            </div>
          </div>
          <div className="category__right">
            <Box className="category__sort" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Сортировать по
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "Сортировать по",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Возростанию</option>
                  <option value={20}>Убиванию</option>
                </NativeSelect>
              </FormControl>
            </Box>
            <div className="category__cards">
              {cardStorage.map((card) => {
                return (
                  <div className="category__card">
                    <img
                      src={card.photo}
                      alt="category__img"
                      className="category__img"
                    />
                    <p className="card__name">{card.name}</p>
                    <span className="card__price">{card.price}</span>
                    <div className="card__bottom">
                      <Tabs>
                        <Tab
                          label={<FavoriteBorderIcon className="card__like" />}
                          to="/asdafssaf"
                          component={Link}
                        />
                        <button className="card__button">Купить</button>
                      </Tabs>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Category;
