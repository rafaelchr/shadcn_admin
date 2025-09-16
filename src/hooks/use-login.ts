import { LoginRequest } from "@/models/login";
import { loginUser } from "@/services/auth-service";
import { useState } from "react";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: LoginRequest) => {
    setLoading(true);
    setError(null);

    try {
      const res = await loginUser(payload);
      const { errors, data } = res.data;

      if (errors) {
        setError(errors);
        return null;
      }

      return data;
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed");
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};