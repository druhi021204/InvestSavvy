import React, { useEffect, useState } from "react";
import invest from '../pictures/invest.jpeg';


const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9c6ef9501ade47ce97ed7d3eb48ddfe5&q=india"
    );
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h2 className="firstdiv">Get the latest Business News</h2>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div className="card" >
              <img src={ele.urlToImage === null ? invest : ele.urlToImage} class="card-img-top" alt="..." />
              <div className="card-body">
                {/* <h5 className="card-title">{ele.author === "" ? "Janelle Ash" : ele.author}</h5> */}
                <p className="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default News;