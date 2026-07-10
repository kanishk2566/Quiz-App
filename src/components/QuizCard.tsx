"use client"
import { useState } from 'react'
import { questions } from '@/data/questions';
import OptionButtons from './OptionButtons';
import ScoreCard from './ScoreCard';
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
const QuizCard = () => {
  const [questionId, setQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const nextBtn = <MdNavigateNext />;
  const previousBtn = <MdNavigateBefore />;

  function handleSelect(option: number) {
    setSelectedOption(option);
  }

  const currentQuestion = questions.find(question => question.id === questionId);

  function scoring(): number {
    if(selectedOption === currentQuestion?.correctAnswer){
      setScore(score + 1);
    }
    return score;
  }

  const handleNext = () => {
    setQuestionId(questionId + 1);
    scoring();
  }

  const handlePrevious = () => {
    if(questionId === 1) return;
    setQuestionId(questionId - 1);
  }

  console.log(score);
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-300 h-screen">
       <div className="bg-white flex justify-center flex-col items-center sm:max-h-10/12 lg:max-h-6/12 xl:max-h-6/12 sm:max-w-10/12 lg:max-w-6/12 xl:max-w-5/12 gap-6 py-10 px-10 rounded w-fit">
        {questionId > 10 ? (
        <ScoreCard score={score} />
      ) :
      <div className='flex flex-col gap-3 w-full'>
        <div className='font-semibold'>Question No: {questionId}</div>
      <div className='text-xl font-bold'>
       Q. {currentQuestion?.question}
      </div>
      <OptionButtons currentQuestion={currentQuestion} selectedOption={handleSelect} />
      <div className='flex justify-between w-full'>
        <button onClick={handlePrevious} className='bg-emerald-500 py-2 px-8 rounded text-xl text-white flex items-center justify-center cursor-pointer'>
          {previousBtn} 
        </button>
          <button 
          className='bg-emerald-500 py-2 px-8 rounded text-xl text-white flex items-center justify-center cursor-pointer'
          disabled={selectedOption === null}
          onClick={handleNext}> {questionId === 10 ? "Submit" : ""} {nextBtn}</button>
      </div>
      </div>
}
      </div>
    </div>
  )
}

export default QuizCard