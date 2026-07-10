import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        Welcome To the Quiz
      </div>
      <div>
        Click here to start your quiz
      </div>
      <div>
        <Link href={"/quiz"}>Start</Link>
      </div>
    </div>
  );
}
