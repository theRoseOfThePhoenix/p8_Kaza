import React from "react";
import Card from "../Card/Card";
import DataLogements from "../../logements.json";

//on fait un map des objets du json "datalogement", chacun dans un composant "card"
function Gallery() {
  return (
    <div className="galleryDesLogements">
      {DataLogements.map((objetLogement) => (
        <Card
          key={objetLogement.id}
          id={objetLogement.id}
          cover={objetLogement.cover}
          title={objetLogement.title}
        />
      ))}
    </div>
  );
}
export default Gallery;
