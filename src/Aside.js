import React, { useState, useEffect } from "react";
import "./aside.css";

const Aside = props => {
  const [queryData, setData] = useState({
    query: "",
    queryError: "",
    executedQuery: "",
    images: []
  });

  useEffect(() => {
    // set query parameters and reset error message
    let queryError = "";
    const { key, baseUrl, rating, lang } = props.api;
    const limit = 5;
    const query = `@${props.usernameQuery}`;
    const url = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;

    // request the giphies
    fetch(url)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(jsonResults => {
        // get image id to build image tags later
        const images = jsonResults.data.map(item => {
          return { id: item.id, username: item.username };
        });
        setData({ images, executedQuery: query, query: "", queryError });
      })
      .catch(error => {
        // log your error. Don't do console.log, of course.
        console.log(error);

        // tell the user
        queryError = "There was a problem with your query. Please try again.";

        setData({ executedQuery: query, query: "", queryError });
      });
  });

  let sidebarClass = props.usernameQuery.length ? "hasSidebar" : "";

  const imageList = queryData.images.map((image, key) => {
    const imageUrl = `https://i.giphy.com/media/${image.id}/100.gif`;
    return <img key={key} src={imageUrl} alt="giphy" />;
  });
  return (
    <aside className={sidebarClass}>
      <a
        href="/"
        className="closeBox"
        onClick={e => props.handleUsernameResetClick(e)}
      >
        X
      </a>
      <h2>Giphies by {props.usernameQuery}</h2>
      {imageList}
    </aside>
  );
};

export default Aside;
