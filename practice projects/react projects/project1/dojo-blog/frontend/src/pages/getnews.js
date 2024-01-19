import { useEffect, useState } from "react";

const Getnews = () => {

    let API = "https://ok.surf/api/v1/news-section";
    // let API = "https://hn.algolia.com/api/v1/search?query=html";
    const [news, SetNews]=useState("");

    const fetchApi = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.object);
            SetNews(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchApi(API);
    }, []);

    return (
        <div className="display">
        <h2>News</h2>
        <p>{news}</p>
        </div>
    );
}

export default Getnews

//sudo apt-get install -y node-cors