import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-6 col-md-4" key={index}>
                  <a href={photo.src.original} title="" target="_blank" rel="noreferrer">
                    <img src={photo.src.landscape} className="img-fluid word-image" alt={photo.alt} />
                  </a>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    )
  } else {
    return null;
  }
}