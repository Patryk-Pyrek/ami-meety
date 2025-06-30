// src/components/QuestionStep.tsx
import React from 'react';
import { Question } from '../data/activities';

type QuestionStepProps = {
  question: Question;
  onAnswer: (answerId: string) => void;
};

const QuestionStep: React.FC<QuestionStepProps> = ({ question, onAnswer }) => (
  <div className="space-y-6 text-center">
    <h2 className="text-2xl font-bold">{question.text}</h2>
    <div className="flex flex-col items-center space-y-4">
      {question.answers.map(answer => (
        <button
          key={answer.id}
          onClick={() => onAnswer(answer.id)}
          className="cyber-button px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-all"
        >
          {answer.label}
        </button>
      ))}
    </div>
  </div>
);

export default QuestionStep;
