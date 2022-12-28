import React, { useState, useEffect } from "react";

import Search from "../components/Search";
import Picture from "../components/Picture";
//頁面內容
const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setcurrentSearch] = useState("");
  const auth = "563492ad6f91700001000001b675a0a5c282412580c57a94535ac779";
  const initialUrl = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchUrl = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  //fetch data from api
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };
  //load more
  const morepictures = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };
  //fetch data when page loads up && search change
  useEffect(() => {
    if (currentSearch === "") {
      search(initialUrl);
    } else {
      search(searchUrl);
    }
  }, [currentSearch, searchUrl]);

  return (
    <div className="main">
      <Search
        search={() => {
          setcurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="more-btn">
        <button onClick={morepictures}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
