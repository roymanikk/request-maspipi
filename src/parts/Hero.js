import React from "react";

export default function Hero() {
  return (
    <div className="hero container-fluid bg-dark d-flex flex-column justify-content-around align-items-center">
      <div className="hero-information container d-flex justify-content-around align-items-center">
        <div className="hero-details d-flex flex-column justify-content-around align-items-center">
          <p className="hero-details-title">KIAMAT KURBO</p>
          <p className="hero-details-author">by Jaya Baya</p>
          <p className="hero-details-status">is still counting</p>
          <p className="hero-details-time">1 Year, 2 Months, 3 Days</p>
          <p className="hero-details-hour">5 Hours : 12 Minutes : 43 Seconds</p>
        </div>
        <div className="hero-statistics hero-details d-flex flex-column justify-content-around align-items-center">
          <p className="hero-statistics-total">Total Prophecy Database</p>
          <p className="hero-statistics-number">100.000.000</p>
          <p className="hero-statistics-total">On Going Count Down</p>
          <p className="hero-statistics-number">100.000.000</p>
          <p className="hero-statistics-total">Proven Wrong</p>
          <p className="hero-statistics-number">100.000.000</p>
        </div>
      </div>
    </div>
  );
}
