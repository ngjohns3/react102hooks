import React, { useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Filter from "./Filter";
import Aside from "./Aside";
import "./App.css";
import { getGifsFromSearch } from "./api";

const App = () => {
  // query, queryError, executedQuery
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState({
    executedQuery: "",
    queryError: ""
  });
  const [images, setImages] = useState([]);
  const [usernameQuery, setUsernameQuery] = useState("");
  //API constants don't need to be saved to state because they don't change, so we create a filters object to be saved to state instead
  const [filters, setFilters] = useState({
    limit: 5,
    rating: "G",
    lang: "en"
  });
  const api = {
    key: process.env.REACT_APP_API_KEY,
    baseUrl: "https://api.giphy.com/v1/gifs/search"
  };

  function handleUsernameClick(e) {
    e.preventDefault();
    setUsernameQuery(e.target.dataset.username);
  }

  function handleUsernameResetClick(e) {
    e.preventDefault();
    setUsernameQuery("");
  }

  function handleLimitChange(e) {
    let filter = Object.assign({}, filters);
    filter.limit = e.target.value;
    setFilters(filter);
  }

  function handleLangChange(e) {
    let filter = Object.assign({}, filters);
    filter.lang = e.target.value;
    setFilters(filter);
  }

  function handleRatingChange(e) {
    let filter = Object.assign({}, filters);
    filter.rating = e.target.value;
    setFilters(filter);
  }

  function handleInput(e) {
    const query = e.target.value;
    setQuery(query);
  }

  function handleSubmit(e) {
    // stop form from submitting, which would reload page
    e.preventDefault();

    // ignore empty submissions
    if (query.length === 0) {
      return;
    }
    // reset images
    setImages([]);

    // set query parameters and reset error message
    let queryError = "";
    const { limit, rating, lang } = filters;
    const { baseUrl, key } = api;
    const url = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`;

    getGifsFromSearch(url)
      .then(fetchedGifs => {
        setImages(fetchedGifs);
        setQueryData({
          executedQuery: query,
          queryError
        });
        setQuery("");
      })
      .catch(error => {
        queryError = "There was a problem with your query. Please try again.";
        setQueryData({
          executedQuery: query,
          queryError
        });
        setQuery("");
      });
  }

  return (
    <div className="App">
      <Header
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        inputValue={query}
      />
      <Filter
        handleLimitChange={handleLimitChange}
        handleLangChange={handleLangChange}
        handleRatingChange={handleRatingChange}
      />
      <section>
        <Main
          images={images}
          executedQuery={queryData.executedQuery}
          error={queryData.queryError}
          usernameQuery={usernameQuery}
          handleUsernameClick={handleUsernameClick}
        />
        <Aside
          api={api}
          filters={filters}
          usernameQuery={usernameQuery}
          handleUsernameResetClick={handleUsernameResetClick}
        />
      </section>
    </div>
  );
};

export default App;
