"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Croissant,
  Moon,
  Sun,
  Menu,
  Bell,
  Home,
  Settings2,
  Users,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import ProfileButton from "./ui/profile-button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [currentUser, setCurrentUser] = useState(false);
  const routes = [
    {
      href: "/",
      label: "Home",
      Icon: Home,
    },
    {
      href: "/features",
      label: "Features",
      Icon: Settings2,
    },
    {
      href: "/team",
      label: "Team",
      Icon: Users,
    },

    {
      href: "/faq",
      label: "FAQ",
      Icon: MessagesSquare,
    },
    {
      href: "/dashbord",
      label: "Get Starded",
      Icon: ArrowUpRight,
      getStarded: true,
    },
  ];
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="right" className='"w-[300px] sm:w-[400px]'>
                <nav className="flex flex-col gap-5 mt-6">
                  {routes.map((route, i) =>
                    route.getStarded ? (
                      <Button asChild variant="ghost">
                        <Link
                          key={i}
                          href={route.href}
                          className="flex px-2 py-1 text-lg  flex-row-reverse gap-2 text-yellow-500 border-yellow-500 border-solid border-2">
                          <route.Icon />
                          {route.label}
                        </Link>
                      </Button>
                    ) : (
                      <Button asChild variant="ghost">
                        <Link
                          key={i}
                          href={route.href}
                          className="flex px-2 py-1 text-lg  flex-row-reverse gap-2  ">
                          <route.Icon />
                          {route.label}
                        </Link>
                      </Button>
                    )
                  )}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/" className="ml-4 lg:ml-0 px-2 flex  ">
              <Croissant className="mr-2 text-yellow-500 " />
              <h1 className="text-xl font-bold ">
                Mburu<span className="text-yellow-500 font-black ml-1">IT</span>
              </h1>
            </Link>
          </div>

          <nav className="mx-6 items-center lg:space-x-4 hidden md:block">
            {routes.map((route, i) =>
              route.getStarded ? (
                <Button asChild variant="ghost">
                  <Link
                    key={i}
                    href={route.href}
                    className="text-sm font-medium transition-colors flex gap-1 text-yellow-500 border-yellow-500 border-solid border-2">
                    <route.Icon />
                    {route.label}
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="ghost">
                  <Link
                    key={i}
                    href={route.href}
                    className="text-sm font-medium transition-colors flex gap-1">
                    <route.Icon />
                    {route.label}
                  </Link>
                </Button>
              )
            )}
          </nav>
          <div className="flex items-center">
            {currentUser && (
              <Button
                variant={"ghost"}
                size={"icon"}
                className="mr-2"
                aria-label="Notifications">
                <Bell className="h-6 w-6" />
                <span className="sr-only">Notifications</span>
              </Button>
            )}
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
            {currentUser ? (
              <ProfileButton />
            ) : (
              <Button asChild variant="ghost">
                <Link
                  href="/sign-in"
                  className="text-sm font-medium transition-colors flex gap-1 text-black bg-yellow-500 border-solid border-2 whitespace-nowrap ">
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
