import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ holding }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");

  const { closeSellWindow, refreshHoldings } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      setError("");
      // Get all holdings
      // const response = await axios.get("http://localhost:3002/allHoldings");

      // const holdings = response.data;

      // // Find selected stock
      // const stock = holdings.find((item) => item.name === uid);
      // Check holding
      if (!holding || !holding._id) {
        setError("Holding not found.");
        return;
      }
      // Check quantity
      if (Number(stockQuantity) > Number(holding.qty)) {
        setError(`You only have ${holding.qty} shares available.`);
        return;
      }

      // Create SELL order
      await axios.post("http://localhost:3002/newOrder", {
        holdingId: holding._id,
        name: holding.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
       
      });

      closeSellWindow();
      refreshHoldings();

    
    } catch (error) {
      console.log(error);

      if (error.response) {
        setError(error.response.data);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        {error && (
          <p
            style={{
              color: "red",
              marginTop: "10px",
            }}
          >
            {error}
          </p>
        )}
      </div>

      <div className="buttons">
        <span>Available quantity will be checked</span>

        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>

          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
