import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
  //console.log(props.defaultSearchKeyword);

  //assigning state variables
  const [searchKeyword, setSearchKeyword] = useState(props.defaultSearchKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);


  function handleResponse(response) {
    // console.log(response.data.word);
    setResults(response.data);
  }
  function handlePhotoResponse(response) {
    //console.log(response.data.photos);
    setPhotos(response.data.photos);
  }
  function search() {
    //sheCodes dictionary api documentation
    let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchKeyword}&key=${apiKey}`;
    //console.log(apiUrl);
    //ajax request to shecodes dictionary api
    axios.get(apiUrl).then(handleResponse);

    //pexels free images and videos api  full documentation
    //https://api.pexels.com/v1/search?query=word&per_page=6

    let imagesApiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searchKeyword}&key=${imagesApiKey}`;
    console.log(imagesApiUrl);
    axios.get(imagesApiUrl).then(handlePhotoResponse);

  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setSearchKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <label>What word do you want to look up?</label>
            <input type="serach" autoFocus={true} className="form-control search-input" defaultValue={props.defaultSearchKeyword} onChange={handleChange} required />
          </form>
          <div className="hint">Suggested words: sunset, forest, flower, yoga...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    )
  } else {
    load();
    return "Loading....";
  }

}