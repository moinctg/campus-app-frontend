import React from 'react';
import './Experts.css'
import img1 from '../Images/cartoon/cartoon-3.png';
const Experts = () => {
    return (
   
  <div classname="container">
    <section id="development-experts" className="developmnt-experts">
      <div classname="row">
        <div classname="col-md-12">
          <div className="container">
            <div className="wrapper">
              <div className="development-experts-header">
                <h1>We are development experts <br /> on all technologies</h1>
              </div>
              </div>
              </div>
              <div className='row'>
                <div className='col-md-7'>
              <div className="development-experts-left-part">
                <div className="dv-card1">
                  <div className="dv-icon">
                    <i className="fa-solid fa-code" />
                  </div>
                  <h1>Web Development</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                <div className="dv-card2">
                  <div className="dv-icon">
                    <i className="fa-brands fa-uncharted" />
                  </div>
                  <h1>Software Development</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                <div className="dv-card3">
                  <div className="dv-icon">
                    <i className="fa-brands fa-app-store" />
                  </div>
                  <h1>Apps Development</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam itaque hic consequatur illum illo enim nisi quaerat eveniet ipsum? Est quasi dolores aperiam voluptates nostrum earum tempora sit consequuntur explicabo!</p>
                </div>
                </div>
                </div>
                <div className='col-md-5 '>
             
                  <img className='p-5' src={img1}  width="100%" height="100%" alt="cartoon-3.png" />
                
              </div>
            </div>
          </div>
        </div>
     
    </section>
  </div>
  );
};

export default Experts;