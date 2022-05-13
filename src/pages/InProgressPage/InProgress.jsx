import React from "react";

import "./styles.scss";

const InProgress = () => {
  return (
    <div className="underConstructionWrapper">
      <h2>We're working here</h2>
      <div className="loader">
        <div className="loaderBar"> </div>
      </div>
    </div>
  );
};

export default InProgress;
