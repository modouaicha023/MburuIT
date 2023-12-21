import Aside from "@/components/dashboard/Aside";
import Container from "@/components/ui/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mburu App",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="flex  min-h-screen w-full border ">
        <Aside  className=" shadow-lg"  />
        <main className="flex-grow border ">
          {children}
        </main>
      </div>
    </Container>
  );
}
