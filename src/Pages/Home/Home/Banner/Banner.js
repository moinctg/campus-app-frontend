import React from 'react';
import './Banner.css';
import img1 from '.././../../Images/cartoon/cartoon-1.png';
import img2 from '.././../../Images/cartoon/cartoon-3.png';
import img3 from '../../../Images/cartoon/cartoon-3.png';


const Banner = () => {
    return (
    
    <div classNameName="container">
      

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        {/* <div class="carousel-item active  ">
            <div class="row p-5 mb-2  text-white d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className='text-white'> Quality Software Development</h1>
                    <p className="text-white">This is the best headphone in the world for people who just want to waste time in front of funky world.

                    </p>
                        <h1 class="text-danger" >$420</h1>
                        <button class="panda-btn-buynow">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img1} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div> */}

        <div class="carousel-item active">

            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className='text-white'>World Wide Demand Course Sale
                    </h1>
                    <p className='text-white'>This is the best tv in the world for people who just want to waste time in front of tv.

                        </p>
                      
                        <button class="panda-btn-buynow">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img2} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className="text-white">Best IT Course</h1>
                    <p className='text-white'>This is the best x-box in the world for people who just want to waste time in front of fake sports</p>
                       
                        <button class="panda-btn-buynow">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className="text-white">Best IT Course</h1>
                    <p className='text-white'>This is the best x-box in the world for people who just want to waste time in front of fake sports</p>
                        
                        <button class="panda-btn-buynow">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className="text-white">Best IT Course</h1>
                    <p className='text-white'>This is the best x-box in the world for people who just want to waste time in front of fake sports</p>
                     
                        <button class="panda-btn-buynow">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

    
  </div>

    
       
     
    
 

    );
};

export default Banner;