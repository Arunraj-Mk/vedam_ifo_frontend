import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TestHeader from './components/TestHeader';
import TestTimer from './components/TestTimer';
import QuestionCard from './components/QuestionCard';
import QuickNavigation from './components/QuickNavigation';
import SubmitTestModal from './components/SubmitTestModal';
import {
  useTestQuestions,
  useAttemptStatus,
  useSubmitAnswer,
  useSubmitTest,
} from '@/hooks/useTests';
import type { Question } from '@/services/tests.service';

const AttendTestPage: React.FC = () => {
  const navigate = useNavigate();
  const { attemptId } = useParams<{ attemptId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  // Local state to track selected answers for immediate UI updates
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  // Get test questions
  const { data: questionsData, isLoading: questionsLoading } = useTestQuestions(
    attemptId || '',
    !!attemptId
  );

  // Get attempt status for timer
  const { data: statusData } = useAttemptStatus(attemptId || '', !!attemptId);

  // Submit answer mutation
  const { mutate: submitAnswer } = useSubmitAnswer(attemptId || undefined);

  // Submit test mutation
  const { mutate: submitTest, isPending: isSubmitting } = useSubmitTest(
    attemptId || undefined
  );

  const questions = questionsData?.data.questions || [];
  const timeRemaining = statusData?.data.timeRemaining || questionsData?.data.timeRemaining || 0;
  // Get total duration from questions data or status data
  const totalTime = questionsData?.data.timeRemaining || statusData?.data.timeRemaining || 5400;

  // Initialize selected answers from API data when questions load
  useEffect(() => {
    if (questions.length > 0) {
      const initialAnswers: Record<string, string> = {};
      questions.forEach((q) => {
        if (q.selectedAnswer) {
          initialAnswers[q.id] = q.selectedAnswer;
        }
      });
      setSelectedAnswers(initialAnswers);
    }
  }, [questions]);

  // Convert API question format to component format
  const convertQuestion = useCallback(
    (q: Question, index: number) => {
      // Use local state if available, otherwise fall back to API data
      const selectedAnswer = selectedAnswers[q.id] || q.selectedAnswer;
      return {
        id: index + 1,
        text: q.questionText,
        category: q.subject,
        options: [
          { id: 'A', label: q.optionA, isSelected: selectedAnswer === 'A' },
          { id: 'B', label: q.optionB, isSelected: selectedAnswer === 'B' },
          { id: 'C', label: q.optionC, isSelected: selectedAnswer === 'C' },
          { id: 'D', label: q.optionD, isSelected: selectedAnswer === 'D' },
        ],
      };
    },
    [selectedAnswers]
  );

  // Auto-submit handler
  const handleAutoSubmit = useCallback(() => {
    if (!attemptId) return;
    submitTest(attemptId, {
      onSuccess: () => {
        navigate(`/test/${attemptId}/results`);
      },
    });
  }, [attemptId, submitTest, navigate]);

  // Auto-submit when time runs out
  useEffect(() => {
    if (timeRemaining <= 0 && statusData?.data.status === 'IN_PROGRESS') {
      handleAutoSubmit();
    }
  }, [timeRemaining, statusData?.data.status, handleAutoSubmit]);

  // Redirect if no attemptId
  useEffect(() => {
    if (!attemptId) {
      navigate('/test');
    }
  }, [attemptId, navigate]);

  // Calculate test data - safe defaults for when data is loading
  const testData = useMemo(() => {
    return {
      title: questionsData?.data.testName || 'Test',
      subtitle: 'Answer all questions carefully',
      totalQuestions: questions.length,
    };
  }, [questionsData?.data.testName, questions.length]);

  // Calculate progress based on answered questions
  // Use local state count if available, otherwise use API data
  const progress = useMemo(() => {
    const localAnsweredCount = Object.keys(selectedAnswers).length;
    const apiAnsweredCount = statusData?.data.answeredCount || 0;
    const answeredCount = Math.max(localAnsweredCount, apiAnsweredCount);
    return testData.totalQuestions > 0 ? (answeredCount / testData.totalQuestions) * 100 : 0;
  }, [selectedAnswers, statusData?.data.answeredCount, testData.totalQuestions]);

  // Generate question status for quick navigation
  const questionStatuses = useMemo(() => {
    if (questions.length === 0) return [];
    return questions.map((q, index) => {
      // Check both local state and API data for answered status
      const isAnswered = selectedAnswers[q.id] !== undefined || q.selectedAnswer !== null;
      const isCurrent = index === currentQuestionIndex;
      
      if (isCurrent) return 'current';
      if (isAnswered) return 'attended';
      return 'not-attended';
    });
  }, [questions, currentQuestionIndex, selectedAnswers]);

  // Early returns after all hooks
  if (questionsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4B9C91] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading test...</p>
        </div>
      </div>
    );
  }

  if (!questionsData || questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Test not found or already completed</p>
          <button
            onClick={() => navigate('/test')}
            className="text-[#4B9C91] hover:text-[#3a7a70]"
          >
            Go back to tests
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Question not found</p>
          <button
            onClick={() => navigate('/test')}
            className="text-[#4B9C91] hover:text-[#3a7a70]"
          >
            Go back to tests
          </button>
        </div>
      </div>
    );
  }

  const handleManualSubmit = () => {
    setIsSubmitModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    if (!attemptId) return;
    setIsSubmitModalOpen(false);
    submitTest(attemptId, {
      onSuccess: () => {
        navigate(`/test/${attemptId}/results`);
      },
    });
  };

  const handleQuestionSelect = (questionId: number) => {
    const index = questionId - 1;
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleOptionSelect = (optionId: string) => {
    if (!attemptId || !currentQuestion) return;

    // Convert optionId (A, B, C, D) to the format expected by API
    const answer = optionId as 'A' | 'B' | 'C' | 'D';

    // Update local state immediately for instant UI feedback
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }));

    // Submit answer to API
    submitAnswer({
      attemptId,
      data: {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
      },
    });
  };

  // Get current question with selected state
  const questionWithSelection = convertQuestion(currentQuestion, currentQuestionIndex);

  const quickNavQuestions = questions.map((_q, index) => ({
    id: index + 1,
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
            <h1
              className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              {testData.title}
            </h1>
            <p
              className="text-sm sm:text-base text-gray-600"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
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
            category={currentQuestion.subject}
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
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default AttendTestPage;
