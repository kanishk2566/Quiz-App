/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { getScore } from '@/utils/storage'
import React, { useEffect, useState } from 'react'

const ScoreCard = () => {
  const score = getScore();
  const [result, setResult] = useState(1);

  useEffect(() => {
    if(score <= 8){
    setResult(1);
  } else if(score <= 6 && score > 8){
    setResult(2);
  } else if(score <= 4 && score > 8){
    setResult(3);
  } else {
    setResult(0);
  }
  }, [])

  console.log(result);

  return (
    <div>{score}</div>
  )
}

export default ScoreCard