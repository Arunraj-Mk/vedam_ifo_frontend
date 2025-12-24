import { useMemo } from 'react';

type QuestionOption = {
  label: string;
  value: string;
  isCorrect?: boolean;
  isSelected?: boolean;
};

type Question = {
  title: string;
  options: QuestionOption[];
};

type Section = {
  name: string;
  score: string;
  question?: Question;
};

type Insight = {
  text: string;
};

type TestResultsData = {
  attemptId: string;
  testId: string;
  testName: string;
  status: string;
  startedAt: string;
  submittedAt: string | null;
  timeSpent: number;
  totalMarks: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  unanswered: number;
  percentage: number;
  subjectWiseScore: Record<string, {
    total: number;
    correct: number;
    wrong: number;
    unanswered: number;
    marks: number;
  }>;
  answers: Array<{
    questionId: string;
    questionNumber: number;
    subject: string;
    questionText: string;
    selectedAnswer: string;
    correctAnswer: string;
    isCorrect: boolean;
    marksObtained: number;
  }>;
};

type Props = {
  testTitle: string;
  date: string;
  duration: string;
  testResults?: TestResultsData;
  sections?: Section[];
  insights?: Insight[];
};

export default function TestResultModalContent({
  testTitle,
  date,
  duration,
  testResults,
  sections,
  insights,
}: Props) {
  // Calculate actual total questions from subject-wise scores (more accurate than test metadata)
  const actualTotalQuestions = useMemo(() => {
    if (testResults?.subjectWiseScore) {
      // Sum up all subject totals to get the actual number of questions in the test
      return Object.values(testResults.subjectWiseScore).reduce(
        (sum, score) => sum + score.total,
        0
      );
    }
    // Fallback to answers length if subjectWiseScore is not available
    if (testResults?.answers) {
      return testResults.answers.length;
    }
    return testResults?.totalQuestions || 0;
  }, [testResults]);

  // Convert test results to sections format
  const sectionsData = useMemo(() => {
    if (testResults) {
      // Group answers by subject
      const subjectGroups: Record<string, typeof testResults.answers> = {};
      testResults.answers.forEach((answer) => {
        if (!subjectGroups[answer.subject]) {
          subjectGroups[answer.subject] = [];
        }
        subjectGroups[answer.subject].push(answer);
      });

      // Create sections from subject groups
      return Object.entries(subjectGroups).map(([subject, answers]) => {
        const correctCount = answers.filter((a) => a.isCorrect).length;
        const totalCount = answers.length;
        const score = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;

        return {
          name: subject,
          score: `${score}%`,
          answers: answers,
        };
      });
    }
    return sections || [];
  }, [testResults, sections]);

  // Generate insights from test results
  const insightsData = useMemo(() => {
    if (testResults) {
      return [
        { text: `Overall Score: ${testResults.percentage.toFixed(1)}%` },
        { text: `Correct Answers: ${testResults.correctAnswers} out of ${actualTotalQuestions}` },
        { text: testResults.percentage >= 50 ? "Great job! Keep up the good work." : "Review the concepts and try again." },
        ...Object.entries(testResults.subjectWiseScore).map(([subject, score]) => ({
          text: `${subject}: ${score.correct}/${score.total} correct (${Math.round((score.correct / score.total) * 100)}%)`,
        })),
      ];
    }
    return insights || [];
  }, [testResults, insights]);
  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold">{testTitle}</h2>
        <p className="text-sm text-gray-500">
          Date: {date} • Duration: {duration}
        </p>
        {testResults && (
          <div className="mt-2 flex items-center gap-4 text-sm">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              testResults.percentage >= 50
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {testResults.percentage >= 50 ? 'Passed' : 'Failed'} - {testResults.percentage.toFixed(1)}%
            </span>
            <span className="text-gray-600">
              {testResults.correctAnswers}/{actualTotalQuestions} Correct
            </span>
          </div>
        )}
      </div>

      {/* Overall Stats */}
      {/* {testResults && (
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-900">{testResults.totalMarks}</p>
            <p className="text-xs text-gray-600">Total Marks</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">{testResults.correctAnswers}</p>
            <p className="text-xs text-gray-600">Correct</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">{testResults.wrongAnswers}</p>
            <p className="text-xs text-gray-600">Wrong</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-600">{testResults.unanswered}</p>
            <p className="text-xs text-gray-600">Unanswered</p>
          </div>
        </div>
      )} */}

      {/* Subject-wise Performance */}
      {/* {testResults && Object.keys(testResults.subjectWiseScore).length > 0 && (
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Subject-wise Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Object.entries(testResults.subjectWiseScore).map(([subject, score]) => (
              <div key={subject} className="border border-gray-200 rounded-lg p-3">
                <h4 className="font-medium text-gray-900 mb-2">{subject}</h4>
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
                    <span className="text-gray-600">Score:</span>
                    <span className="font-medium">{Math.round((score.correct / score.total) * 100)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}

      {/* Questions by Subject */}
      {sectionsData.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Questions by Subject</h3>
          {sectionsData.map((section, idx) => (
            <details
              key={idx}
              className="rounded-lg border bg-white"
              open={idx === 0}
            >
              <summary className="cursor-pointer px-4 py-3 font-medium flex justify-between hover:bg-gray-50">
                <span>{section.name}</span>
                <span>{section.score}</span>
              </summary>

              {'answers' in section && section.answers.length > 0 && (
                <div className="px-4 pb-4 space-y-4 max-h-96 overflow-y-auto">
                  {section.answers.map((answer) => (
                    <div
                      key={answer.questionId}
                      className={`border rounded-lg p-4 ${
                        answer.isCorrect
                          ? 'border-green-200 bg-green-50'
                          : 'border-red-200 bg-red-50'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-medium text-gray-600">
                          Question {answer.questionNumber}
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
                            {answer.selectedAnswer || 'Not answered'}
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
              )}
            </details>
          ))}
        </div>
      )}

      {/* Performance Insights */}
      <div className="rounded-lg border border-purple-400 bg-purple-50 p-4">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          🎓 Performance Insights
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {insightsData.map((insight, i) => (
            <li key={i}>{insight.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
  