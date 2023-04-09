import { AxiosError } from "axios";

import { apiClient } from "./client";
import { toast } from "react-toastify";

const createTodo = async (todo: string) => {
  try {
    return await apiClient.post("/todos", { todo });
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
      return error.response;
    }
    console.log(error);
  }
};

const getTodos = async () => {
  try {
    const { data } = await apiClient.get("/todos");

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
      return error.response;
    }
    console.log(error);
  }
};

const deleteTodo = async (TodoId: number) => {
  try {
    return await apiClient.delete(`/todos/${TodoId}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
      return error.response;
    }
    console.log(error);
  }
};

const updateTodo = async (TodoId: number, todo: string, isCompleted: boolean) => {
  try {
    const response = await apiClient.put(`/todos/${TodoId}`, {
      todo,
      isCompleted,
    });

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast(error.response?.data.message);
      return error.response;
    }
    console.log(error);
  }
};

const todoAPI = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};

export default todoAPI;
