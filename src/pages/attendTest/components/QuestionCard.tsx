import React from 'react';
import ProgressBar from './ProgressBar';

interface QuestionOption {
  id: string;
  label: string;
  isSelected: boolean;
}

interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

interface QuestionCardProps {
  questionNumber: number;
  totalQuestions: number;
  category: string;
  question: Question;
  progress: number;
  onPrevious: () => void;
  onNext: () => void;
  onOptionSelect: (optionId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  questionNumber,
  totalQuestions,
  category,
  question,
  progress,
  onPrevious,
  onNext,
  onOptionSelect,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-2 sm:p-4 md:p-6 shadow-sm">
      {/* Question Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-xs sm:text-sm font-medium text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Questions {questionNumber.toString().padStart(2, '0')} of {totalQuestions}
          </span>
          <span className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium w-fit">
            {category}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full sm:w-48">
          <ProgressBar progress={progress} />
        </div>
      </div>

      {/* Question Text */}
      <div className="mb-6">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
          {question.text}
        </h3>

        {/* Options */}
        <div className="space-y-2 sm:space-y-3">
          {question.options.map((option) => (
            <label
              key={option.id}
              className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all ${
                option.isSelected
                  ? 'border-[#4B9C91] bg-[#4B9C91]/5'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <input
                type="radio"
                name={`question-${question.id}`}
                value={option.id}
                checked={option.isSelected}
                onChange={() => onOptionSelect(option.id)}
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#4B9C91] focus:ring-[#4B9C91] cursor-pointer flex-shrink-0"
              />
              <span className="text-sm sm:text-base text-gray-900 flex-1" style={{ fontFamily: 'General Sans, sans-serif' }}>
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 gap-4">
        <button
          onClick={onPrevious}
          disabled={questionNumber === 1}
          className={`text-xs sm:text-sm font-medium transition-colors py-2 px-3 ${
            questionNumber === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-600 hover:text-gray-900'
          }`}
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          &lt; Previous
        </button>
        <button
          onClick={onNext}
          disabled={questionNumber === totalQuestions}
          className={`text-xs sm:text-sm font-medium transition-colors py-2 px-3 ${
            questionNumber === totalQuestions
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-[#4B9C91] hover:text-[#3a7a70]'
          }`}
          style={{ fontFamily: 'General Sans, sans-serif' }}
        >
          Next Question &gt;
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;

