import cat1 from "@/assets/1.jpg";
import cat2 from "@/assets/2.jpg";

import cat3 from "@/assets/3.png";
import youtube from "@/assets/youtube.svg";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App 
        </h1>

        {/* SVG imports are properly typed but ESLint doesn't recognize the declaration */}
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        Svg test: <Image src={youtube} alt="youtube" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
         <Image src={cat1} alt="cat1" />
         <Image src={cat2} alt="cat2" />
         <Image src={cat3} alt="cat3" />

        </div>
      </div>
    </main>
  );
}
