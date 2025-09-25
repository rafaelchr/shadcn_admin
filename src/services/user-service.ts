import api from "@/lib/axios";
import { UserResponse } from "@/models/user";

export const getUsers = async (page = 0, size = 20): Promise<UserResponse> => {
  try {
    const res = await api.get("/users", {
      params: { page, size },
    });
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};