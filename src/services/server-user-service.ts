import { cookies } from 'next/headers';
import api from "@/lib/axios";
import { UserResponse } from "@/models/user";

export const getServerUsers = async (page = 0, size = 20): Promise<UserResponse> => {
  try {
    const cookieStore = cookies();
    const cookieHeader = cookieStore.toString();
    
    const res = await api.get("/users", {
      params: { page, size },
      headers: {
        Cookie: cookieHeader,
      },
    });
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch users from server:", error);
    throw error;
  }
};