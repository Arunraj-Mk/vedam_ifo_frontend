import React from 'react';
import SubjectCard, { SubjectCardProps } from './SubjectCard';

const TestContent: React.FC = () => {

  const handleStartTest = (subjectId: string) => {
    // TODO: Navigate to actual test page with subject ID
    console.log('Starting test for subject:', subjectId);
    // navigate(`/test/${subjectId}`);
  };

  const subjects: SubjectCardProps[] = [
    {
      id: 'mathematics',
      subjectName: 'Mathematics',
      description: 'Based on Algebra, Geometry, Calculus',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 3.84L18.16 20H5.84L12 5.84z"/>
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop',
      numberOfQuestions: 60,
      testTiming: '90 Mins',
      onStartTest: handleStartTest,
    },
    {
      id: 'science',
      subjectName: 'Science',
      description: 'Based on Algebra, Geometry, Calculus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop',
      numberOfQuestions: 60,
      testTiming: '90 Mins',
      onStartTest: handleStartTest,
    },
    {
      id: 'english',
      subjectName: 'English',
      description: 'Based on Algebra, Geometry, Calculus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=200&fit=crop',
      numberOfQuestions: 60,
      testTiming: '90 Mins',
      onStartTest: handleStartTest,
    },
    {
      id: 'kannada',
      subjectName: 'Kannada',
      description: 'Based on Algebra, Geometry, Calculus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop',
      numberOfQuestions: 60,
      testTiming: '90 Mins',
      onStartTest: handleStartTest,
    },
    {
      id: 'social-science',
      subjectName: 'Social Science',
      description: 'Based on Algebra, Geometry, Calculus',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=200&fit=crop',
      numberOfQuestions: 60,
      testTiming: '90 Mins',
      onStartTest: handleStartTest,
    },
  ];

  return (
    <div className="w-full p-2">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Subject</h1>
        <p className="text-gray-600">Select the subject and move forward</p>
      </div>

      {/* Subject Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} {...subject} />
        ))}
      </div>
    </div>
  );
};

export default TestContent;
