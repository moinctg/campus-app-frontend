import React from 'react';
import './Banner.css';
import img1 from '.././../../Images/cartoon/cartoon-2.png';

const Banner = () => {
    return (
    
    <div className="container">
      <div className="row">
        <div className='col-md-6 banner-head'>
        <h1>Advanced Features to Grow <br />Your Business</h1>
        
          <p>Welcome to  Creative Campus, one of the best software companies in Bangladesh. Welcome to a company where your ideas count, where your determination creates a new world, where your talent and hard-works are rewarded. At <span className='banner-span'>Creative Campus</span> &nbsp;we always endeavor to lead towards development and creating a flexible, dynamic and cooperative organizational cultural. <span className='banner-span'>Creative Campus</span> is one of the promising software, web application, mobile application &amp; game development companies of Bangladesh which aims at creating a new standard in the era of software technology.</p></div>
        
        <div className='col-md-6'>
        <img className="banner-img" src={img1} width="120px" height="120px" alt="cartoon-1.png"  />
        </div>
        <div className='row'>
        <div className='col-md-12'>

        
         <div className='banner-button'>
          <div className="hire-us-btn1">
            <a href="#">Hire From Us</a>
          </div>
          <div className="contact-with-us-btn1">
            <a href="#">Contact With Us</a>
          </div>  
          </div>  
          </div>
        </div>  
        </div>
        </div>
       
     
    
 

    );
};

export default Banner;