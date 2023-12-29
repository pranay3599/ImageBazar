import React,{useState,useEffect} from 'react'
import axios from 'axios';

function ImmazeSearch({setImages}) {
  const [searchTerm,setsearchTerm]=useState('');
  
 useEffect(()=>{
fetchImages(null,"random");
 },[])
  async function fetchImages(e,initialsearch){
    if(e){
   e.preventDefault()
    }
   //api link fetch
   try{
   const response=await axios.get("https://api.unsplash.com/search/photos",{
     headers:{
       "Accept-Version": "v1",
       "Authorization": "Client-ID QvjjxyU2EDHxfUblOd-c_yvqGQIdX5cnYsIjJZuvDqs"
     },
     params:{
       query:searchTerm || initialsearch
     }
   })
   console.log(response.data.results);
   setImages(response.data.results);
  }
  catch(error){
 console.log(error)
  }


  }
  return (


    <div>
      <form onSubmit={fetchImages}>
      <input type="text" placeholder='Search your Images'
      onChange={(e)=>setsearchTerm(e.target.value)}
           value={searchTerm}
       />
      <button type="submit" >Submit</button>
      </form>
    </div> 
  )
}

export default ImmazeSearch
