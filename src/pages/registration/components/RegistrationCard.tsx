import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginInput from '@/pages/login/components/LoginInput';
import ArrowButton from '@/components/ArrowButton';

interface RegistrationFormData {
  studentName: string;
  email: string;
  classGrade: string;
  phoneNumber: string;
  schoolName: string;
}

const RegistrationCard: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    mode: 'onBlur',
    defaultValues: {
      studentName: '',
      email: '',
      classGrade: '',
      phoneNumber: '',
      schoolName: '',
    },
  });

  const onSubmit = (data: RegistrationFormData) => {
    // TODO: Implement registration logic
    console.log('Registration data:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sm:min-w-[380px] lg:max-w-[645.67px] bg-white rounded-[21.74px]  py-[38.04px] px-4 sm:px-12 lg:px-[96.74px] flex flex-col gap-[29.35px]"
    >
      {/* Card Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl sm:text-2xl lg:text-[26px] font-normal leading-[120%] capitalize text-black font-integral">
          Create Account
        </h2>
        <p
          className="text-[15.22px] leading-[21.74px] text-[#4A5565]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Fill in your details to get started
        </p>
      </div>

      {/* Form Fields - Vertical gap: 29.35px */}
      <div className="flex flex-col gap-[29.35px]">
        <Controller
          name="studentName"
          control={control}
          rules={{
            required: 'Student name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="Student Name*"
              type="text"
              placeholder="Enter your full name"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.studentName?.message}
            />
          )}
        />

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
              label="Email*"
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
          name="classGrade"
          control={control}
          rules={{
            required: 'Class/Grade is required',
          }}
          render={({ field }) => (
            <LoginInput
              label="Class / Grade*"
              type="text"
              placeholder="Enter your class or grade"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.classGrade?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="Phone Number *"
              type="tel"
              placeholder="Enter your phone number"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.phoneNumber?.message}
            />
          )}
        />

        <Controller
          name="schoolName"
          control={control}
          rules={{
            required: 'School name is required',
            minLength: {
              value: 2,
              message: 'School name must be at least 2 characters',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="School Name *"
              type="text"
              placeholder="Enter your school name"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.schoolName?.message}
            />
          )}
        />
      </div>

      {/* Helper Text */}
      <p
        className="text-[15.22px] leading-[21.74px] text-black text-left"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        Already have an account?{' '}
        <Link
          to="/login"
          className="text-[#209181] font-semibold cursor-pointer hover:underline"
        >
          Log in
        </Link>
      </p>

      {/* Submit Button Group */}
      <div className="flex items-center justify-start gap-3 sm:gap-4">
        <ArrowButton
          text="Create Account"
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

export default RegistrationCard;

