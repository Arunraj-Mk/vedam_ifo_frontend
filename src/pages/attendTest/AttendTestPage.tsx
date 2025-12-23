import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import TestHeader from './components/TestHeader';
import TestTimer from './components/TestTimer';
import QuestionCard from './components/QuestionCard';
import QuickNavigation from './components/QuickNavigation';
import SubmitTestModal from './components/SubmitTestModal';

interface QuestionOption {
  id: string;
  label: string;
}

interface Question {
  id: number;
  text: string;
  category: string;
  options: QuestionOption[];
}

// Sample questions data
const questionsData: Question[] = [
  // Algebra Questions
  { id: 1, category: 'Algebra', text: 'Solve For X: 3x + 7 = 22', options: [{ id: '1', label: 'X=5' }, { id: '2', label: 'X=6' }, { id: '3', label: 'X=4' }, { id: '4', label: 'X=7' }] },
  { id: 2, category: 'Algebra', text: 'Simplify: (2x + 3)(x - 4)', options: [{ id: '1', label: '2x² - 5x - 12' }, { id: '2', label: '2x² + 5x - 12' }, { id: '3', label: '2x² - 11x - 12' }, { id: '4', label: '2x² + 11x - 12' }] },
  { id: 3, category: 'Algebra', text: 'What is the value of x if 2x² - 8 = 0?', options: [{ id: '1', label: 'x = ±2' }, { id: '2', label: 'x = ±4' }, { id: '3', label: 'x = ±8' }, { id: '4', label: 'x = ±16' }] },
  { id: 4, category: 'Algebra', text: 'Solve the system: x + y = 10, x - y = 4', options: [{ id: '1', label: 'x=7, y=3' }, { id: '2', label: 'x=6, y=4' }, { id: '3', label: 'x=8, y=2' }, { id: '4', label: 'x=5, y=5' }] },
  { id: 5, category: 'Algebra', text: 'Factor: x² - 9', options: [{ id: '1', label: '(x-3)(x+3)' }, { id: '2', label: '(x-9)(x+1)' }, { id: '3', label: '(x-3)²' }, { id: '4', label: '(x+3)²' }] },
  { id: 6, category: 'Algebra', text: 'What is the slope of the line y = 3x + 5?', options: [{ id: '1', label: '3' }, { id: '2', label: '5' }, { id: '3', label: '-3' }, { id: '4', label: '-5' }] },
  { id: 7, category: 'Algebra', text: 'Solve: |x - 5| = 3', options: [{ id: '1', label: 'x = 2 or x = 8' }, { id: '2', label: 'x = -2 or x = 8' }, { id: '3', label: 'x = 2 or x = -8' }, { id: '4', label: 'x = -2 or x = -8' }] },
  { id: 8, category: 'Algebra', text: 'What is the domain of f(x) = √(x - 3)?', options: [{ id: '1', label: 'x ≥ 3' }, { id: '2', label: 'x > 3' }, { id: '3', label: 'x ≤ 3' }, { id: '4', label: 'All real numbers' }] },
  { id: 9, category: 'Algebra', text: 'Simplify: (x³)²', options: [{ id: '1', label: 'x⁵' }, { id: '2', label: 'x⁶' }, { id: '3', label: 'x⁹' }, { id: '4', label: '2x³' }] },
  { id: 10, category: 'Algebra', text: 'Solve: log₂(x) = 4', options: [{ id: '1', label: 'x = 8' }, { id: '2', label: 'x = 16' }, { id: '3', label: 'x = 32' }, { id: '4', label: 'x = 64' }] },
  
  // Geometry Questions
  { id: 11, category: 'Geometry', text: 'What is the area of a circle with radius 5?', options: [{ id: '1', label: '10π' }, { id: '2', label: '25π' }, { id: '3', label: '50π' }, { id: '4', label: '100π' }] },
  { id: 12, category: 'Geometry', text: 'In a right triangle, if one leg is 3 and the other is 4, what is the hypotenuse?', options: [{ id: '1', label: '5' }, { id: '2', label: '6' }, { id: '3', label: '7' }, { id: '4', label: '8' }] },
  { id: 13, category: 'Geometry', text: 'What is the sum of interior angles of a hexagon?', options: [{ id: '1', label: '540°' }, { id: '2', label: '720°' }, { id: '3', label: '900°' }, { id: '4', label: '1080°' }] },
  { id: 14, category: 'Geometry', text: 'A triangle has sides 5, 12, and 13. What type of triangle is it?', options: [{ id: '1', label: 'Equilateral' }, { id: '2', label: 'Isosceles' }, { id: '3', label: 'Right' }, { id: '4', label: 'Scalene' }] },
  { id: 15, category: 'Geometry', text: 'What is the volume of a cylinder with radius 3 and height 5?', options: [{ id: '1', label: '15π' }, { id: '2', label: '30π' }, { id: '3', label: '45π' }, { id: '4', label: '90π' }] },
  { id: 16, category: 'Geometry', text: 'Two parallel lines are cut by a transversal. If one angle is 60°, what is the corresponding angle?', options: [{ id: '1', label: '30°' }, { id: '2', label: '60°' }, { id: '3', label: '120°' }, { id: '4', label: '180°' }] },
  { id: 17, category: 'Geometry', text: 'What is the perimeter of a square with area 64?', options: [{ id: '1', label: '16' }, { id: '2', label: '32' }, { id: '3', label: '64' }, { id: '4', label: '128' }] },
  { id: 18, category: 'Geometry', text: 'In a circle, if the central angle is 90°, what fraction of the circle does it represent?', options: [{ id: '1', label: '1/2' }, { id: '2', label: '1/3' }, { id: '3', label: '1/4' }, { id: '4', label: '1/6' }] },
  { id: 19, category: 'Geometry', text: 'What is the surface area of a cube with side length 4?', options: [{ id: '1', label: '48' }, { id: '2', label: '64' }, { id: '3', label: '96' }, { id: '4', label: '128' }] },
  { id: 20, category: 'Geometry', text: 'If two triangles are similar with ratio 2:3, and the smaller triangle has area 16, what is the larger area?', options: [{ id: '1', label: '24' }, { id: '2', label: '32' }, { id: '3', label: '36' }, { id: '4', label: '48' }] },
  
  // Calculus Questions
  { id: 21, category: 'Calculus', text: 'What is the derivative of f(x) = x³?', options: [{ id: '1', label: '3x²' }, { id: '2', label: 'x²' }, { id: '3', label: '3x' }, { id: '4', label: 'x³' }] },
  { id: 22, category: 'Calculus', text: 'What is the derivative of sin(x)?', options: [{ id: '1', label: 'cos(x)' }, { id: '2', label: '-cos(x)' }, { id: '3', label: 'sin(x)' }, { id: '4', label: '-sin(x)' }] },
  { id: 23, category: 'Calculus', text: 'What is ∫ x dx?', options: [{ id: '1', label: 'x²/2 + C' }, { id: '2', label: 'x² + C' }, { id: '3', label: 'x + C' }, { id: '4', label: '1 + C' }] },
  { id: 24, category: 'Calculus', text: 'What is the limit of (x² - 4)/(x - 2) as x approaches 2?', options: [{ id: '1', label: '0' }, { id: '2', label: '2' }, { id: '3', label: '4' }, { id: '4', label: 'Undefined' }] },
  { id: 25, category: 'Calculus', text: 'What is the derivative of eˣ?', options: [{ id: '1', label: 'eˣ' }, { id: '2', label: 'xeˣ' }, { id: '3', label: 'eˣ/x' }, { id: '4', label: 'ln(x)' }] },
  { id: 26, category: 'Calculus', text: 'What is ∫ 1/x dx?', options: [{ id: '1', label: 'ln|x| + C' }, { id: '2', label: '1/x² + C' }, { id: '3', label: 'x + C' }, { id: '4', label: 'x²/2 + C' }] },
  { id: 27, category: 'Calculus', text: 'What is the derivative of ln(x)?', options: [{ id: '1', label: '1/x' }, { id: '2', label: 'x' }, { id: '3', label: '1/x²' }, { id: '4', label: 'ln(x)' }] },
  { id: 28, category: 'Calculus', text: 'What is the second derivative of x⁴?', options: [{ id: '1', label: '4x³' }, { id: '2', label: '12x²' }, { id: '3', label: '24x' }, { id: '4', label: '24' }] },
  { id: 29, category: 'Calculus', text: 'What is the derivative of f(x) = 5x² + 3x - 2?', options: [{ id: '1', label: '10x + 3' }, { id: '2', label: '5x + 3' }, { id: '3', label: '10x - 2' }, { id: '4', label: '5x² + 3' }] },
  { id: 30, category: 'Calculus', text: 'What is ∫ cos(x) dx?', options: [{ id: '1', label: 'sin(x) + C' }, { id: '2', label: '-sin(x) + C' }, { id: '3', label: 'cos(x) + C' }, { id: '4', label: '-cos(x) + C' }] },
];

