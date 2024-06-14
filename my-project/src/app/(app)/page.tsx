import Image from "next/image";
import hero from "../../img/hero.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between py-10 bg-black h-[92vh]">
      <div className="flex items-center flex-col justify-center">
        <Image src={hero} width={500} height={500} alt="Hero" />
        <h1 className="text-white text-3xl mt-10 w-[35vw] text-center">
          Sistema feito para organizar seus estudos e tarefas
        </h1>
        <div className="flex mt-4">
          <Button className=" bg-white hover:bg-zinc-400 mr-10">
            +7mil posts
          </Button>
          <Button className=" bg-white hover:bg-zinc-400">
            +mil comentários
          </Button>
        </div>
      </div>
    </main>
  );
}
