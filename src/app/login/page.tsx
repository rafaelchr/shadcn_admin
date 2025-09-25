"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LoginRequest } from "@/models/login";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth-service";
import axios from "axios";

export default function LoginPage() {
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
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex w-full min-h-screen">
        <div className="w-1/2 bg-slate-400 relative">
          <Image
            src="/images/login.png"
            alt="Background Login"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 flex min-h-screen justify-center items-center bg-white border-l">
          <div className="w-full max-w-md space-y-6 p-6">
            <h1 className="text-2xl font-bold text-center">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
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

            <p className="text-center mt-4">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-teal-600 hover:underline font-semibold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
