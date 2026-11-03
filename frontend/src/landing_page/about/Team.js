import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/me.jpeg"
            alt="me"
            style={{
              borderRadius: "50%",
              width: "50%",
              border: "2px solid black",
            }}
          />
          <h4 className="mt-5">Nidhi Mishra</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            TradeSphere is a full-stack stock trading and portfolio management
            platform designed to simplify trading-related workflows through a
            clean and intuitive interface.
          </p>
          <p>
            Users can explore trading workflows, manage holdings, review
            positions, and track orders in one place.
          </p>
          <p>Make trading tools easier to navigate, understand, and manage.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
