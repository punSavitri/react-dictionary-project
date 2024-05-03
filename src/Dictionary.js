import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  //console.log(props.defaultSearchKeyword);

  //assigning state variables
  const [searchKeyword, setSearchKeyword] = useState(props.defaultSearchkeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search() {
    //sheCodes dictionary api documentation
    let apiKey = "4c3a38t82d64bfo4330f17ff02bfbd97";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${searchKeyword}&key=${apiKey}`;
    //console.log(apiUrl);
    //ajax request to shecodes dictionary api
    axios.get(apiUrl).then(handleResponse);
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
            <input type="serach" autoFocus={true} className="form-control search-input" placeholder="search a word.." defaultValue={props.defaultSearchkeyword} onChange={handleChange} required />
          </form>
        </section>
      </div>
    )
  } else {
    return load();
  }

}