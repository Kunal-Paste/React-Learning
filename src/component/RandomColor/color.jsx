import React, { useEffect, useState } from 'react'


export default function Color() {
   
    const[typeColor,setTypeColor]=useState('hex');
    const[color,setColor]=useState("#000000");

    function utility(length){
       return Math.floor(Math.random()*length);
    }

    function handleHex(){
       const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
       let hexColor = '#';
       for(let i=0;i<6;i++){
            hexColor += hex[utility(hex.length)];
       }
      //  console.log(hexColor);
      setColor(hexColor);
       
    }
    
    function handleRgb(){
       const r = utility(256);
       const g = utility(256);
       const b = utility(256);

       setColor('rgb(${r},${g},${b})');
    }

    useEffect(()=>{
       if(typeColor==='rgb') handleRgb();
       else handleHex();
    },[typeColor]);
    
  return (
    <div style={{
        width : "100vw",
        height : "100vh",
        background : color,
    }}>
      <button onClick={()=> setTypeColor('hex')}>Create HEX color</button>
      <button onClick={()=> setTypeColor('rgb')}>Create RGB color</button>
      <button onClick={typeColor==='hex'? handleHex : handleRgb}>Generate Random Color</button>

      <div style={{
        display:'flex',
        alignItem:'center',
        justifyContent:'center',
        color:'#fff',
        fontSize:'60px',
        marginTop:'40px',
        flexDirection:'column',
        gap:'20px'
      }}>
        <h3>{typeColor==='rgb'?'RGB Color': 'HEX Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
    
  )
}
