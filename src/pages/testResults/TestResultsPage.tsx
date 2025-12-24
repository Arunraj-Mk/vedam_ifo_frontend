import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTestResults } from '@/hooks/useTests';
import { Button } from '@/components';

const TestResultsPage: React.FC = () => {
  const { attemptId } = useParams<{ attemptId: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useTestResults(attemptId || '', !!attemptId);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4B9C91] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : (error as any)?.response?.data?.message || 'Error loading test results';
    
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2 font-semibold">Error loading test results</p>
          <p className="text-gray-600 mb-4 text-sm">{errorMessage}</p>
          <Button
            variant="primary"
            onClick={() => navigate('/analytics')}
            className="bg-[#4B9C91] hover:bg-[#3a7a70] text-white"
          >
            Go to Analytics
          </Button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">No test results found</p>
          <Button
            variant="primary"
            onClick={() => navigate('/analytics')}
            className="bg-[#4B9C91] hover:bg-[#3a7a70] text-white"
          >
            Go to Analytics
          </Button>
        </div>
      </div>
    );
  }

  const results = data.data;
  const isPass = results.percentage >= 50;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-2 sm:px-4 md:px-6 lg:px-8 pt-[34px] pb-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="secondary"
            onClick={() => navigate('/analytics')}
            className="mb-4 text-gray-600 hover:text-gray-900"
          >
            ← Back to Analytics
          </Button>
          <h1
            className="text-3xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            Test Results
          </h1>
          <h2
            className="text-xl text-gray-600"
            style={{ fontFamily: 'General Sans, sans-serif' }}
          >
            {results.testName}
          </h2>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="text-center mb-6">
            <div
              className={`inline-flex items-center justify-center w-32 h-32 rounded-full mb-4 ${
                isPass ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              <span
                className={`text-4xl font-bold ${
                  isPass ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {results.percentage.toFixed(1)}%
              </span>
            </div>
            <h3
              className={`text-2xl font-semibold mb-2 ${
                isPass ? 'text-green-700' : 'text-red-700'
              }`}
            >
              {isPass ? 'Passed' : 'Failed'}
            </h3>
            <p className="text-gray-600">
              {results.correctAnswers} out of {results.totalQuestions} questions correct
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-200 pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{results.totalMarks}</p>
              <p className="text-sm text-gray-600">Total Marks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{results.correctAnswers}</p>
              <p className="text-sm text-gray-600">Correct</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">{results.wrongAnswers}</p>
              <p className="text-sm text-gray-600">Wrong</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-600">{results.unanswered}</p>
              <p className="text-sm text-gray-600">Unanswered</p>
            </div>
          </div>
        </div>

        {/* Subject-wise Performance */}
        {Object.keys(results.subjectWiseScore).length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6 shadow-sm">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              Subject-wise Performance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(results.subjectWiseScore).map(([subject, score]) => (
                <div
                  key={subject}
                  className="border border-gray-200 rounded-lg p-4 hover:border-[#4B9C91] transition-colors"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">{subject}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium">{score.total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-green-600">Correct:</span>
                      <span className="font-medium text-green-600">{score.correct}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-600">Wrong:</span>
                      <span className="font-medium text-red-600">{score.wrong}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Marks:</span>
                      <span className="font-medium">{score.marks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Answers */}
        {results.answers && results.answers.length > 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3
              className="text-xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: 'General Sans, sans-serif' }}
            >
              Question-wise Results
            </h3>
            <div className="space-y-4">
              {results.answers.map((answer) => (
                <div
                  key={answer.questionId}
                  className={`border-2 rounded-lg p-4 ${
                    answer.isCorrect
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Question {answer.questionNumber} ({answer.subject})
                    </span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        answer.isCorrect
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {answer.isCorrect ? '✓ Correct' : '✗ Wrong'}
                    </span>
                  </div>
                  <p className="font-medium text-gray-900 mb-3">{answer.questionText}</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-600">Your Answer: </span>
                      <span
                        className={`font-medium ${
                          answer.isCorrect ? 'text-green-700' : 'text-red-700'
                        }`}
                      >
                        {answer.selectedAnswer}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Correct Answer: </span>
                      <span className="font-medium text-green-700">
                        {answer.correctAnswer}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Marks Obtained: </span>
                      <span className="font-medium">{answer.marksObtained}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Button
            variant="primary"
            onClick={() => navigate('/analytics')}
            className="bg-[#4B9C91] hover:bg-[#3a7a70] text-white"
          >
            View All Tests
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/test')}
            className="border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Take Another Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResultsPage;

