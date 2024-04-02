import React from "react";
import Main from "../../components/Main/Main";
import { useState,useEffect } from 'react';
import { getPopNew } from "../../api";
import "./Politik.css"
import New from "../../components/New/New";
import Hero from "../../components/Hero/Hero";
const Popular = () => {
    const [datas, setDatas] = useState([]);
  
    useEffect(() => {
      getPopNew().then((result) => {
        setDatas(result);
        console.log(result);
      });
    }, []);

  return (
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
  );
};

export default Popular;
