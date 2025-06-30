
import React from 'react';

interface Question {
  id: string;
  question: string;
  options: Array<{
    id: string;
    text: string;
    emoji: string;
  }>;
}

interface QuestionStepProps {
  question: Question;
  onAnswer: (answerId: string) => void;
}

const QuestionStep: React.FC<QuestionStepProps> = ({ question, onAnswer }) => {
  const isTimeQuestion = question.id === 'time';
  
  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-3xl font-bold holographic text-center">
        {question.question}
      </h2>
      
      <div className={`${isTimeQuestion ? 'flex flex-wrap justify-center gap-4' : 'grid grid-cols-1 md:grid-cols-2 gap-6'} max-w-4xl`}>
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onAnswer(option.id)}
            className="cyber-button p-6 rounded-xl text-white font-bold text-lg hover:scale-105 transition-all duration-300 flex flex-col items-center space-y-2"
          >
            <span className="text-4xl">{option.emoji}</span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionStep;
