import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import SubjectCard, { SubjectCardProps } from './SubjectCard';
import { useAvailableTests, useStartTest } from '@/hooks/useTests';
import { useMyPaymentStatus } from '@/hooks/useStudents';
import toast from 'react-hot-toast';

// Subject mapping based on test names
const SUBJECT_MAPPING: Record<string, string> = {
  math: 'Mathematics',
  mathematics: 'Mathematics',
  maths: 'Mathematics',
  science: 'Science',
  english: 'English',
  kannada: 'Kannada',
  social: 'Social Studies',
  'social science': 'Social Studies',
  'social studies': 'Social Studies',
};

const TestContent: React.FC = () => {
  const navigate = useNavigate();
  const { data: availableTests, isLoading: testsLoading } = useAvailableTests();
  const { data: paymentStatus } = useMyPaymentStatus();
  const { mutate: startTest, isPending: isStartingTest } = useStartTest();

  const handleStartTest = (testId: string) => {
    // Check payment status
    if (paymentStatus?.data.paymentStatus !== 'PAID') {
      toast.error('Please complete payment to start tests');
      return;
    }

    // Show loading toast
    toast.loading('Starting test...', { id: 'start-test' });

    startTest(testId, {
      onSuccess: (data) => {
        toast.success('Test started successfully!', { id: 'start-test' });
        // Navigate to test page with attemptId
        navigate(`/attend-test/${data.data.attemptId}`);
      },
      onError: (error: Error) => {
        toast.error(error.message || 'Failed to start test', { id: 'start-test' });
      },
    });
  };

  // Extract subject from test name
  const extractSubject = (testName: string): string => {
    const name = testName.toLowerCase();
    for (const [key, subject] of Object.entries(SUBJECT_MAPPING)) {
      if (name.includes(key)) {
        return subject;
      }
    }
    return 'Other';
  };

  // Map available tests to subject cards
  const getSubjectIcon = (subject: string) => {
    const subjectLower = subject.toLowerCase();
    if (subjectLower.includes('math')) {
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 3.84L18.16 20H5.84L12 5.84z"/>
        </svg>
      );
    } else if (subjectLower.includes('science')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    } else if (subjectLower.includes('english')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    } else if (subjectLower.includes('kannada')) {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    } else {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
  };

  const getSubjectImage = (subject: string) => {
    const subjectLower = subject.toLowerCase();
    if (subjectLower.includes('math')) {
      return 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop';
    } else if (subjectLower.includes('science')) {
      return 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop';
    } else if (subjectLower.includes('english')) {
      return 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=200&fit=crop';
    } else if (subjectLower.includes('kannada')) {
      return 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop';
    } else {
      return 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=200&fit=crop';
    }
  };

  // Group tests by subject
  const testsBySubject = useMemo(() => {
    if (!availableTests?.data.tests) return {};

    const grouped: Record<string, typeof availableTests.data.tests> = {};

    availableTests.data.tests.forEach((test) => {
      const subject = extractSubject(test.testName);
      if (!grouped[subject]) {
        grouped[subject] = [];
      }
      grouped[subject].push(test);
    });

    // Sort subjects in a preferred order
    const subjectOrder = ['Mathematics', 'Science', 'English', 'Kannada', 'Social Studies', 'Other'];
    const sorted: Record<string, typeof availableTests.data.tests> = {};
    
    subjectOrder.forEach((subject) => {
      if (grouped[subject]) {
        sorted[subject] = grouped[subject];
      }
    });

    // Add any remaining subjects
    Object.keys(grouped).forEach((subject) => {
      if (!sorted[subject]) {
        sorted[subject] = grouped[subject];
      }
    });

    return sorted;
  }, [availableTests]);

  if (testsLoading) {
    return (
      <div className="w-full p-2">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Subject</h1>
          <p className="text-gray-600">Loading available tests...</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
              <div className="h-32 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!availableTests?.data.tests || availableTests.data.tests.length === 0) {
    return (
      <div className="w-full p-2">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Subject</h1>
          <p className="text-gray-600">No tests available at the moment</p>
        </div>
        {paymentStatus?.data.paymentStatus !== 'PAID' && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
            <p className="text-yellow-800">
              Please complete payment to access tests
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full p-2">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Subject</h1>
        <p className="text-gray-600">Select a subject and start your practice test</p>
      </div>

      {/* Payment Status Warning */}
      {paymentStatus?.data.paymentStatus !== 'PAID' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-yellow-800">
            ⚠️ Please complete payment to start tests
          </p>
        </div>
      )}

      {/* Subject-wise Test Sections */}
      {Object.entries(testsBySubject).map(([subject, tests]) => (
        <div key={subject} className="mb-8">
          {/* Subject Header */}
          <div className="mb-4 flex items-center gap-3">
            <div className="text-[#4B9C91]">
              {getSubjectIcon(subject)}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{subject}</h2>
            <span className="text-sm text-gray-500">({tests.length} {tests.length === 1 ? 'test' : 'tests'})</span>
          </div>

          {/* Test Cards Grid for this Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tests.map((test) => {
              const subjectCard: SubjectCardProps = {
                id: test.id,
                subjectName: test.testName,
                description: test.description || `Practice test for ${subject}`,
                icon: getSubjectIcon(subject),
                image: getSubjectImage(subject),
                numberOfQuestions: test.totalQuestions,
                testTiming: `${Math.floor(test.duration / 60)} Mins`,
                onStartTest: handleStartTest,
                isStarting: isStartingTest,
              };
              return <SubjectCard key={test.id} {...subjectCard} />;
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestContent;
