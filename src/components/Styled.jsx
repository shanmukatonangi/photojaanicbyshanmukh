
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-responsive-carousel';
import Filter from "./Filter";




const Styled = () => {
  function dialog(){
    window.alert("Hello, you have succesfully created your own canva😍")
  }
    
  return (
    <div className="carousel">
                <h2>Canvas Lite</h2>
                <Carousel autoPlay interval="5000" transitionTime="1000">
                    <div>
                        <img src="images/air_canvas_big_thumbnail_1.jpg" />
                        
                    </div>
                    <div>
                        <img src="images/air_canvas_big_thumbnail_2.jpg" />
                        
                    </div>
                    <div>
                        <img src="images/air_canvas_big_thumbnail_3.jpg" />
                       
                    </div>
                    <div>
                        <img src="images/air_canvas_big_thumbnail_4.jpg" />
                        
                    </div>
                </Carousel>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laboriosam quos dolores praesentium non sequi laudantium soluta perspiciatis quis modi. Molestias, numquam. Aperiam reiciendis et cumque iure quae impedit. Possimus.</p>

              
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}><div style={{width:"50%"}}><Filter /></div><div style={{display:"flex",alignItems:"center",justifyContent:"center" ,height:"100px",width:"100px",backgroundColor:"gray",zIndex:"999"}}><img src="https://tse1.mm.bing.net/th?id=OIP.HnTtVzW1F1lqYmBXphdYfgHaHa&pid=Api&P=0" /></div></div>
              <div style={{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center"}}>
                <h2 style={{color:"red"}}>GET 20% Off</h2>
                <p>Use Code:FBGC</p>
                <button onClick={()=>dialog()} style={{backgroundColor:"red",color:"white",height:"70px",width:"200px",border:"none",borderRadius:"3px",fontSize:"30px"}}>CREATE</button>
              </div>
            </div>
  )
}

export default Styled
