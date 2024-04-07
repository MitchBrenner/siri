'use client';
import Messages from "@/components/Messages";
import Recorder from "@/components/Recorder";
import { SettingsIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {

  const fileRef = useRef<HTMLInputElement>(null);
  const submitButtonRef = useRef<HTMLInputElement>(null);

  const uploadAudio = (blob: Blob) => {

    const url = URL.createObjectURL(blob);

    const file = new File([blob], 'audio.wav', { type: blob.type });

    // set the file of the hidden file input field
    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;
    }

  }

  return (
    <main className="bg-black h-screen overflow-y-scroll">

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

      <form className="flex flex-col bg-black">
        {/* Messages */}
        <div
          className="flex-1 bg-gradient-to-b from-purple-500 to-black"
        >
          <Messages />
        </div>

        {/* Hidden inputs */}
        <input type="file" hidden ref={fileRef}/>
        <input type="submit" hidden ref={submitButtonRef}/>

        <div className="fixed bottom-0 w-full overflow-hidden bg-black rounded-t-3xl">

          {/* recorder */}
          <Recorder />
          <div>
            {/* Voice synthesizer -- output of assistant voice */}
          </div>

        </div>
      </form>



    </main>
  );
}
