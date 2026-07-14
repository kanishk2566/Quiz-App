"use client"
import Link from 'next/link';
import React from 'react'

interface Score {
  score: number;
}
const ScoreCard = ({score}: Score) => {
  // dynamic color and background color red, yellow, green
  // showing result of current question just after the question where we don't need score count
  // review answers button on scorecard 
  // Changing UI 

  const great = score > 7;
  const decent = score < 7 && score >= 4;
  const poor = score < 4;
  return (
    <div className={`flex justify-center flex-col items-center mx-2 lg:mx-0 gap-6 py-5 lg:pt-10 px-5 rounded min-h-fit ring-2 ${great ? "bg-green-500/30 ring-green-700" : "" } ${decent ? "bg-yellow-500/30 ring-yellow-500" : ""} ${poor ? "bg-red-500/30 ring-red-500" : ""}`}>
      <div className='text-xl text-center font-bold uppercase font-sans'>
        Quiz Completed
      </div>
      <div className={`w-full px-3 py-2 rounded flex flex-col justify-center items-center ${great ? "bg-green-700 text-white" : ""} ${decent ? "bg-yellow-500" : ""} ${poor ? "bg-red-600" : ""}`}>
        <div className='font-bold '>
          Your Score:-
        </div>
        <div className={`font-bold text-2xl text-center`}>
          {score}/10
          <div className= {`text-sm uppercase`}>
            {score > 7 && "Great"}
            {score < 7 && score >= 4 && "Decent"}
            {score < 4 && "Poor"}
          </div>
        </div>
      </div>
      <div>
        <Link href={"/review"}>Review Answers</Link>
      </div>
      <Link className='px-3 py-1 rounded bg-white text-black' href={"/"}>Back to Quiz</Link>
    </div>
  )
}

export default ScoreCard