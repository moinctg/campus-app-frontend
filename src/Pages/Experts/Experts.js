import React from 'react';
import './Experts.css'
import img1 from '../Images/cartoon/cartoon-3.png';
const Experts = () => {
    return (
   
  <div classname="container">
  
      <div classname="row">
        <div classname="col-md-12 col-12 col-lg-12">
          <div className="container">
         
              <div className="development-experts-header">
                <h1>We are development experts <br /> on all technologies</h1>
              </div>
              
              </div>
              </div>
              </div>
              <div className='row p-3'>
              <div className='col-md-6 col-lg 6 col-12'>
              <div className="row">
                <div className='col-md-4 col-lg 4 col-12 '>
           
                <div className="shadow-lg p-3 w-100  rounded ">
                  <div className="dv-icon">
                    <i className="fa-solid fa-code" />
                  </div>
                  <h1 className='text-white text-center'>Web Development</h1>
                  <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                <div className='col-md-4 col-lg 4 col-12'>
                <div className="shadow-lg p-3 w-100  rounded ">
                  <div className="dv-icon">
                    <i className="fa-brands fa-uncharted" />
                  </div>
                  <h1 className='text-white text-center'>Software Development</h1>
                  <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                </div>
                <div className='col-md-4 col-lg 4 col-12'>
                <div className="shadow-lg p-3 w-100  rounded ">
                  <div className="dv-icon">
                    <i className="fa-brands fa-app-store" />
                  </div>
                  <h1 className='text-white text-center'>Apps Development</h1>
                  <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className='col-md-6  col-lg 6 col-12  pt-4  d-flex align-items-center'>
             
                  <img className='p-3  w-75' src={img1}   alt="cartoon-3.png" />
                
              </div>
            </div>
          
    
  </div>
  );
};

export default Experts;