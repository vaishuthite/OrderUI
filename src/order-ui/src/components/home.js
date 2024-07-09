// function Home() {
//   return (
//     <>Home</>
//   );
// }

import React, { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../services/api";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrders();
      setOrders(orders);
    };

    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    await deleteOrder(id);
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.firstName} {order.lastName}: {order.description} (Quantity:{" "}
            {order.quantity})
            <button onClick={() => handleDelete(order.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
