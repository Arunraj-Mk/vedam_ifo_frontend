import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';
import ArrowButton from '@/components/ArrowButton';
import { useLogin } from '@/hooks/useAuth';

interface LoginFormData {
  email: string;
  phone: string;
}

const LoginCard: React.FC = () => {
  const loginMutation = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      phone: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate({
      email: data.email,
      phone: data.phone,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
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
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be exactly 10 digits',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.phone?.message}
            />
          )}
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
          text={isSubmitting || loginMutation.isPending ? 'Logging in...' : 'Log in'}
          bgColor="#00B512"
          textColor="#F9FAFB"
          arrowBgColor="#FBF9F1"
          arrowColor="#000000"
          type="submit"
          disabled={isSubmitting || loginMutation.isPending}
          className="self-start font-semibold text-[17.39px] leading-[150%] font-poppins h-[56.52px] min-w-[194.57px] px-[26.09px] py-[26.09px] rounded-[47.83px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        />
      </div>

    
    </form>
  );
};

export default LoginCard;
