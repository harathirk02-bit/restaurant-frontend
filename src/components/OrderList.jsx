import { useEffect, useState } from "react";
import API from "../api/client";
import React from "react";  

function OrderList() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    const response = await API.get("/orders");

    setOrders(response.data);
  };

  return (
    <div className="container">

      <h2>All Orders</h2>

      {
        orders.map((order) => (

          <div
            className="card"
            key={order.id}
          >

            <p>Order ID: {order.id}</p>

            <p>Item ID: {order.item_id}</p>

            <p>Quantity: {order.quantity}</p>

            <p>Status: {order.status}</p>

          </div>
        ))
      }

    </div>
  );
}

export default OrderList;