/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import { useEffect, useState } from 'react'
import { questions } from '@/data/questions';
import OptionButtons from './OptionButtons';
import ScoreCard from './ScoreCard';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { calculateCorrect } from '@/utils/score';
import { randomQuestion } from '@/utils/randomQuestion';
import { Question } from '@/types/question';

const QuizCard = () => {
  const [questionId, setQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const nextBtn = <MdNavigateNext />;
  const previousBtn = <MdNavigateBefore />;
  const [shuffledArray, setShuffledArray] = useState<Question[]>([]);

  function handleSelect(option: number) {
    setSelectedOption(option);
  }

  useEffect(() => {
      setShuffledArray(randomQuestion(questions));
  }, []);

  const currentQuestion = shuffledArray[questionId - 1];

  function scoring() {
    if (selectedOption === currentQuestion?.correctAnswer) {
      setScore(prev => {
        const newScore = prev + 1;
        calculateCorrect(newScore);
        return newScore;
      });
    }
  }

  const handleNext = () => {
    setQuestionId(prev => prev + 1);
    scoring();
    setSelectedOption(null);
  }

  const handlePrevious = () => {
    if(questionId === 1) return;
    setQuestionId(questionId - 1);
  }

  console.log(score);
  console.log(questionId);
  
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-300 h-screen">
    
       <div className="bg-white flex justify-center flex-col items-center mx-2 shadow-[0_0_15px_rgba(0,0,0,0.3)] lg:mx-0 sm:max-h-10/12 lg:max-h-6/12 xl:max-h-6/12 sm:max-w-10/12 lg:max-w-6/12 xl:w-5/12 gap-6 py-5 lg:py-10 px-10 rounded min-h-fit">
      
        {questionId > 10 ? (
        <ScoreCard score={score} />
      ) :
      <div className='flex flex-col justify-center gap-3 w-full'>
        <div className='w-full h-1.5 bg-gray-800/30 rounded'>
        <div
        style={{width: `${questionId * 10}%`}}
        className={`h-1.5 bg-emerald-600 transition-all rounded`}>

        </div>
      </div>
        <div className='font-semibold'>Question No. {questionId}</div>
      <div className='text-xl font-bold font-sans'>
       Q. {currentQuestion?.question}
      </div>
      <OptionButtons currentQuestion={currentQuestion} onSelect={handleSelect} selectedOption={selectedOption} />
      <div className='flex justify-between w-full'>
        <button onClick={handlePrevious} className='bg-emerald-500 py-2 px-8 rounded text-xl text-white flex items-center justify-center cursor-pointer hover:ring hover:ring-inset ring-emerald-700'>
          {previousBtn}
        </button>
          <button 
          className={`bg-emerald-500 py-2 rounded text-sm text-white flex items-center justify-center cursor-pointer hover:ring hover:ring-inset ring-emerald-700 ${questionId === 10 ? "pl-3 pr-2" : "px-8"}`}
          disabled={selectedOption === null}
          onClick={() => {handleNext(); randomQuestion(questions)}}> {questionId === 10 ? "Submit" : ""} 
          <div className='text-xl'>{nextBtn}</div>
          </button>
      </div>
      </div>
}
      </div>
    </div>
  )
}

export default QuizCard