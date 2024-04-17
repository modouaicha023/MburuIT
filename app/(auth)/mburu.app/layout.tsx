import TopLayout from "@/components/TopLayout";
import Aside from "@/components/mburu.app/Aside";
import HeaderProfile from "@/components/mburu.app/HeaderProfile";
import Container from "@/components/ui/container";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mburu App",
  description: "",
};

export default function MburuAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex  max-h-screen w-full  ">
        <Aside className=" shadow-lg" />
        <main className="flex-grow min-w-screen max-h-screen flex flex-col items-center">
          <HeaderProfile />
          <TopLayout />
          <ScrollArea className="mt-4 w-full h-full flex-grow whitespace-nowrap  px-4">
            {children}
          </ScrollArea>
        </main>
      </div>
    </Container>
  );
}
