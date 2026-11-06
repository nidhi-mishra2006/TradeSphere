// import React from "react";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   return (
//     <div className="orders">
//       <div className="no-orders">
//         <p>You haven't placed any orders today</p>

//         <Link to={"/"} className="btn">
//           Get started
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("//allOrders")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h3>Orders ({allOrders.length})</h3>

      {allOrders.map((order) => (
        <div key={order._id}>
          <p>Stock: {order.name}</p>
          <p>Quantity: {order.qty}</p>
          <p>Price: ₹{order.price}</p>
          <p>Mode: {order.mode}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Orders;
