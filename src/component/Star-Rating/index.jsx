import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './star.css'

export default function StarRating({noOfStars = 7}) {

   const [rating,setRating]= useState(0);
   const [hover,sethover]= useState(0);

   function handleClick(getId){
    //   console.log(getId);
      setRating(getId);
      
   }

   function handleMouseClick(getId){
    //  console.log(getId);
     sethover(getId);
   }

   function handleMouseLeave(){
    //  console.log(getId);
     sethover(rating)
   }

  return (
    <div className='Rating'>
      {
        [...Array(noOfStars)].map((_,index)=>{
            index+=1;
            return <FaStar
            key={index}
            className={index<= (hover || rating) ? 'active' : 'inactive' }
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleMouseClick(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
            />
        })
      }
    </div>
  )
}
