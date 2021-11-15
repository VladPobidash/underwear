import React from "react";
import CategoriesCard from "../components/Home/CategoriesCard/CategoriesCard";
import FirstScreen from "../components/Home/FirstScreen/FirstScreen";
import Sale from "../components/Home/Sale/Sale";
import Instagram from "../components/Home/Instagram/Instagram";

const Home = () => {
  return (
    <div>
      <FirstScreen />
      <CategoriesCard />
      <Sale />
      <Instagram />
    </div>
  );
};

export default Home;
