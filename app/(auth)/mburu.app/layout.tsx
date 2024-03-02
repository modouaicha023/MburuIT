import Aside from "@/components/mburu.app/Aside";
import Container from "@/components/ui/container";
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
      <div className="flex  min-h-screen w-full  ">
        <Aside  className=" shadow-lg"  />
        <main className="flex-grow  min-w-screen overflow-auto">
          {children}
        </main>
      </div>
    </Container>
  );
}