// Extend to 60 questions by repeating with variations
const allQuestions: Question[] = [
  ...questionsData,
  ...questionsData.map((q) => ({ ...q, id: q.id + 30, text: `${q.text} (Part 2)` })),
];

const AttendTestPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(73 * 60 + 52); // 73:52 in seconds
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const totalTime = 90 * 60; // 90:00 in seconds

  const testData = {
    title: 'Mathematics Mastery Quiz',
    subtitle: 'Test your knowledge of Algebra, Geometry, and Calculus',
    totalQuestions: allQuestions.length,
  };

  const currentQuestion = allQuestions[currentQuestionIndex];

  // Auto-submit handler
  const handleAutoSubmit = React.useCallback(() => {
    // Auto-submit when time runs out
    console.log('Test auto-submitted with answers:', selectedAnswers);
    navigate('/analytics');
  }, [selectedAnswers, navigate]);

  // Update timer and auto-submit when time runs out
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit when time runs out
          setTimeout(() => handleAutoSubmit(), 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleAutoSubmit]);

  // Calculate progress based on answered questions
  const answeredCount = Object.keys(selectedAnswers).length;
  const progress = (answeredCount / testData.totalQuestions) * 100;

  // Generate question status for quick navigation
  const questionStatuses = useMemo(() => {
    return allQuestions.map((q, index) => {
      const isAnswered = selectedAnswers[q.id] !== undefined;
      const isCurrent = index === currentQuestionIndex;
      
      if (isCurrent) return 'current';
      if (isAnswered) return 'attended';
      return 'not-attended';
    });
  }, [selectedAnswers, currentQuestionIndex]);

  const handleManualSubmit = () => {
    setIsSubmitModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    // Navigate to results page or show results
    console.log('Test submitted with answers:', selectedAnswers);
    navigate('/analytics');
  };

  const handleQuestionSelect = (questionId: number) => {
    const index = allQuestions.findIndex((q) => q.id === questionId);
    if (index !== -1) {
      setCurrentQuestionIndex(index);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  };

  // Get current question with selected state
  const questionWithSelection = {
    ...currentQuestion,
    options: currentQuestion.options.map((opt) => ({
      ...opt,
      isSelected: selectedAnswers[currentQuestion.id] === opt.id,
    })),
  };

  const quickNavQuestions = allQuestions.map((q, index) => ({
    id: q.id,
    status: questionStatuses[index] as 'attended' | 'not-attended' | 'current',
  }));

  return (
    <div className="min-h-screen">
      {/* Header */}
      <TestHeader />

      {/* Main Content */}
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-24 md:pt-[64px] pb-8">
        {/* Title Section */}
        <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 mb-2" style={{ fontFamily: 'General Sans, sans-serif' }}>
              {testData.title}
            </h1>
            <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
              {testData.subtitle}
            </p>
          </div>
          {/* Timer and Submit Button */}
          <div className="lg:flex-shrink-0">
            <TestTimer
              timeRemaining={timeRemaining}
              totalTime={totalTime}
              onSubmit={handleManualSubmit}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="mb-8">
          <QuestionCard
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={testData.totalQuestions}
            category={currentQuestion.category}
            question={questionWithSelection}
            progress={progress}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onOptionSelect={handleOptionSelect}
          />
        </div>

        {/* Quick Navigation */}
        <QuickNavigation
          questions={quickNavQuestions}
          currentQuestion={currentQuestionIndex + 1}
          onQuestionSelect={handleQuestionSelect}
        />
      </div>

      {/* Submit Test Modal */}
      <SubmitTestModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
        onSubmit={handleConfirmSubmit}
      />
    </div>
  );
};

export default AttendTestPage;

