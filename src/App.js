
import './App.css';
import {  BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import * as React from "react";
// import AuthProvider from './context/AuthProvider';
import Navber from './Pages/Home/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Contact from './Pages/Home/Home/Contact/Contact';
import Services from './Pages/Home/Home/Services/Services';
import Software from './Pages/Home/Home/Software/Software';
// import Register from './Pages/Register/Register';
// import Login from './Pages/Login/Login';

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Navber></Navber>

     <Routes>
       <Route path="/" element={<Home></Home>} />
       <Route path="/home" element={<Home></Home>} />
       <Route path="/contact" element={<Contact></Contact>} />
       {/* <Route path="/register" element={<Register></Register>} />
       <Route path="/login" element={<Login></Login>} /> */}
       <Route path="/service" element={<Services/>} />
       
       <Route path="/software" element={<Software/>} />
       
      
      
     </Routes>
     </Router>
  //  </AuthProvider>
  );
}

export default App;
