import React from "react";

function Tags({ infoTag }) {
  return (
    <div className="tagsSection">
      {infoTag.tags.map((tag) => (
        <div className="tagsSection_tag" key={tag + infoTag.id}>
          {tag}
        </div>
      ))}
    </div>
  );
}

export default Tags;
