import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <div className="footer-companyName">
          <h1 style={{ color: "red" }}>Good </h1>
          <h1 style={{ color: "#ff8d00" }}>Tech </h1>
          <h1 style={{ color: "#00b8ff" }}>Mind</h1>
        </div>

        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Good Tech Mind</p>
      </div>

      <div className="midFooter">
        <h4>Quick Links</h4>
        <a href="">Home Page</a>
        <a href="">About Page</a>
        <a href="">Products Page</a>
        <a href="">Services Page</a>
        <a href="">Employee Page</a>
        <a href="">Team Page</a>
        <a href="">Contact Page</a>
        <a href="">Blog Page</a>
        <a href="">Upcoming Page</a>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
