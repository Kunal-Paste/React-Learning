import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './image.css'

export default function ImageSlider({url,limit=5,page=1}) {

    const [Image,setImage] = useState([]);
    const [currentSlide,setcurrentSlide] = useState(0);
    const [errorMsg,setErrormsg] = useState(null);
    const [loading,setLoading] = useState(false);

    async function fetchImages(getid){
        try {

            setLoading(true);

            const response = await fetch(`${getid}?page=${page}&limit=${limit}`);
            const data = await response.json();

           if(data){
            setImage(data);
            setLoading(false);
           }

        } catch (e) {
            setErrormsg(e.message);
            setLoading(false);
        }
    }

    function handlePrevious(){
       setcurrentSlide(currentSlide===0? Image.length-1 : currentSlide-1);
    }

    function handleNext(){
      setcurrentSlide(currentSlide===Image.length-1? 0 : currentSlide+1);
    }

    useEffect(()=>{
      if(url!=='') fetchImages(url)
    },[url])
   
    console.log(Image);
    

  if(loading){
    return <div>Loading the data</div>
  }

  if(errorMsg!==null){
    return <div>Error occured {errorMsg}</div>
  }

  return (
    <div className='container'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevious}/>
      {
        Image && Image.length ? 
        Image.map((imageItem,index)=>(
          <img
          key={imageItem.id}
          alt={imageItem.download_url}
          src={imageItem.download_url}
          className={currentSlide===index?"current-img":"current-img hide-current-img"}
          />
        ))
        
        : null
      }

      <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNext}/>
      <span className='circle-indicators'>
        {
          Image && Image.length ?
          Image.map((_,index)=><button
          key={index}
          className={currentSlide===index? 'current-indicator': 'current-indicator inactive-indicator'}
          onClick={()=>setcurrentSlide(index)}
          ></button>)
          
          : null
        }
      </span>
      
    </div>
  )
}
