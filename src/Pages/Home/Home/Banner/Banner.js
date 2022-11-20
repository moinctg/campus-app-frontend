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
       

        <div class="carousel-item active">

            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className='text-white'>Advanced Features to Grow
Your Business
                    </h1>
                    <p className='text-white'>Welcome to Creative Campus, one of the best software companies in Bangladesh. Welcome to a company where your ideas count, where your determination creates a new world, where your talent and hard-works are rewarded. At Creative Campus  we always endeavor to lead towards development and creating a flexible, dynamic and cooperative organizational cultural. Creative Campus is one of the promising software, web application, mobile application & game development companies of Bangladesh which aims at creating a new standard in the era of software technology.

                        </p>
                      
                        <button className="panda-btn-buy">HIRE FORM US </button>
                        
                        <button className="panda-btn-contact m-3">CONTACT WITH US</button>
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
                    <p className='text-white'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.</p>
                       
                        <button class="panda-btn-buy">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img3} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className="text-white">Professonal Course</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis.
                    </p>
                        <button class="panda-btn-buy">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img1} class="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="row p-5 mb-2  text-dark d-flex align-items-center">
                <div class="col-lg-6 ">
                    <h1 className="text-white">Advanced Course</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi
                    animcupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est
                    aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia
                    pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
                    commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa
                    proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
                    eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim.
                    Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et
                    culpa duis </p>
                        <button class="panda-btn-buy">Buy Now </button>
                </div>
                <div class="col-lg-6">
                    <img src={img2} class="d-block w-100" alt="..."/>
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