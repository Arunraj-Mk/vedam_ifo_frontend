import Button from '@/components/Button';

export interface TestSeriesCardProps {
  id: number;
  image: string;
  classLabel: string;
  marks: string;
  students: number;
  date: string;
  title: string;
  description: string;
  questions: string;
  duration: string;
  currentPrice: string;
  originalPrice: string;
}

const TestSeriesCard: React.FC<TestSeriesCardProps> = ({
  image,
  classLabel,
  marks,
  students,
  date,
  title,
  description,
  questions,
  duration,
  currentPrice,
  originalPrice,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-80 md:w-96">
      <div className="relative h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3 bg-white rounded-md px-3 py-1">
          <span className="text-black text-sm font-semibold">{classLabel}</span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
          </svg>
          <div className=" rounded-md px-3 py-1">
            <span className="text-[white] text-sm font-semibold">{marks}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-purple-400"
              />
            ))}
          </div>
          <span className="text-gray-600 text-sm">+ {students} students</span>
        </div>

        <div className="flex items-center justify-between mb-3 text-sm ">
          <span>{date}</span>
          <div className="flex items-center gap-1 border-2 rounded-2xl p-1 bg-[#E5E5E5]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span>{questions}/{duration}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">{currentPrice}</span>
            <span className="text-gray-400 line-through text-sm">{originalPrice}</span>
          </div>
          <Button variant="primary" size="sm">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestSeriesCard;

