import React, { useState } from "react";
import Arrow from "../../asset/down_arrow.png";
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="collapse">
      <div className="collapse_titre" onClick={() => setIsOpen(false)}>
        {title}
        <img className="collapse_arrow" src={Arrow} alt="flèche du haut" />
      </div>
      <div className="collapse_content">{content}</div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse_titre" onClick={() => setIsOpen(true)}>
        {title}
        <img className="collapse_arrow--up" src={Arrow} alt="flèche du bas" />
      </div>
    </div>
  );
}

export default Collapse;
