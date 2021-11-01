import React from "react";
import CategoriesCard from "../components/Home/CategoriesCard/categoriesCard";
import FirstScreen from "../components/Home/FirstScreen/FirstScreen";
import Footer from "../components/Home/Footer/Footer";
import Sale from "../components/Home/Sale/sale";
import SectionInstagram from "../components/Home/SectionInstagram/sectionInstagram";

const Home = () => {
  return (
    <div>
      <FirstScreen />
      <Sale />
      <SectionInstagram />
      <CategoriesCard />
      <Footer />
    </div>
  );
};

export default Home;
