import TestSeriesCard, { TestSeriesCardProps } from './TestSeriesCard';

const TestSeriesSection = () => {
  const testSeries: TestSeriesCardProps[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400',
      classLabel: 'Class 8',
      marks: '50 Marks',
      students: 40,
      date: '15/10/2025',
      title: 'Free Test 8th Standard',
      description: 'Practice Maths, Science, English, and General Knowledge with fun questions, creative tasks, building confidence for exams',
      questions: '50 Qs',
      duration: '50min',
      currentPrice: '₹350',
      originalPrice: '₹500',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
      classLabel: 'Class 9',
      marks: '90 Marks',
      students: 11,
      date: '16/10/2025',
      title: 'Science Mock Test',
      description: 'Practice Physics, Chemistry, Biology, and General Science with fun questions, creative tasks, building confidence for exams',
      questions: '40qs',
      duration: '80min',
      currentPrice: '₹350',
      originalPrice: '₹499',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
      classLabel: 'Class 10',
      marks: '60 Marks',
      students: 234,
      date: '18/10/2025',
      title: 'Maths Olympiad Prep',
      description: 'Prepare with challenging problems, logical puzzles, and practice questions to sharpen skills, boost confidence, and excel in competitions',
      questions: '30 Qs',
      duration: '45min',
      currentPrice: '₹350',
      originalPrice: '₹799',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400',
      classLabel: 'Class 11',
      marks: '100 Marks',
      students: 342,
      date: '20/10/2025',
      title: 'Physics Chapter 1-5',
      description: 'Learn motion, force, energy, sound, and light through simple explanations, practice questions, and confidence-building exercises',
      questions: '60 Qs',
      duration: '120min',
      currentPrice: '₹350',
      originalPrice: '₹999',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400',
      classLabel: 'Class 12',
      marks: '80 Marks',
      students: 156,
      date: '22/10/2025',
      title: 'Chemistry',
      description: 'Practice organic and inorganic chemistry with comprehensive questions, detailed explanations, and exam-focused preparation',
      questions: '50 Qs',
      duration: '90min',
      currentPrice: '₹350',
      originalPrice: '₹899',
    },
  ];

  return (
    <section className=" py-12 md:py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4 uppercase">
            Ongoing Test{' '}
            <span className="relative inline-block">
              Series
              <svg 
                className="absolute -bottom-2 left-0 right-0 w-full h-4"
                viewBox="0 0 200 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M 0 15 Q 50 5, 100 10 T 200 8"
                  stroke="#00B512"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="text-[#696969] text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-4 px-4">
            Online Test Series Platform For Students Of Class 8 To 12 To Practice And Improve Their Exam Performance In A Real-Time Environment.
          </p>
          <div className="w-32 md:w-40 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 md:gap-8 min-w-max px-4">
            {testSeries.map((test) => (
              <TestSeriesCard key={test.id} {...test} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestSeriesSection;

