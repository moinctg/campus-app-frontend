import React from 'react';
import './Footer.css';
import logo from '../../../Images/logo/logo.png';

const Footer = () => {
    return (
      <div className='container'>
        
        <hr class="footer-top-border"/>
        <section id="footer" class="footer">

        <div className='row'>
            <div className='col-md-4'>
            <div class="footer-content">
            <div classname="footer-logo">
          <a href=""> <img  className="logo p-3" src={logo}  width="100px" height="100px" alt="logo" /></a>
        </div>
    
                    <div class="left-content">
                    <li><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Uttara, Uttarkhan, Gazipara, Hashem Gazi Road Dhaka 1230.</li>
                    <li><i class="fa-solid fa-envelope"></i> &nbsp;&nbsp;&nbsp; creativecampusbd@gmail.com</li>
                    <li><i class="fa-solid fa-phone"></i>&nbsp;&nbsp;&nbsp; +880 19863 - 06582</li>
                    <li><i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp; (Available : 10:00am to 08:00pm)</li>
                    </div>
                
            </div>
            </div>
            <div className='col-md-4'>
                
            <div class="center-content">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service</li>
                        <li>Course</li>
                        <li>Products</li>
                    </div>

            </div>
            <div className='col-md-4'>
            <div class="right-content">
                        <h1>Follow Us</h1>
                        <div class="icon-area">
                            <a href="#"><i class="fa-brands fa-facebook-square"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram-square"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#"><li><i class="fa-brands fa-youtube"></i></li></a>
                        </div>

            </div>
        </div>
        </div>

        </section>
        <br/><br/><br/>
<div className='container'>
    <div className='row'>
        <div className='col-md-12'>
<section className="bottom-footer" id="bottom-footer">
    <div className="container">
        <div className="wrapper shadow-lg p-5 mb-5  rounded">
            <div className="copyright">
                <a href="#">Copyright © 2022 - 2025 creativec-ampus.com</a>
            </div>
        </div>
    </div>
    </section>
    </div>
    </div>
    </div>
  
</div>

    );
};

export default Footer;