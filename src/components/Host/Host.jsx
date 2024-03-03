import React from "react";

function Host({ propriètaire }) {
  return (
    <div className="host">
      <h4 className="host_name">{propriètaire.host.name}</h4>
      <div className="host_picture">
        <img
          className="host_picture-radius"
          src={propriètaire.host.picture}
          alt="Propriétaire du logement"
        />
      </div>
    </div>
  );
}

export default Host;
