import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div className='container'>
        
        <hr class="footer-top-border"/>
        <section id="footer" class="footer">

        <div className='row'>
            <div className='col-md-4'>
            <div class="footer-content">
                    <div class="footer-logo">
                    <img src="./assest/images/logo/logo.png" alt="logo"/>
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
  
</div>

    );
};

export default Footer;