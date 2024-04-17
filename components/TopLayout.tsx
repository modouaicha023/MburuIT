"use client";
import { format, set } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { fr } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useEffect, useState } from "react";
export default function TopLayout() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [date]);

  return (
    <div className="flex  h-20 justify-between w-full rounded-sm p-1 sticky top-0 z-10 backdrop-blur-sm items-center pr-8">
      <div className=" border"></div>
      <div className="flex">
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
              toYear={date?.getFullYear()}
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
