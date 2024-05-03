import React from "react";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);
   if (props.results) {
    return (

      <div className="Results" >
        <section>
          <h2>{props.results.word}</h2>
        </section>

      </div>
    )
  } else {
    return null;
  }
}