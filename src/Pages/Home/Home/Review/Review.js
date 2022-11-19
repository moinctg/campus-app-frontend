import React from 'react';
import './Testimonials.css';
import img1 from  '../.././../Images/img11.png';
import img2 from '../.././../Images/img12.png';
import img3 from '../.././../Images/img13.png';


const Testomonials = () => {
    return (
        <div className='Container mt-5 pt-4'>
            <h1 className='text-center text-white'>Testimonials</h1>
            <div  className='row pt-4 '>
                <div className='col-md-4 flex-d'>
                   <div className="text-center"> <img src={img1} width={'64'} height={'64'} alt=""></img>   
                    </div>
                    <div className='text-white text-center'>Nash Patrik <br/>
                    CEO</div>
                    <p className="text-white text-cetner ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>                
                </div>
                <div className='col-md-4'>
                <div  className="text-center"> <img src={img2} width={'64'} height={'64'} alt=""></img>  </div>
                <div className='text-white text-center'>Nash Patrik <br/>
                    CEO</div>
                    <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>                
                </div>

                
                <div className='col-md-4'>
                <div  className='text-center'> <img  src={img3}width={'64'} height={'64'} alt=""></img>  </div>
                <div className='text-white text-center'>Nash Patrik <br/>
                    CEO</div>
                    <p className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>                
                </div>
                
                


               
            </div>
        </div>
    );
};

export default Testomonials;