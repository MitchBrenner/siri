import { SettingsIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">

      {/* header */}
      <header
        className="flex justify-between fixed top-0 text-white w-full p-5"
      >
        <Image 
          src={'https://avatars.githubusercontent.com/u/124599?v=4'}
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-contain"
        />
        <SettingsIcon 
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-purple-600 text-black 
          transition-all duration-300 ease-in-out hover:bg-purple-700 hover:text-white"  
        />
      </header>

      {/* form */}

      <form>
        {/* Messages */}
        <div></div>

        {/* Hidden inputs */}
        <input type="file" />
        <input type="submit" />
      </form>



    </main>
  );
}
