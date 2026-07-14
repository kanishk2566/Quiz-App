"use client"
import Link from "next/link";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  const play = <FaPlay />;
  const [hover, setHover] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white h-fit w-fit flex justify-center flex-col items-center gap-4 rounded">
        <div className="text-[1.5rem] font-bold text-emerald-500">
          Welcome To the Quiz
        </div>
          <div className="font-bold text-gray-700">
            Test your typescript knowledge by answering basic typescript questions.
          </div>
        <div 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-fit h-fit flex justify-center">
          <Link
          className={`w-fit px-4 flex justify-center items-center gap-2 bg-emerald-500 text-white transition-all font-bold rounded-full ${hover ? "py-3" : "py-4"}`}
          href={"/quiz"}>
              {play} {hover && "Start Quiz"}
          </Link>
        </div>
      </div>
    </div>
  );
}
