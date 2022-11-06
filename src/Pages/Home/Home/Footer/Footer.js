import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div>
  <hr className="footer-top-border" />
  <section id="footer" className="footer">
    <div className="container">
      <div className="wrapper">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="./assest/images/logo/logo.png" alt="logo" />
          </div>
          <div className="left-content">
            <li><i className="fa-solid fa-location-dot" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uttara, Uttarkhan, Gazipara, Hashem Gazi Road Dhaka 1230.</li>
            <li><i className="fa-solid fa-envelope" /> &nbsp;&nbsp;&nbsp; creativecampusbd@gmail.com</li>
            <li><i className="fa-solid fa-phone" />&nbsp;&nbsp;&nbsp; +880 19863 - 06582</li>
            <li><i className="fa-solid fa-clock" />&nbsp;&nbsp;&nbsp; (Available : 10:00am to 08:00pm)</li>
          </div>
          <div className="center-content">
            <li>Home</li>
            <li>About Us</li>
            <li>Service</li>
            <li>Course</li>
            <li>Products</li>
          </div>
          <div className="right-content">
            <h1>Follow Us</h1>
            <div className="icon-area">
              <a href="#"><i className="fa-brands fa-facebook-square" /></a>
              <a href="#"><i className="fa-brands fa-instagram-square" /></a>
              <a href="#"><i className="fa-brands fa-linkedin" /></a>
              <a href="#"><li><i className="fa-brands fa-youtube" /></li></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br /><br /><br />
  <section className="bottom-footer" id="bottom-footer">
    <div className="container">
      <div className="wrapper">
        <div className="copyright">
          <a href="#">Copyright © 2022 - 2025 creativec-ampus.com</a>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};

export default Footer;