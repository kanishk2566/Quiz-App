import React from 'react'
import { Question } from '@/types/question';

interface OptionButtonsProps {
  currentQuestion: Question | undefined;
  selectedOption(option: number): void;
}
const OptionButtons = ({currentQuestion, selectedOption}: OptionButtonsProps) => {

  const optionsList = currentQuestion?.options;
  console.log(optionsList);

  return (
    <div>
      {optionsList?.map((item, index) => (
        <div key={index}>
          <label>
            <input
            onChange={() => selectedOption(index)}
            type='radio'
            name='option'
            />
            {item}
          </label>
        </div>
      ))}
    </div>
  )
}

export default OptionButtons