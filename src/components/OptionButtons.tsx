import React from 'react'
import { Question } from '@/types/question';

interface OptionButtonsProps {
  currentQuestion: Question | undefined;
  onSelect(option: number): void;
  selectedOption: number | null;
}
const OptionButtons = ({currentQuestion, selectedOption, onSelect}: OptionButtonsProps) => {

  const optionsList = currentQuestion?.options;

  return (
    <div className='flex flex-col gap-3 my-5'>
      {optionsList?.map((item, index) => (
        <div
        onClick={() => onSelect(index)}
        className={`px-5 py-2 items-center justify-center font-sans hover:cursor-pointer rounded transition-all duration-200 ${selectedOption === index ? "bg-emerald-500 hover:bg-emerald-500 border border-emerald-500 text-white shadow-lg" : "bg-gray-800/30 hover:bg-gray-500/30 border border-gray-400"}`}
        key={index}>
          <label
          className={`flex gap-2 justify-center hover:cursor-pointer ${currentQuestion?.id === 1 || currentQuestion?.id === 7 ? "font-sans" : "font-mono"}`}>
            {item}
          </label>
        </div>
      ))}
    </div>
  )
}

export default OptionButtons