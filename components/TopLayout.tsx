"use client";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon, Search, Store } from "lucide-react";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import React, { useEffect, useState } from "react";
export default function TopLayout() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [date]);

  return (
    <div className="flex  h-20 justify-between w-full rounded-sm p-1 sticky top-0 z-10 backdrop-blur-sm items-center px-8 ">
      <div className=" ">
        <div className="flex gap-1">
          <Input type="search" placeholder="Rechercher" className="w-[400px]" />
          <Button variant={"outline"}>
            <Search />
          </Button>
        </div>
      </div>
      <div className="flex gap-1">
        <Select>
          <SelectTrigger className="w-fit text-right  max-w-[150px] overflow-hidden flex gap-1 items-center justify-center px-2 break-words">
            <Store className="mr-auto h-4 w-4 opacity-50"  />
            <SelectValue placeholder="Boutique" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Pikine</SelectItem>
            <SelectItem value="dark">Dakar</SelectItem>
            <SelectItem value="system">Mbour</SelectItem>
          </SelectContent>
        </Select>
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[150px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}>
              {date ? (
                format(date, "dd/MM/yyyy", { locale: fr })
              ) : (
                <span>Jour</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto mr-8">
            <Calendar
              mode="single"
              captionLayout="dropdown-buttons"
              selected={date}
              toYear={new Date().getFullYear()}
              fromYear={2000}
              onSelect={setDate}
              disabled={(date) =>
                date > new Date() || date < new Date("1900-01-01")
              }
              classNames={{
                day_hidden: "invisible",
                dropdown:
                  "px-2 py-2 rounded-md bg-popover text-popover-foreground text-sm  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
                caption_dropdowns: "flex gap-1",
                button: "mx-1",
                vhidden: "hidden",
                caption_label: "hidden",
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
