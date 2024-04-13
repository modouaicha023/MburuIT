"use client";
import { Bell, Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ProfileButton from "../ui/profile-button";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

export default function HeaderProfile() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0  w-full border h-fit">
      <div className="py-2 px-4 sm:px-6 lg:px-8 flex h-fit items-center justify-between w-full">
        <div className=" flex-grow h-full rounded-lg"></div>
        <div className="flex items-center w-fit">
          <Badge variant="default" className="mr-2">
            Gérant
          </Badge>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="mr-2"
            aria-label="Notifications">
            <Bell className="h-6 w-6" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="mr-2"
            aria-label="Toogle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-6 w-6 rotate-0 scale-100  transition-all dark:rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <ProfileButton />
        </div>
      </div>
    </header>
  );
}
