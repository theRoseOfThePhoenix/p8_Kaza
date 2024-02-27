import React from "react";
import { Link } from "react-router-dom";
import fichierLogements from "../../logements.json";

function Card() {
  return (
    <div className="galleryDesLogements">
      {fichierLogements.map((objetLogement) => (
        <Link to={`/logements/${objetLogement.id}`}>
          <div className="galleryDesLogements_card">
            <img
              src={objetLogement.cover}
              alt={objetLogement.title}
              className="galleryDesLogements_card--image"
            />
            <h3 className="galleryDesLogements_card--titre">
              {objetLogement.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Card;
