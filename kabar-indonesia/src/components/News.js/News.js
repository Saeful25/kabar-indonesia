import React, { useState, useEffect } from "react";
import New from "../New/New"
import "./News.css";
import AddNewForm from "../AddNewForm/AddNewForm";
import { getNewList } from "../../api";

const News = () => {
  const [datas, setDatas] = useState([]);

  const handleClick = () => {
    const newItem = {
      title: "Berita Terkini",
      pubDate: 2024,
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut delectus distinctio molestias molestiae praesentium accusamus blanditiis quas doloremque explicabo quidem! Minus et culpa neque, aspernatur omnis natus rem saepe voluptas?",
      thumbnail: "https://picsum.photos/200/300",
    };
    setDatas([...datas, newItem]);
  };

  const addNew = (ne) => {
    setDatas([...datas, ne]);
  }

  useEffect(() => {
    getNewList().then((result) => {
      setDatas(result);
      console.log(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h2>News</h2>
      <div className="new-container">
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
        <button onClick={handleClick} className="tambah">Add New</button>
      </div>
      <AddNewForm onAddNew={addNew} />
    </div>
  );
};

export default News;
