import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import ArrowButton from '@/components/ArrowButton';

const LoginCard: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Basic validation
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full sm:min-w-[380px] lg:max-w-[645.67px] bg-white rounded-[21.74px] lg:min-h-[440.96px] py-[38.04px] px-6 sm:px-12 lg:px-[96.74px] flex flex-col gap-[29.35px]"
    >
      {/* Card Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-normal leading-[120%] capitalize text-black font-integral">
          Welcome Back
        </h2>
        <p
          className="text-[15.22px] leading-[21.74px] text-[#4A5565]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        > 
          Log in to access your test series and track your progress
        </p>
      </div>

      {/* Form Fields - Vertical gap: 29.35px */}
      <div className="flex flex-col gap-[29.35px]">
        <LoginInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        <LoginInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />
      </div>
      {/* Helper Text */}
      <p className="text-[15.22px] leading-[21.74px] text-black text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
        Don't have an account?{' '}
        <Link
          to="/register"
          className="text-[#209181] font-semibold cursor-pointer hover:underline"
        >
          Get started Now
        </Link>
      </p>
      {/* Submit Button Group */}
      <div className="flex items-center justify-start gap-3 sm:gap-4">
        <ArrowButton
          text="Log in"
          bgColor="#00B512"
          textColor="#F9FAFB"
          arrowBgColor="#FBF9F1"
          arrowColor="#000000"
          onClick={() => {
            const form = document.querySelector('form');
            if (form) {
              form.requestSubmit();
            }
          }}
          className="self-start font-semibold text-[17.39px] leading-[150%] font-poppins h-[56.52px] min-w-[194.57px] px-[26.09px] py-[26.09px] rounded-[47.83px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:ring-offset-2"
          size="lg"
        />
      </div>

    
    </form>
  );
};

export default LoginCard;
