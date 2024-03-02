import React from "react";
import Card from "../Card/Card";
import fichierLogements from "../../logements.json";

function Gallery() {
  return (
    <div className="galleryDesLogements">
      {fichierLogements.map((objetLogement) => (
        <Card
          id={objetLogement.id}
          cover={objetLogement.cover}
          title={objetLogement.title}
        />
      ))}
    </div>
  );
}
export default Gallery;
