import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/api";

const CreateOrder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      lastName.length > 20 ||
      description.length > 100 ||
      quantity < 1 ||
      quantity > 20
    ) {
      setError("Validation error");
      return;
    }
    try {
      await createOrder({ firstName, lastName, description, quantity });
      history("/");
    } catch (e) {
      setError("Submission error");
    }
  };

  return (
    <div>
      <h1>Create Order</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name (optional)"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <textarea
          placeholder="Order Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="20"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default CreateOrder;
