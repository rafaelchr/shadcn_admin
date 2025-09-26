// client side
import api from "@/lib/axios";
import { UserResponse } from "@/models/user";

export const getUsers = async (
  page = 0,
  size = 10
): Promise<UserResponse> => {
  try {
    const res = await api.get("/users", {
      params: { page, size },
    });


    return res.data.data as UserResponse;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
