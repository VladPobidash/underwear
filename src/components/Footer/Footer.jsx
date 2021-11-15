import React from "react";
import "../Footer/footer.scss";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer__container">
        <div className="footer__flex-wrapper">
          <div className="footer__customer">
            <p className="footer__customer-title">CUSTOMER SERVICE</p>
            <Tabs sx={{ color: "#FFF" }}>
              <Tab
                label="Phone: 380636314124"
                to="/"
                component={Link}
                sx={{ color: "#FFF", textAlign: "center" }}
              />
            </Tabs>
          </div>
          <div className="footer__company">
            <p className="footer__company-text">MORE INFORMATION</p>
            <Tabs>
              <Tab
                sx={{ color: "#FFF", textAlign: "center" }}
                label={<InstagramIcon />}
                to="/"
                component={Link}
              />
            </Tabs>
          </div>
          <div className="footer__newsletter">
            <p className="footer__newsletter-text">OUR NEWSLETTER</p>
            <form className="footer__newsletter-form">
              <input className="footer__newsletter-input" type="text" />
              <button type="submit" className="footer__newsletter-btn">
                subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
