import { Button } from "@/components/ui/button";
import Navbar from "./nav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black w-[100%]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
