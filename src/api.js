function handleErrors(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

function getGifsFromSearch(url) {
  //   request the giphies
  const response = fetch(url)
    .then(response => {
      return handleErrors(response);
    })
    .then(jsonResults => {
      // get image id to build image tags later
      const images = jsonResults.data.map(item => {
        return { id: item.id, username: item.username };
      });
      return images;
    })
    .catch(error => {
      throw error;
    });
  return response;
}

function getGifsByUsername(url) {
  const response = fetch(url)
    .then(response => {
      return handleErrors(response);
    })
    .then(jsonResults => {
      // get image id to build image tags later
      const images = jsonResults.data.map(item => {
        return { id: item.id, username: item.username };
      });
      return images;
    })
    .catch(error => {
      throw error;
    });
  return response;
}

module.exports.getGifsByUsername = getGifsByUsername;
module.exports.getGifsFromSearch = getGifsFromSearch;
