"use client";

import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { logout } from "@/services/auth-service";

export function AppHeader() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignOut = async () => {
    setLoading(true);

    try {
      const res = await logout();
      const { errors, data } = res.data;

      if (errors) {
        return;
      }

      if (data) {
        router.push("/login");
      }
    } catch (error) {
      // if (err instanceof Error) {
      //   // setError(err.message);
      // } else {
      //   // setError("Login failed");
      // }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-5 items-center space-x-4 text-sm ">
      <Button variant="ghost">
        <Bell size={18} />
      </Button>
      <Separator orientation="vertical" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="py-6">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>Rafael Manurung</div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              handleSignOut();
            }}
            disabled={loading ? true : false}
          >
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
