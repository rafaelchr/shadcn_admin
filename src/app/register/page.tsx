import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex w-full min-h-screen">
        <div className="w-1/2 bg-slate-400 relative">
          <Image
            src="/images/register.png"
            alt="Background Login"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-1/2 flex min-h-screen justify-center items-center bg-white border-l">
          <div className="w-full max-w-md space-y-6 p-6">
            <h1 className="text-2xl font-bold text-center">Register</h1>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </form>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="hover:underline font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;