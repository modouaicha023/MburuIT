"use client";
import { cn } from "@/lib/utils";
import {
  Store,
  Users,
  GanttChartSquare,
  FolderCog,
  ShoppingCart,
  ListOrdered,
  Banknote,
  UserCog,
  LayoutDashboard,
  PanelLeft,
  PanelRight,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const sideBarItems = [
  { url: "/mburu.app/dashboard", title: "Dashboard", Icon: LayoutDashboard },
  {
    url: "/mburu.app/inventories",
    title: "Inventaires",
    Icon: GanttChartSquare,
  },
  { url: "/mburu.app/clients", title: "Clients", Icon: Users },
  { url: "/mburu.app/stores", title: "Boutiques", Icon: Store },
  { url: "/mburu.app/productions", title: "Productions", Icon: FolderCog },
  { url: "/mburu.app/sales", title: "Ventes", Icon: ShoppingCart },
  { url: "/mburu.app/orders", title: "Commandes", Icon: ListOrdered },
  { url: "/mburu.app/payments", title: "Payements", Icon: Banknote },
  { url: "/mburu.app/employees", title: "Employes", Icon: UserCog },
];
export default function SideBar({ className }: SidebarProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleAside = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <aside className={cn("py-16 border-r border-l w-fit relative", className)}>
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"outline"}
              className="absolute  top-2 right-2"
              onClick={handleAside}>
              {isSideBarOpen ? <PanelLeft /> : <PanelRight />}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" align="center">
            {isSideBarOpen ? <p>Fermer</p> : <p>Ouvrir</p>}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <nav className="">
        <ul className="flex flex-col w-full gap-3">
          {sideBarItems.map((item, index) => (
            <li className="px-2" key={index}>
              <Button variant={"ghost"} className="w-full rounded-sm ">
                <Link
                  href={item.url}
                  className=" flex  items-center  gap-2 w-full rounded-none h-full ">
                  <TooltipProvider delayDuration={200}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <item.Icon />
                      </TooltipTrigger>
                      <TooltipContent side="right" align="center">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  {isSideBarOpen && (
                    <span className="h-full font-semibold  uppercase flex-nowrap">
                      {item.title}
                    </span>
                  )}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
