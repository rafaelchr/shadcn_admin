"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { LoginRequest } from "@/models/login";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth-service";
import axios from "axios";
import Image from "next/image";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload: LoginRequest = { username, password };
    setLoading(true);
    setError("");

    try {
      await login(payload);
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 401) {
          setError("Username or password wrong");
        } else {
          setError("An unexpected error occurred. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 min-h-screen">
      <div className="w-full flex items-center justify-center bg-white">
          <Image
            src="/images/login.png"
            alt="Background Login"
            width={1000}
            height={1000}
            className="object-cover border border-gray-200 md:border-none w-1/2 md:w-full rounded-full md:rounded-none max-w-md md:max-w-full"
            priority
          />
      </div>
      <div className="w-full flex justify-center md:items-center border-l border-gray-200 bg-white">
        <div className="w-full max-w-md space-y-6 md:p-6 px-6">
          <h1 className="text-2xl font-medium text-center">Login</h1>
          <p className="text-sm text-gray-600 text-center">
            Enter your username and password to log in
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Signing in..." : "Sign in"}
            </Button>
          </form>

          {error && <p className="text-center text-red-500 mt-2">{error}</p>}

          <p className="text-center mt-4 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="hover:underline font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
