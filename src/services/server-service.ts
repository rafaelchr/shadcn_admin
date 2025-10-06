import { cookies } from "next/headers";
import api from "@/lib/axios";
import { UserResponse } from "@/models/user";
import { FilmResponse } from "@/models/film";

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

export const getServerFilms = async (
  page = 0,
  size = 10
): Promise<FilmResponse> => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await api.get("/films", {
      params: { page, size },
      headers: {
        Cookie: cookieHeader,
      },
    });

    return res.data.data as FilmResponse;
  } catch (error) {
    console.error("Failed to fetch films from server:", error);
    throw error;
  }
};
