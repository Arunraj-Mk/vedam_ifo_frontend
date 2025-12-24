import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from '@/pages/login/components/LoginInput';
import ArrowButton from '@/components/ArrowButton';

const GetStartedCard: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [studentClass, setStudentClass] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: handle get started submission
    // eslint-disable-next-line no-console
    console.log('Get started form:', { fullName, schoolName, email, password, studentClass });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:min-w-[380px] lg:max-w-[645.67px] bg-white rounded-[21.74px] lg:min-h-[440.96px] py-[38.04px] px-6 sm:px-12 lg:px-[96.74px] flex flex-col gap-[29.35px]"
    >
      {/* Card Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-normal leading-[120%] capitalize text-black font-integral">
          Get Start Now
        </h2>
        <p
          className="text-[15.22px] leading-[21.74px] text-[#4A5565]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Fill out the form below and we&apos;ll get back to you shortly.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-[29.35px]">
        <LoginInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <LoginInput
          label="School Name"
          type="text"
          placeholder="Enter your school name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />

        <LoginInput
          label="Email Address"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LoginInput
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Your Class Select */}
        <div className="w-full flex flex-col gap-0">
          <label
            htmlFor="studentClass"
            className="block font-normal text-[15.22px] leading-[21.74px] text-[#4A5565] mb-1.5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Your Class
          </label>
          <select
            id="studentClass"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="w-full h-[44.57px] px-[13.04px] py-[5.43px] rounded-[8.7px] border-[0.87px] border-[#E5E7EB] bg-[#F3F3F3] text-[15.22px] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none focus:bg-white transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <option value="" disabled>
              Select your class
            </option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
          </select>
        </div>
      </div>

      {/* Footer Text */}
      <p
        className="text-[15.22px] leading-[21.74px] text-black text-left"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Already have an account?{' '}
        <Link
          to="/login"
          className="font-semibold hover:underline"
        >
          Log in here
        </Link>
      </p>

      {/* Submit Button */}
      <div className="flex items-center justify-start">
        <ArrowButton
          text="Get Started"
          bgColor="#00B512"
          textColor="#F9FAFB"
          arrowBgColor="#FBF9F1"
          arrowColor="#000000"
          type="submit"
          className="self-start font-semibold text-[17.39px] leading-[150%] font-poppins h-[56.52px] min-w-[194.57px] px-[26.09px] py-[26.09px] rounded-[47.83px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:ring-offset-2"
          size="lg"
        />
      </div>


    </form>
  );
};

export default GetStartedCard;


