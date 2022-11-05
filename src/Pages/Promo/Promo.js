import React from 'react';
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
      <div className="card-secton">
        <div className="stay-c">
          <i className="fa-solid fa-wifi" />
          <h2>Stay Connected</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>

      </div>
      </div>
   
    
      <div className='col-md-4'>
        <div className="ep">
          <i className="fa-solid fa-users" />
          <h2>Encourage Participation</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>
        </div>
        <div className='col-md-4'>
        <div className="bc">
          <i className="fa-solid fa-bezier-curve" />
          <h2>Build Connections</h2>
          <p>We are always at your service. Stay tuned with absolute ideas to get technical support on any topic.</p>
        </div>
        </div>
        </div>
        </div>
     
      
     
   
    );
};

export default Promo;