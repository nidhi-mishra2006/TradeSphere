import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>

        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="universe-logo"
          />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/digital.jpg"
            alt="Streak"
            className="universe-logo"
          />
          <p className="text-small text-muted">Digital Sphere</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="universe-logo"
          />
          <p className="text-small text-muted">Trading platform</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/mee.jpg"
            alt="mee image"
            className="universe-logo"
          />
          <p className="text-small text-muted">Bullish Growth</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/trade image.jpg"
            alt="GoldenPi"
            className="universe-logo"
          />
          <p className="text-small text-muted">Trade Globe</p>
        </div>

        <div className="col-md-4 col-12 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="universe-logo"
          />
          <p className="text-small text-muted">Insurance Solution Platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
