import React from "react";
import "../FirstScreen/firstScreen.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

const FirstScreen = () => {
  return (
    <section className="firstScreen">
      <div className="container firstScreen__container">
        <div className="firstScreen__wrapper">
          <h1 className="firstScreen__title">IrwhiteRoom</h1>
          <p className="firstScreen__subtitle">Feel like a queen</p>
          <Tabs>
            <Tab
              sx={{
                fontFamily: "Lobster",
                fontSize: "20px",
                border: "1px solid #000",
                borderRadius: "10px",
                padding: "5px 10px",
              }}
              className="firstScreen__btn"
              label="Перейти к покупкам"
              to="/allCategory"
              component={Link}
            />
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FirstScreen;
