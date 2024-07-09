import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7105/api",
});

export const getOrders = async () => {
  const response = await api.get("/orders");
  return response.data;
};

export const createOrder = async (order: any) => {
  const response = await api.post("/orders", order);
  return response.data;
};

export const deleteOrder = async (id: number) => {
  await api.delete(`/orders/${id}`);
};
