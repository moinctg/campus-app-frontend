import React from 'react';
import './Banner.css';
import img4 from '../../../Images/cartoon-2.png';
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
                    <h1 className='text-white'>Advanced Features to Grow
Your Business
                    </h1>
                    <p className='text-white'>Welcome to Creative Campus, one of the best software companies in Bangladesh. Welcome to a company where your ideas count, where your determination creates a new world, where your talent and hard-works are rewarded. At Creative Campus  we always endeavor to lead towards development and creating a flexible, dynamic and cooperative organizational cultural. Creative Campus is one of the promising software, web application, mobile application & game development companies of Bangladesh which aims at creating a new standard in the era of software technology.

                        </p>
                      
                        <button class="panda-btn-buynow">HIRE FORM US </button>
                        
                        <button class="panda-btn-contact m-3">CONTACT WITH US</button>
                </div>
                <div class="col-lg-6">
                    <img src={img4} class="d-block w-100" alt="..."/>
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