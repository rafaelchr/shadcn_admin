import api from "@/lib/axios";
import { Film, FilmResponse } from "@/models/film"

export const getFilms = async (
  page = 0,
  size = 10
): Promise<FilmResponse> => {
  try {
    const res = await api.get("/films", {
      params: { page, size }
    })

    return res.data.data as FilmResponse;
  } catch (error) {
    console.error("Failed to fetch films:", error);
    throw error;
  }
}

export const createFilm = async (formData: FormData): Promise<Film> => {
  try {
    const res = await api.post("/films", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.data as Film;
  } catch (error) {
    console.error("Failed to create film:", error);
    throw error;
  }
}