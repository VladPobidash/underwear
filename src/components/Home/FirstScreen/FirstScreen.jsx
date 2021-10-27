import React from "react";
import "../FirstScreen/firstScreen.scss";

const FirstScreen = () => {
  return (
     <section className="firstScreen">
        <div className="container firstScreen__container">
           <div className="firstScreen__wrapper">
              <h1 className="firstScreen__title">IrwhiteRoom</h1>
              <p className="firstScreen__subtitle">Feel like a queen</p>
              <button className="firstScreen__btn">Перейти к покупкам</button>
           </div>
        </div>
     </section>
  );
};

export default FirstScreen;
