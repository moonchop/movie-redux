import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from "axios";


function Fetch():React.ReactElement {
  type Movie={
    id : number;
    img : string;
    name : string;
    summary:string;
  }
  const [data,setData]=useState<Movie[]>([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response=await axios.get("https://elice-movie-data.herokuapp.com/data");
        setData(response.data);
        console.log(response.data);
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData();
  },[]);
  return (
    <div>fetch</div>
  )
}
export default Fetch;