import { Modal } from '@/components';
import React, { useState } from 'react';
import TestResultModalContent from './TestModal';

export interface TestResultData {
  id: string;
  testNumber: number;
  subject: string;
  status: 'Pass' | 'Fail' | 'Pending';
  score: number;
  date: string;
  duration: string;
  totalQuestions: number;
  answered: number;
  skipped: number;
  subjectIcon?: React.ReactNode;
}

interface TestResultCardProps {
  test: TestResultData;
}

const TestResultCard: React.FC<TestResultCardProps> = ({ test }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSubjectIcon = () => {
    const subjectLower = test.subject.toLowerCase();
    
    // Mathematics: 📐 (protractor/compass)
    if (subjectLower.includes('math') || subjectLower.includes('mathematics')) {
      return <span className="text-lg">📐</span>;
    } 
    // Science: 🔬 (microscope)
    else if (subjectLower.includes('science')) {
      return <span className="text-lg">🔬</span>;
    } 
    // English: 📚 (books)
    else {
      return <span className="text-lg">📚</span>;
    }
  };

  const handleCardClick = () => {
    // Open modal instead of navigating
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg p-6 border border-[#E1E8EF] hover:border-[#4B9C91] cursor-pointer transition-all duration-200 hover:shadow-md"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="text-[#4B9C91]">
            {test.subjectIcon || getSubjectIcon()}
          </div>
          <h3 className="text-base font-semibold text-gray-900">
            Test #{test.testNumber} - {test.subject}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              test.status === 'Pass'
                ? 'bg-green-100 text-green-700'
                : test.status === 'Fail'
                ? 'bg-red-100 text-red-700'
                : 'bg-yellow-100 text-yellow-700'
            }`}
          >
            {test.status}
          </span>
          <span className="text-[#4B9C91] text-xl font-bold">{test.score}%</span>
        </div>
      </div>

      {/* Date and Duration */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Date: {test.date} <span className="mx-2">•</span> Duration: {test.duration}
        </p>
      </div>

      {/* Statistics */}
      <div className="flex items-center justify-between border-t border-gray-200 pt-4 mb-4">
        <div className="text-center flex-1">
          <p className="text-lg font-semibold text-gray-900">{test.totalQuestions}</p>
          <p className="text-xs text-gray-600">No. of Questions</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center flex-1">
          <p className="text-lg font-semibold text-gray-900">{test.answered}</p>
          <p className="text-xs text-gray-600">Answered</p>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="text-center flex-1">
          <p className="text-lg font-semibold text-gray-900">{String(test.skipped).padStart(2, '0')}</p>
          <p className="text-xs text-gray-600">Skipped</p>
        </div>
      </div>

      {/* View Full Details Link */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick();
        }}
        className="text-[#4B9C91] hover:text-[#3a7a70] font-medium text-sm transition-colors"
      >
        View Full Details
      </button>






    </div>

    {/* Modal - rendered outside the card */}
    <Modal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      size="lg"
    >
      <TestResultModalContent
        testTitle={`Test #${test.testNumber} - ${test.subject}`}
        date={test.date}
        duration={test.duration}
        sections={[
          {
            name: "Algebra",
            score: `${test.score}%`,
            question: {
              title: "Solve for X: 3x + 7 = 22",
              options: [
                { label: "X = 5", value: "5", isSelected: true },
                { label: "X = 6", value: "6" },
                { label: "X = 4", value: "4", isCorrect: true },
              ],
            },
          },
          { name: "Geometry", score: `${test.score - 5}%` },
        ]}
        insights={[
          { text: `Strong performance in ${test.subject} (${test.score}%)` },
          { text: `Answered ${test.answered} out of ${test.totalQuestions} questions` },
          { text: test.status === 'Pass' ? "Great job! Keep up the good work." : "Review the concepts and try again." },
        ]}
      />
    </Modal>
    </>
  );
};

export default TestResultCard;

