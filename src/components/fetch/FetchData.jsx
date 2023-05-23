import React, { useEffect,useState } from 'react'
import "./fetch.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';
const FetchData = ({cat}) => {
    const [data, setdata] = useState("")
    const fetchData = async () =>{
      await axios.get(
        cat 
        ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=dd35bdd1fcd54d10861c258186ffeec5`
        : "https://newsapi.org/v2/top-headlines?country=in&apiKey=dd35bdd1fcd54d10861c258186ffeec5"
        ).then((res)=> setdata(res.data.articles));
    }
    useEffect(() =>{
       fetchData();
   },[cat])
  return (
    <div className='cont'>
      <h2>TOP HEADINGS</h2>
      <div className='cont1' style={{minHeight:'100vh'}}>{data ? data.map((items,index) => (
      <>
      <div className="cont2">
      <h5>{items.title}</h5>
      <div className='im'>
      <img src={items.urlToImage} alt="Image not Found" className='img-fluid' style={{width:"100%", height:"300px", objectFit:"cover"}} />
      </div>
      <p>{items.content}</p>
      <Link to={items.url}  target='blank'>View More</Link>
      </div>
      </>
      ))
      : "Loading..."}</div>
    </div>
  )
}

export default FetchData
