import React from "react";
import { useRouteMatch } from "react-router";

import Nouislider from "nouislider-react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CategoryCard from "./CategoryCard";
import "./category.scss";

const CategoryLayout = () => {
  const route = useRouteMatch();
  console.log(route);
  const categoryPath = [
    { _id: 1, text: "Комплекти", path: "/kits" },
    { _id: 2, text: "Бюзгальтери", path: "/bras" },
    { _id: 3, text: "Трусики", path: "/panties" },
    { _id: 4, text: "Купальники", path: "/swimwear" },
    { _id: 5, text: "SALE", path: "/sale" },
    { _id: 6, text: "All Category", path: "/allCategories" },
  ];

  const currentCategory = categoryPath.find((k) => k.path === route.path);

  const cardStorage = [
    { id: 1, photo: "", name: "Braziliano", price: "300 грн" },
    { id: 2, photo: "", name: "Chilintano", price: "400 грн" },
    { id: 3, photo: "", name: "Maximiliano", price: "500 грн" },
    { id: 4, photo: "", name: "Djekichano", price: "600 грн" },
  ];

  return (
    <section className="category">
      <div className="container category__container">
        <h1 className="category__title">{currentCategory.text}</h1>
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
            <div className="category__filter-fits">
              <table>
                <tbody>
                  <tr>
                    <td>XS</td>
                    <td>S</td>
                    <td>M</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>XL</td>
                    <td>XXL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="category__color-title">Фильтер по цвету</div>
            <div className="category__color-table">
              <table className="table__color">
                <tbody>
                  <tr>
                    <td className="table__color-black"></td>
                    <td className="table__color-wheat"></td>
                    <td className="table__color-red"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="category__reset">
              <Stack direction="row" spacing={2}>
                <Button
                  className="category__reset-btn"
                  variant="outlined"
                  style={{
                    color: "#000",
                    borderColor: "#000",
                    fontFamily: "Lobster",
                  }}
                >
                  Сбросить все
                </Button>
              </Stack>
            </div>
          </div>
          <div className="category__right">
            <Box className="category__sort" sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Сортировать цену по
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
              {cardStorage.map((card) => (
                <CategoryCard key={card.id} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Stack spacing={2} className="category__pagination">
        <Pagination count={11} defaultPage={1} siblingCount={0} />
      </Stack>
    </section>
  );
};

export default CategoryLayout;
