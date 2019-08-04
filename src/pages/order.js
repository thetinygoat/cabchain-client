import React, { useEffect, useState } from "react";
import axios from "../axios";
const Order = () => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    (async () => {
      const resp = await axios.get("/drivers");
      for (let i = 0; i < Object.keys(resp.data).length; i++) {
        console.log(resp.data);
      }
    })();
  });
  return <div>Order page</div>;
};

export default Order;
