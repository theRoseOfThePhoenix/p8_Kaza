import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DataLogements from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import NameAndLocation from "../../components/NameAndLocation/NameAndLocation";
import Tags from "../../components/Tags/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";
import Stars from "../../components/Stars/Stars";
import Error from "../Error/Error";

function AffichageDuneLocation() {
  let { id } = useParams();
  const [locationSelectionne, setLocationSelectionne] = useState({});
  //usestate avec variable à modifier grace au setter

  useEffect(() => {
    let locationSelectionne = DataLogements.find(
      (objetLogement) => id === objetLogement.id
    );
    setLocationSelectionne(locationSelectionne);
  });
  if (!locationSelectionne) {
    return <Error />; //page d'erreur
  }
  return (
    <div>
      {DataLogements.filter((objetLogement) => objetLogement.id === id).map(
        (objetLogement) => (
          <div key={objetLogement.id} className="location">
            <Carrousel slides={objetLogement.pictures} />
            <div className="location_info">
              <div className="location_info-left">
                <NameAndLocation
                  title={objetLogement.title}
                  location={objetLogement.location}
                />
                <Tags infoTag={objetLogement} />
              </div>
              <div className="location_info-right">
                <Host propriètaire={objetLogement} />
                <Stars infos={objetLogement} />
              </div>
            </div>

            <div className="location_collapse">
              <Collapse
                key={objetLogement.description}
                title="Description"
                content={objetLogement.description}
              />
              <Collapse
                key={`objetLogement.equipments`}
                title="Equipements"
                content={objetLogement.equipments.map((equipements) => (
                  <div key={equipements + objetLogement.id}>{equipements}</div>
                ))}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AffichageDuneLocation;
