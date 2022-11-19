import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
      
        <div className="container pt-4">
       <section className="contact" id="contact">

   

      <div className='row'>
        <div className='col-md-6'>
        <div className="contact-section">
        <div className="contact-form">
          <h1>Get In Touch</h1>
          <div className="input-section">
            <form action="?php" method="post">
              <input type="text" name="name" id="name" placeholder="Your Name" required /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <input type="text" name="email" id="email" placeholder="Your Email" required /> <br /> 
              <input type="text" name="contactNumber" id="contactNumber" placeholder="Your Contact Number" /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <select name="Choose-a-Service" id="Choose-a-Service">
                <option value="Choose-a-Service">Choose a Service</option>
                <option value="Choose-a-Service">Learning Campus</option>
                <option value="Choose-a-Service">Software</option>
                <option value="Choose-a-Service">Web Design</option>
                <option value="Choose-a-Service">Web Development</option>
                <option value="Choose-a-Service">Apps Development</option>
                <option value="Choose-a-Service">Courses</option>
                <option value="Choose-a-Service">Payment</option>
                <option value="Choose-a-Service">Others</option>
              </select> <br />
              <textarea name="message" id="message" cols={30} rows={10} placeholder="Type Your Message....." required defaultValue={""} />
              <div className="submit-btn">
                <a href="#">Submit Now &nbsp;<i className="fa-solid fa-right-long" /></a>
                
              </div>
              </form>-+






               
          
        </div>
        </div>
        </div>
        </div>
        {/* <div className='col-md-6'>
        <div className="contact-right-section">
                <div className="card-1">
                  <h2>Office Address</h2>
                  <i className="fa-solid fa-location-dot" /> <p>Uttara, Uttarkhan, Gazipara, Hashem Gazi Road, Uttara Dhaka 1230.</p>  
                </div>
                <div className="card-2">
                  <h2>Official Mail</h2>
                  <i className="fa-solid fa-envelope" /> <p>creativecampusbd@gmail.com</p>  
                </div>
                <div className="card-3">
                  <h2>Official Contact No.</h2>
                  <i className="fa-solid fa-phone" /> <p>+880 19863 - 06582</p>  
                </div>
              </div>

        </div> */}
      </div>
      
              
            
      
        
   
 
</section>

      </div>
    );
};

export default Contact;