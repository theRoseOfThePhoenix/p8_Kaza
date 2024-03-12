import React from "react";
import { Link } from "react-router-dom";
//Link fonctionnalité propre à ReactRouter et c'est l'équivalent d'un "a" dans html

function Card({ id, cover, title }) {
  return (
    <Link to={`/logements/${id}`}>
      <div className="galleryDesLogements_card">
        <img
          src={cover}
          alt={title}
          className="galleryDesLogements_card--image"
        />
        <h3 className="galleryDesLogements_card--titre">{title}</h3>
      </div>
    </Link>
  );
}
export default Card;
