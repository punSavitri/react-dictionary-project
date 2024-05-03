import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <section>
        <form>
          <label>What word do you want to look up?</label>
          <input type="serach" autoFocus={true} className="form-control search-input" placeholder="search a word.." required />
        </form>
      </section>
    </div>
  )
}