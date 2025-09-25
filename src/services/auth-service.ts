import api from "@/lib/axios";
import { LoginRequest } from "@/models/login";
import { RegisterRequest } from "@/models/register";

export async function registerUser(data: RegisterRequest) {
  return api.post("/auth/register", { data });
}

export const login = async (
  payload: LoginRequest
) => {
  return api.post("/auth/login", payload);
};

export const logout = async () => {
  return api.post("/auth/logout");
}
