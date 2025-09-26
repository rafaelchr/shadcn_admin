import { cookies } from "next/headers";
import api from "@/lib/axios";
import { UserResponse } from "@/models/user";

export const getServerUsers = async (
  page = 0,
  size = 10
): Promise<UserResponse> => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await api.get("/users", {
      params: { page, size },
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data.data as UserResponse;
  } catch (error) {
    console.error("Failed to fetch users from server:", error);
    throw error;
  }
};
