import { useState } from "react";
import API from "../api/client";
import React from "react";

function CreateOrderPage() {

  const [form, setForm] = useState({
    item_id: "",
    quantity: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/orders", form);

      alert("Order Placed");

    } catch (error) {

      alert("Order Failed");
    }
  };

  return (
    <div className="container">

      <h2>Place Order</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="number"
          name="item_id"
          placeholder="Item ID"
          onChange={handleChange}
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <button type="submit">
          Place Order
        </button>

      </form>

    </div>
  );
}

export default CreateOrderPage;