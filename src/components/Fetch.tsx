import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from "axios";

interface IMovieProps{
  id : number;
  name : string;
  summary:string;
  img : string;
}
interface IMovie{
  id : number;
  img : string;
  name : string;
  summary:string;
}
function Movies({id,name,summary,img}:IMovieProps){
  return(
    <div>
      <div>{id}</div>
      <h1>{name}</h1>
      <img src={img}/>
      <b>{summary}</b>
    </div>
  )
}


function Fetch(){

  const [info,setInfo]=useState<IMovie[]>([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const response=await axios.get("https://elice-movie-data.herokuapp.com/data");
        setInfo(response.data);
      }
      catch(e){
        console.log(e)
      }
    }
    fetchData();
  },[]);

  return (
    <div>
      {info.map((v)=>{
        return <Movies id={v.id} name={v.name} summary={v.summary} img={v.img}/>
      })}
      
    </div>
  )
}
export default Fetch;