import { useEffect, useState } from "react";
import API from "../api/client";
import React from "react";

function MenuList() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {

    const response = await API.get("/menu");

    setItems(response.data);
  };

  return (
    <div className="container">

      <h2>Menu Items</h2>

      {
        items.map((item) => (

          <div
            className="card"
            key={item.id}
          >

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <p>₹ {item.price}</p>

            <p>{item.category}</p>

          </div>
        ))
      }

    </div>
  );
}

export default MenuList;