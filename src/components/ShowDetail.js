import React from "react";
import "./ShowDetail.css";
import DetailElement from "./DetailElement";

const ShowDetail = (props) => {
    console.log(props.details);
    return (
      <div className="full-detail-cover">
        <div className="full-image">
          <img src={props.details.Poster} alt="Full Poster" />
        </div>
        <div className="detail-text">
          <DetailElement
            first="Title"
            value={props.details.Title + ` (${props.details.Year})`}
          />
          <DetailElement first="Runtime" value={props.details.Runtime} />
          <DetailElement first="Actors" value={props.details.Actors} />

          <DetailElement first="Director" value={props.details.Director} />
          <DetailElement first="Genre" value={props.details.Genre} />
          <DetailElement first="IMBD rating" value={props.details.imdbRating} />
          <DetailElement first="IMBD Votes" value={props.details.imdbVotes} />

          <DetailElement first="Plot" value={props.details.Plot} />
        </div>
      </div>
    );
}

export default ShowDetail;