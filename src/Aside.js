import React, { useState, useEffect } from "react";
import "./aside.css";
import { getGifsByUsername } from "./api.js";

const Aside = props => {
  const [images, setImages] = useState([]);
  const [errorMsg, setError] = useState("");

  useEffect(() => {
    // set query parameters and reset error message
    const { rating, lang } = props.filters;
    const { key, baseUrl } = props.api;
    const limit = 5;
    const query = `@${props.usernameQuery}`;
    const url = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;
    setError("");
    // check props to see if a username is to be queried, if so, then request the gifs
    if (props.usernameQuery.length) {
      getGifsByUsername(url)
        .then(images => {
          setImages(images);
        })
        .catch(error => {
          setError("There was a problem fetching this user's gifs");
        });
    }
  }, [props.usernameQuery, props.api, props.filters]);
  //You can pass a second parameter to useEffect (the first being our arrow function). The second param is an array of "dependencies"
  //useEffect should only trigger when these dependencies are changed
  let sidebarClass = props.usernameQuery.length ? "hasSidebar" : "";
  let imageList = [];
  if (errorMsg === "") {
    imageList = images.map((image, key) => {
      const imageUrl = `https://i.giphy.com/media/${image.id}/100.gif`;
      return <img key={key} src={imageUrl} alt="giphy" />;
    });
  }
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
      {errorMsg}
    </aside>
  );
};

export default Aside;
