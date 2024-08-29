import React, { useEffect, useState } from 'react'
import './product.css'

export default function LoadMoreData() {
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count,setCount] = useState(0);

    async function fetchProducts(){
        try {
            setLoading(true);
            const response = await fetch( `https://dummyjson.com/products?limit=20&skip=${
                count === 0 ? 0 : count * 20
              }`)
            const result = await response.json();
            
            if(result && result.products && result.products.length){
                setProducts((prevData)=>[...prevData, ...result.products]);
                setLoading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
            
        }
    }

    useEffect(()=>{
      fetchProducts();
    },[count])


    if(loading){
        return <div>Loading data</div>
    }

  return (
    <div className='load-container'>
        <div className='product-container'>
            {
                products && products.length ? 
                products.map(dataitem=><div className='products' key={dataitem.id}>
                  <img src={dataitem.thumbnail} alt={dataitem.title}/>
                  <p className='font'>{dataitem.title}</p>
                </div>)
                : null 
            }
        </div>
        <div className='button-container'>
            <button onClick={()=>setCount(count + 1)}>Load More</button>
        </div>
      
    </div>
  )
}
