import React from 'react'
import { useEffect ,useState } from 'react';
import { createContext } from 'react'
import axios from 'axios';
import './Class.css'


const fName = createContext();



const Class = () => {

  const [myData,setMyData] = useState([])
  const [isError,setIsError] = useState('')


  useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res)=>setMyData(res.data))
      /* .catch((error)=>(error)=>setIsError(error.message));
      console.log(res); */

      },[]);
  
  
  return (
   
  <>
    <h1>Use Axios</h1>
    <div className='container'>
    {myData.map((post)=>{
      const {id ,title ,body} = post;
      return <div className='card' key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      
    })}
    </div>
  </>
  )
}

export default Class
