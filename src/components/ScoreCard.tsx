"use client"
import React from 'react'

interface Score {
  score: number;
}
const ScoreCard = ({score}: Score) => {
  // dynamic color and background color red, yellow, green
  // showing result of current question just after the question where we don't need score count
  // when user go to previous answer, the selected choice gets cleared and there is not any selected option
  // random Question
  return (
    <div className=' bg-white flex justify-center flex-col items-center mx-2 lg:mx-0 sm:max-h-10/12 lg:max-h-6/12 xl:max-h-6/12 sm:max-w-10/12 lg:max-w-6/12 xl:w-5/12 gap-6 py-5 lg:py-10 px-10 rounded min-h-fit'>
      <div className='text-xl font-bold uppercase font-sans'>
        Completed.
      </div>
      <div className='px-5 py-2 w-fit rounded bg-emerald-500 text-white flex flex-col justify-center items-center ring-5 ring-black/30'>
        <div className=''>
          Your Score
        </div>
        <div className='font-bold text-2xl'>
          {score}/10
        </div>
      </div>
    </div>
  )
}

export default ScoreCard