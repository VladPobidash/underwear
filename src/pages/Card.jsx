import React, { useState } from "react";
import CardImg from "../components/assets/card-sale-3.jpg";
import "../pages/card.scss";
import { Carousel } from "react-carousel-minimal";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import Footer from "../components/Home/Footer/Footer";

const Card = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const data = [
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
    {
      image: CardImg,
    },
  ];
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      <section className="card">
        <div className="container card__container">
          <div className="card__wrapper">
            <div className="card__left">
              <div className="card__left-img">
                <div
                  style={{
                    padding: "0 20px",
                  }}
                >
                  <Carousel
                    data={data}
                    time={5000}
                    width="600px"
                    height="500px"
                    // captionStyle={captionStyle}
                    radius="10px"
                    slideNumber={true}
                    slideNumberStyle={slideNumberStyle}
                    // captionPosition="bottom"
                    dots={true}
                    // pauseIconColor="white"
                    pauseIconSize="40px"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnails={true}
                    thumbnailWidth="100px"
                    thumbnailHeight="50px"
                    className="card__left-carusel"
                    style={{
                      textAlign: "center",
                      maxWidth: "600px",
                      maxHeight: "500px",
                      margin: "0px 40px auto",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="card__right">
              <div className="right__pretitle">
                <span className="pretitle">
                  Код товара: <b className="bold">126753</b>
                </span>
                <span className="pretitle">
                  В наличии: <b className="bold">7 шт</b>
                </span>
              </div>
              <div className="right__title">
                <h2 className="title">Комплект: Braziliano</h2>
              </div>
              <div className="right__rating">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar
                        className="star"
                        size={30}
                        color={
                          ratingValue <= (hover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <div className="size__name">Выбирете размер</div>
              <div className="size__chart">
                <span className="size">
                  <a href="/">XS</a>
                </span>
                <span className="size">
                  <a href="/">XL</a>
                </span>
                <span className="size">
                  <a href="/">XXL</a>
                </span>
                <span className="size">
                  <a href="/">S</a>
                </span>
                <span className="size">
                  <a href="/">M</a>
                </span>
                <span className="size">
                  <a href="/">L</a>
                </span>
              </div>
              <div className="right__price">399 грн</div>
              <div className="rigth__btn">
                <Tabs>
                  <Tab
                    sx={{
                      fontFamily: "Lobster",
                      fontSize: "15px",
                      borderRadius: "10px",
                      padding: "3px",
                      width: "100%",
                      background: "red",
                      color: "white",
                    }}
                    className="buy__button"
                    label="Купить"
                    to="/"
                    component={Link}
                  />
                </Tabs>
              </div>
              <div className="bonuses">
                <ul className="bonuses__list">
                  <li className="bonuses__item">Отправка в день заказа</li>
                  <li className="bonuses__item">Оплата заказа при получении</li>
                  <li className="bonuses__item">Обмен в течении двух недель</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card__haracteristic">
            <div className="card__haracteristic-left">
              <div className="card__haracteristic-title">Описание</div>
              <div className="card__haracteristic-text">
                Кроссовки Nike Blazer Mid '77 Vintage Suede с винтажной подошвой
                возрождают стиль баскетбольных моделей Nike прошлого, создавая
                впечатление, что они хранились в шкафу долгие годы.
              </div>
            </div>
            <div className="card__haracteristic-right">
              <Tabs>
                <Tab
                  sx={{
                    fontSize: "15px",
                    padding: "3px",
                    width: "300px",
                    background: "#000",
                    color: "white",
                  }}
                  className="card__haracteristic-button"
                  label="Добавить отзыв"
                  to="/"
                  component={Link}
                />
              </Tabs>
            </div>
          </div>
          <div className="more__card">
             
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Card;
