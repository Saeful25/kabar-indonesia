import React from 'react'
import Main from '../../components/Main/Main';
import New from '../../components/New/New';
import { useState,useEffect } from 'react';
import { getPolNew } from "../../api";
import "./Politik.css"
import Hero from '../../components/Hero/Hero';

  const Politik = () => {
    const [datas, setDatas] = useState([]);
  
    useEffect(() => {
      getPolNew().then((result) => {
        setDatas(result);
        console.log(result);
      });
    }, []);
  return (
      // <h2>politik</h2>
    <div  className="politik-container">
       {datas.map((data) => {
          return (
            <New
              id={data.id}
              title={data.title}
              pubDate={data.pubDate}
              description={data.description}
              thumbnail={data.thumbnail}
            />
          );
        })} 
    </div>
  )
}

export default Politik;