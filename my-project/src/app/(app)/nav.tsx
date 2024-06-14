import Link from "next/link";
import { Button } from "../../components/ui/button";
import Login from "@/components/loginButton";

export default function Navbar() {
  return (
    <nav className="text-white items-center flex justify-between w-[100%] px-52 pt-10 h-[8vh]">
      <div className="flex items-end">
        <h1 className="text-3xl">Tarefas</h1>
        <strong className="text-3xl text-red-500">+</strong>
        <Link href={"/dashboard"}>
          <Button className="text-white border-white border-[1px] rounded-lg hover:bg-white hover:text-black ml-4">
            Meu painel
          </Button>
        </Link>
      </div>

      <Login />
    </nav>
  );
}
