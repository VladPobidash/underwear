import React from "react";
import "../SectionInstagram/sectionInstagram.scss";
import Instagram from "../../assets/instagram-logo.png";
import InstagramImg1 from "../../assets/instagram-img1.jpg";
import InstagramImg2 from "../../assets/instagram-img2.jpg";
import InstagramImg3 from "../../assets/instagram-img3.jpg";
import InstagramImg4 from "../../assets/instagram-img4.jpg";
import InstagramImg5 from "../../assets/instagram-img5.jpg";

const SectionInstagram = () => {
  return (
    <section className="instagram">
      <div className="container instagram__container">
         <img src={Instagram} alt="logo-instagram" className="instagram__img" />
        <div className="instagram__wrapper">
          <div className="instagram__wrapper-left">
            <img className="img-size" src={InstagramImg1} alt="instagram1" />
            <img className="img-size"  src={InstagramImg2} alt="instagram2" />
          </div>
          <div className="instagram__wrapper-center">
            <img className="img-size-big"  src={InstagramImg3} alt="instagram3" />
          </div>
          <div className="instagram__wrapper-right">
            <img className="img-size"  src={InstagramImg4} alt="instagram4" />
            <img className="img-size"  src={InstagramImg5} alt="instagram5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInstagram;
