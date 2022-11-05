import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import {  icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import './Promo.css';

const Promo = () => {
    return (
        <div className='container'>
         <div className='row'>
        <div className='col promo-header'>
          
        <h1>We Help You Stay Connected</h1>
        <p>Dynamically initiate market positioning total linkage with clicks-and-mortar technology procrastinate compelling data for markets.</p>
        </div>
     </div>
   
    <div className='row'>
      <div className='col-md-4'>
      <div className="card-secton ">
        <div className="stay-c">
        <i class="fa-solid fa-wifi"></i>
        <h2>Stay Connected</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>

      </div>
      </div>
   
    
      <div className='col-md-4'>
        <div className="ep">
        <i class="fa-solid fa-users"></i>
          <h2>Encourage Participation</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>
        </div>
        <div className='col-md-4'>
        <div className="bc">
        <i class="fa-solid fa-bezier-curve"></i>
          <h2>Build Connections</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>
        </div>
        </div>
        </div>
   
      
     
   
    );
};

export default Promo;