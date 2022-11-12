import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import img1 from '../Images/node.png';
import img2 from '../Images/anchor.png';
import img3 from '../Images/coding.png';
import './Promo.css';

const Promo = () => {
    return (
        <div className='container'>
        <div className='row promo-section'>
          <div className='col-sm-12 promo-section-header'>
            <h1 className=''>We Help You Stay Connected</h1>
            <p className=' '>Dynamically initiate market positioning total linkage with clicks-and-mortar technology procrastinate compelling data for markets.</p>
            
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 shadow-lg p-3 mb-5  rounded">
  <div class="col ">
    <div class="card Width auto bg-card mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      <img src={img1} class="card-img-top w-50 pt-4 text-white" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-white ">Stay Connected</h5>
        <p class="card-text text-center  text-white ">We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
      </div>
      {/* <button class="panda-btn-buynow">Order Now </button> */}
    </div>
  </div>
  <div class="col">
    <div class="card Width auto bg-card-mid mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      <img src={img2} class="card-img-top card-img-top w-50 pt-4 text-white" alt="..."/>
    
      <div class="card-body">
        <h5 class="card-title text-center  text-white">Encourage Participation</h5>
        <p class="card-text text-center  text-white">We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
      </div>
      {/* <button class="panda-btn-buynow">Order Now </button> */}
    </div>
   
  </div>
  <div class="col">
    <div class="card Width auto bg-card-right mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      <img src={img3} class="card-img-top card-img-top w-50 pt-4 text-white" alt="..."/>
      
      <div class="card-body">
        <h5 class="card-title text-center text-white ">Build Connections</h5>
        <p class="card-text text-center text-white">We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        {/* <button class="panda-btn-buynow text-center d-flex align-items-center">Order Now </button> */}
      </div>
     
    </div>
  </div>
  
</div>

        </div>
   
      
     
   
    );
};

export default Promo;