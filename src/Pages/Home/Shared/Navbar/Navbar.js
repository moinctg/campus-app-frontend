import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../../../../images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faShoppingCart, faUserCircle  } from '@fortawesome/free-solid-svg-icons';
// import './Navbar.css';
// import useAuth from '../../../../hooks/useAuth';
import { Nav,Button} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import React from 'react';

const Navbar = () => {

  // const element = <FontAwesomeIcon icon={faShoppingCart} />
  // const icon =<FontAwesomeIcon icon={faUserCircle} />

  // const { user, logOut } = useAuth()
    return (
      <div>
    <section id="home" classname="home">
  <div classname="navbar">
    <div classname="wrapper">
      <div classname="container">
        <div classname="logo">
          <a href="Index.html"><img src="./assest/images/logo/logo.png" alt="logo" /></a>
        </div>
        <div classname="main-nav">
        <ul>
                            {/* <li><a href="Index.html">Home</a></li>
                            <li><a target="_blank" href="./software.html">Software</a></li>
                            <li><a target="_blank" href="./service.html">Service</a></li>
                            <li><a target="_blank" href="./assest/Our Courses/course.html">Courses</a></li>
                            <li><a target="_blank" href="./contact.html">Contact Us</a></li>
                            <li><a target="_blank" href="./about-us.html">About Us</a></li>
                            <li><a target="_blank" href="./review.html">Reviews</a></li>
                            <li><a href="#">Help Center</a></li> */}
                        </ul>

                        <li className="nav-item active ">
        {/* <a className="nav-link" href="#">Home <span className="sr-only"></span></a> */}
        <Nav.Link  className="nav-link" as={Link} to="/home">Home</Nav.Link>
      </li>
      <li className="nav-item">
        {/* <Link className='nave-link' to="/portfolio" >Our Portfolio</Link> */}
        <Nav.Link  className="nav-link" as={Link} to="/portfolio">Software</Nav.Link>
     
      </li>
      <li className="nav-item">
        {/* <Link className="nav-link" to="/ourteam">Our Team <Link/> */}
        <Nav.Link  className="nav-link" as={Link} to="/ourteam">Service</Nav.Link>
        </li>
      <li className="nav-item">
       
        {/* <Link className='nave-link' to="/contact" >Contact us</Link> */}
        <Nav.Link  className="nav-link" as={Link} to="/contact">About Us</Nav.Link>
      </li>
      <li className="nav-item nav">
      <Nav.Link  className="nav-link" as={Link} to="/login">Reviews</Nav.Link>
      </li>
       
      <li className="nav-item nav">
      <Nav.Link  className="nav-link" as={Link} to="/">Help Center</Nav.Link>
      </li>
       

     {/* <a>
            {
              user ?.email ?
               <>
               {user?.displayName}  <Button onClick={ logOut }>Logout</Button>
               <li className="nav-item">
       
       <Link className='nave-link' to="/contact" >Contact us</Link> */}
        {/* <Nav.Link  className="nav-link" as={Link} to="/dashboard">Dashboard</Nav.Link>
      </li>
                </>
               
               : <Nav.Link className='nav' as={Link} to="/login">Login</Nav.Link>
            }
            
          </a>  */} 
      
 
        </div>
      </div>
    </div>
  </div>
</section>

</div>


 
    );
};

export default Navbar;