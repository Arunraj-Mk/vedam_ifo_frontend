import React from 'react';

type QuestionStatus = 'attended' | 'not-attended' | 'current';

interface Question {
  id: number;
  status: QuestionStatus;
}

interface QuickNavigationProps {
  questions: Question[];
  currentQuestion: number; // 1-indexed question number
  onQuestionSelect: (questionId: number) => void;
}

const QuickNavigation: React.FC<QuickNavigationProps> = ({
  questions,
  currentQuestion,
  onQuestionSelect,
}) => {
  const getButtonStyle = (status: QuestionStatus, isCurrent: boolean) => {
    if (isCurrent) {
      return 'bg-gray-800 text-white border-gray-800';
    }
    if (status === 'attended') {
      return 'bg-gray-200 text-gray-900 border-gray-200';
    }
    return 'bg-white text-gray-900 border-gray-300';
  };

  const getBorderStyle = (status: QuestionStatus, isCurrent: boolean) => {
    if (isCurrent && status !== 'attended') {
      return 'border-2 border-[#4B9C91]';
    }
    return 'border';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-2 sm:p-4 md:p-6 shadow-sm w-full">
      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
        Quick Navigation
      </h3>

      {/* Question Buttons Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(35px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(40px,1fr))] gap-1 mb-4 sm:mb-6 w-full">
        {questions.map((question, index) => {
          const questionNumber = index + 1;
          const isCurrent = questionNumber === currentQuestion;
          return (
            <button
              key={question.id}
              onClick={() => onQuestionSelect(question.id)}
              className={`
                aspect-square rounded-md font-medium text-[9px] sm:text-[10px] transition-all
                ${getButtonStyle(question.status, isCurrent)}
                ${getBorderStyle(question.status, isCurrent)}
                hover:scale-105 focus:outline-none focus:ring-1 focus:ring-[#4B9C91] focus:ring-offset-1
                flex items-center justify-center
              `}
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              {questionNumber.toString().padStart(2, '0')}
            </button>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-200 border border-gray-300"></div>
          <span className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Attended
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white border border-gray-300"></div>
          <span className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Not Attended
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#4B9C91] border-2 border-[#4B9C91]"></div>
          <span className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Current
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuickNavigation;

