import React from "react";
import { Link } from "react-router-dom";
import fichierLogements from "../../logements.json";

function Card() {
  return (
    <div className="galleryDesLogements">
      {fichierLogements.map((objetLogement) => (
        <Link to={`/logements/${objetLogement.id}`} key={objetLogement.id}>
          <div className="card>">
            <img
              src={objetLogement.cover}
              alt={objetLogement.title}
              className="card_image"
            />
            <div className="card_titre">{objetLogement.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Card;
