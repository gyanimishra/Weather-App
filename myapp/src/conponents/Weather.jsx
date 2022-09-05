import React, { useEffect } from 'react'
import { useState } from 'react'
import './Weather.css'
import axios from 'axios'
const Weather = () => {
  const [Alldata,setAlldata]= useState([])

  useEffect( ()=>{
    axios.get("http://localhost:8080/weather").then((res)=>{
      setAlldata(res.data[0].query.results.channel)
    })
    
   
  },[Alldata])

console.log(Alldata);
 

  return (
    <div>

    
               <div id='main'>

               <div id='main1'>
                 <h2>New York City ,US As, United States</h2>
       
                 <div id='main2'>
                   <p id='h1hh'> 21</p>
                   <h1>Clear</h1>
                   <h1>Day 30 night 30 </h1>
       
                 </div>
       
                 <div id='white-part'>
                 <h1 id='whiteparth1'>New York City ,US As, United States 23, us </h1>
       
                  <div id='weather'>
                   <div>
                     <h3>Morning</h3>
                     <h1 style={{color:"#3070f0",fontSize:"60px"}}>25</h1>
                     <h2>0%</h2>
                   </div>
                   <div>
                   <h3>AfterNoon</h3>
                     <h1 style={{color:"#3070f0",fontSize:"60px"}}>25</h1>
                     <h2>5%</h2>
                   </div>
                   <div>
                   <h3>Evening</h3>
                     <h1 style={{color:"#3070f0",fontSize:"60px"}}>25</h1>
                     <h2>10%</h2>
                   </div>
                   <div>
                   <h3>Night</h3>
                     <h1 style={{color:"#3070f0",fontSize:"60px"}}>25</h1>
                     <h2>30%</h2>
                   </div>
                  </div>
       
                 </div>
               </div>
             
             </div>
             
  
     
      
    </div>
  )
}

export default Weather
