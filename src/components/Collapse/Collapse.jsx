import React, { useState } from "react";
import Arrow from "../../asset/down_arrow.png";
import { useLocation } from "react-router-dom";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const collapseLocation = () => {
    if (location.pathname === "/about") {
      return true;
    } else {
      return false;
    }
  };

  return isOpen ? (
    <div className="collapse">
      <div
        className={collapseLocation() ? "collapse_about" : "collapse_logement"}
        onClick={() => setIsOpen(false)}
      >
        {title}
        <img className="collapse_arrow" src={Arrow} alt="flèche du haut" />
      </div>
      <div className="collapse_content">{content}</div>
    </div>
  ) : (
    <div className="collapse">
      <div
        className={collapseLocation() ? "collapse_about" : "collapse_logement"}
        onClick={() => setIsOpen(true)}
      >
        {title}
        <img className="collapse_arrow--up" src={Arrow} alt="flèche du bas" />
      </div>
    </div>
  );
}

export default Collapse;
