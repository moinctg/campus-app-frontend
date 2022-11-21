// import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../Images/logo/logo.png';
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
 
      
  
  <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#"> 
    <div classname="logo">
          <a href=""> <img  className="logo p-3" src={logo}  width="100px" height="100px" alt="logo" /></a>
        </div>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-4 mb-lg-0 m-6 m-3">
        <li className="nav-item  ">
          <a className="nav-link active text-white " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Software</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Service</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">About Us </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Reviews</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-white">Help Center</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

</div>
 
    );
};

export default Navbar;