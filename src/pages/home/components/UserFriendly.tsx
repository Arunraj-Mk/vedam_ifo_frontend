import userFriendlyImage from '@/assets/images/userFriendly.png';

const UserFriendly = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  border-2 border rounded-lg">
      <div className="flex items-center justify-between bg-white rounded-lg ">
        <img 
          src={userFriendlyImage} 
          alt="User Friendly Dashboard Illustration" 
          className="w-[380px] h-[380px] object-cover rounded-lg"
        />
      </div>
      
      <div className="bg-white rounded-lg p-4 md:p-8 flex flex-col justify-center ">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl text-black mb-4 ">
          User-Friendly Dashboard
        </h3>
        <p className="text-gray-600 text-base md:text-lg max-w-md">
          Navigate Easily Through Tests, Reports And Profile Settings.
        </p>
      </div>
    </div>
  );
};

export default UserFriendly;
