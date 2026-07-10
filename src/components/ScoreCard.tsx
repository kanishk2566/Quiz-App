"use client"
import React from 'react'

interface Score {
  score: number;
}
const ScoreCard = ({score}: Score) => {
  return (
    <div>
      <div>Your Quiz is Completed.</div>
      <div>Your Score:</div>
      <div>{score}/10</div>
    </div>
  )
}

export default ScoreCard