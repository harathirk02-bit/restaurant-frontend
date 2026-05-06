import { useState } from "react";
import API from "../api/client";
import React from "react";

function CreateMenuItemPage() {

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    available: true,
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

      await API.post("/menu", form);

      alert("Menu Item Added");

    } catch (error) {

      alert("Failed");
    }
  };

  return (
    <div className="container">

      <h2>Add Menu Item</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />

        <input
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />

        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />

        <button type="submit">
          Add Menu
        </button>

      </form>

    </div>
  );
}

export default CreateMenuItemPage;