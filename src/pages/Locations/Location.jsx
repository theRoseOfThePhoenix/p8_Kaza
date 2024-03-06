import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataLogements from "../../logements.json";
import Collapse from "../../components/Collapse/Collapse";
import Host from "../../components/Host/Host";
import NameAndLocation from "../../components/NameAndLocation/NameAndLocation";
import Tags from "../../components/Tags/Tags";
import Carrousel from "../../components/Carrousel/Carrousel";

function AffichageDuneLocation() {
  let { id } = useParams();
  const redirection = useNavigate();
  useEffect(() => {
    let locationSelectionne = DataLogements.find(
      (objetLogement) => id === objetLogement.id
    );
    if (!locationSelectionne) {
      redirection("/*"); //page d'erreur
    }
  });
  return (
    <div>
      {DataLogements.filter((objetLogement) => objetLogement.id === id).map(
        (objetLogement) => (
          <div key={objetLogement.id} className="location">
            <Carrousel slides={objetLogement.pictures} />
            <div className="location_info">
              <NameAndLocation
                title={objetLogement.title}
                location={objetLogement.location}
              />
              <Host propriètaire={objetLogement} />
              <Tags infoTag={objetLogement} />
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
