import React from "react";

function entry(Props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {Props.emoji}
        </span>
        <span>{Props.name}</span>
      </dt>
      <dd>{Props.description}</dd>
    </div>
  );
}

export default entry;
