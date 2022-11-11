import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import img1 from '../Images/img1.svg';
import './Promo.css';

const Promo = () => {
    return (
        <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='text-white text-center'>We Help You Stay Connected</h1>
            <p className='text-white text-center m-5 p-4 w-50'>Dynamically initiate market positioning total linkage with clicks-and-mortar technology procrastinate compelling data for markets.</p>
          </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 shadow-lg p-3 mb-5  rounded">
  <div class="col ">
    <div class="card h-100 bg-card mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      <img src={img1} class="card-img-top w-25 pt-4 text-white" alt="..."/>
      <div class="card-body">
        <h5 class="card-title text-center text-white ">Card title</h5>
        <p class="card-text text-center p-3 text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-card-mid mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      {/* <img src="..." class="card-img-top" alt="..."/> */}
      <svg viewBox="0 0 10 10" xmlns="https://iconscout.com/lottie/web-builder-6564577">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
      <div class="card-body">
        <h5 class="card-title text-center  text-white">Card title</h5>
        <p class="card-text text-center p-3 text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 bg-card-right mb-5 p-3 border p-3 mb-2 rounded-2  d-flex align-items-center justify-content-between">
      <img src="..." class="card-img-top" alt="..."/>
      
      <div class="card-body">
        <h5 class="card-title text-center text-white ">Card title</h5>
        <p class="card-text text-center text-white">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  
</div>

        </div>
   
      
     
   
    );
};

export default Promo;