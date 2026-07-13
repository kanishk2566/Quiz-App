import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-300 h-screen">
      <div className="bg-white sm:h-10/12 lg:h-6/12 xl:h-6/12 sm:w-10/12 lg:w-6/12 xl:w-5/12 flex justify-center flex-col items-center gap-4 rounded">
        <div className="text-[1.5rem] font-bold text-emerald-500">
        Welcome To the Quiz
      </div>
      <div>
        <Link 
        className="py-3 px-4 bg-emerald-500 text-white rounded-lg font-bold"
        href={"/quiz"}>Start Quiz</Link>
      </div>
      </div>
    </div>
  );
}
