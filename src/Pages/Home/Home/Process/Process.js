import React from 'react';
import './Process.css'
const Process = () => {
    return (
       
  <section className="process" id="process">
    <div classname="container">
      <div classname="row">
        <div classname="col-sm-12">
          <div className="container">
            <div className="wrapper">
              <div className="process-header">
                <span>Process</span>
                <h1>Our Work Process</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia atque, voluptate vel, eius possimus perspiciatis quaerat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    <div className='row  process-card'>
      <div className='col-md-3 research '>
        <span className='card-hover'>1</span>
        <h2 className='text-center text-white '>Research</h2>
        <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia atque, voluptate vel, eius possimus perspiciatis quaerat.</p>
           

      </div>
      <div className='col-md-3 designing'>
      <span className='card-hover'>2</span>
        <h2 className='text-center text-white '>Designing</h2>
        <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia atque, voluptate vel, eius possimus perspiciatis quaerat.</p>
    
                   
        </div>
      <div className='col-md-3 building'>
      <span className='card-hover'>3</span>
      <h2 className='text-center text-white '>Duilding</h2>
        <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia atque, voluptate vel, eius possimus perspiciatis quaerat.</p>
    
                   </div>
      <div className='col-md-3 deliver'>
      <span className='card-hover'>4</span>
      <h2 className='text-center text-white '>Deliver</h2>
        <p className='text-center text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quia atque, voluptate vel, eius possimus perspiciatis quaerat.</p>
                   

      </div>
    </div>
      </div>
      </section>
  );
  };
  export default Process;

