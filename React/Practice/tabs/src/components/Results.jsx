import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Results({ allTabs, currentTabIndex }) {
  return (
    <div className="results">
      {currentTabIndex >= 0 && currentTabIndex < allTabs.length && (
        <div key={allTabs[currentTabIndex].label} className="card">
          <div className="card-header">
            <h3>{allTabs[currentTabIndex].label}</h3>
          </div>
          <div className="card-body">
            <p>{allTabs[currentTabIndex].content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;