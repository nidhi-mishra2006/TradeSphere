import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("//allPositions")
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log("Error fetching positions:", err);
      });
  }, []);

  return (
    <div className="positions-container">
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table positions-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;

              const pnl = curValue - stock.avg * stock.qty;

              const isProfit = pnl >= 0;

              const profClass = isProfit ? "profit" : "loss";

              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td className={profClass}>{pnl.toFixed(2)}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
