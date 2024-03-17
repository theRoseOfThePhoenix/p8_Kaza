import React from "react";
import FullStar from "../../asset/full_star.png";
import EmptyStar from "../../asset/empty_star.png";

function Stars({ infos }) {
  const scaleRating = infos.rating;
  const listeStars = [];

  for (let i = 1; i <= 5; i++) {
    let starSrc, starAlt;

    if (i <= scaleRating) {
      starSrc = FullStar;
      starAlt = "étoile pleine";
    } else {
      starSrc = EmptyStar;
      starAlt = "étoile vide";
    }

    listeStars.push(
      <img
        className="rating_star"
        key={infos.id + i}
        src={starSrc}
        alt={starAlt}
      />
    );
  }

  return <div className="rating">{listeStars}</div>;
}

export default Stars;
