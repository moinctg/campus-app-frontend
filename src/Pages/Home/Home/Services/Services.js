
import React, { useState, useEffect } from 'react';
import img1 from '../../../Images/coding.png';
import  MyTimeline from './MyTimeline';
import './Service.css';



const Services = () => {
  const myList = [
    { 
      
      status: "Download",
      details1: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loreom",
      name: "Extreme ",
    
      t: "maor k"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme  at ",
      name: "Extreme ",
      t: "s k"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme at me2",
      name: "Extreme ",
      t: "Demo"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "conclusion lorem imp3",
      statusE: "In Progress",
      name: "example some",
      t: "Maor tt"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme  at Maor Tt4",
      name: "Extreme ",
      t: "Maor tt"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme  at Demoko5",
      name: "Extreme ",
      t: "Demo"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme  at Maor Tt6",
      statusE: "In Progress",
      name: "Extreme ",
      t: "Maor tt"
    },
    {
      data: "2018-03-22",
      status: "status",
      details1: "Extreme  at Maor Tt7",
      name: "Extreme ",
      t: "Maor Tnt"
    }
  ];
  const [labelWidth, setlabelWidth] = useState(140);
  const [amountMove, setamountMove] = useState(140);
  const [lineColor, setlineColor] = useState("#49bd95");
  const [darkMode, setdarkMode] = useState(true);
  const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
    return (
      <div>


  return (
    <div className="App">
      <div className="title">
        Horizontal Timeline
      </div>
      <MyTimeline
        myList={myList}
        labelWidth={labelWidth}
        amountMove={amountMove}
        lineColor={lineColor}
        darkMode={darkMode}
        eventTextAlignCenter={eventTextAlignCenter}
      />
    </div>
        
      </div>

       
      
    );  
};

export default Services;