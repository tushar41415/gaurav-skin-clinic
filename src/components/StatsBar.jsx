import React from "react";

const StatsBar = () => {
  return (
    <div className="stats-bar">
      <div className="container-fluid">
        <div className="row text-white">

          <div className="col-md-3 col-6 stats-item">
            <h2>16+</h2>
            <p>Years of Experience</p>
          </div>

          <div className="col-md-3 col-6 stats-item with-border">
            <h2>23+</h2>
            <p>Clinics All over India</p>
          </div>

          <div className="col-md-3 col-6 stats-item with-border">
            <h2>94%</h2>
            <p>Client Retention</p>
          </div>

          <div className="col-md-3 col-6 stats-item with-border">
            <h3>Advanced</h3>
            <p>US-FDA Approved Equipment</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StatsBar;
