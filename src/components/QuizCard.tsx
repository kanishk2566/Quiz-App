"use client"
import { useState } from 'react'
import { questions } from '@/data/questions';
import OptionButtons from './OptionButtons';
import { useRouter } from 'next/navigation';
const QuizCard = () => {
  const [questionId, setQuestionId] = useState(1);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const router = useRouter();

  function handleSelect(option: number) {
    setSelectedOption(option);
    console.log(option);
  }

  function handleSubmit(){
    router.push("/score");
  }

  console.log(questions);

  const currentQuestion = questions.find(question => question.id === questionId);
  console.log(currentQuestion);

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
  console.log(selectedOption);
  return (
    <div className='flex justify-center items-center h-screen flex-col'>
      <div>Question No: {questionId}</div>
      <div>
        {currentQuestion?.question}
      </div>
      <OptionButtons currentQuestion={currentQuestion} selectedOption={handleSelect} />
      <div>
        <button onClick={handlePrevious}>
          Previous Question
        </button>
        {(questionId === 10) ? (
          <div onClick={handleSubmit}> Submit </div>
        ) : (
          <button 
          disabled={selectedOption === null}
          onClick={handleNext}> Next Question </button>
        )}
      </div>
    </div>
  )
}

export default QuizCard