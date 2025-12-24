import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Modal from '@/components/Modal';
import LoginInput from '@/pages/login/components/LoginInput';
import Button from '@/components/Button';

interface PersonalInformationFormData {
  email: string;
  phoneNumber: string;
  classGrade: string;
  schoolName: string;
  schoolId: string;
}

interface PersonalInformationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<PersonalInformationFormData>;
  onSave?: (data: PersonalInformationFormData) => void;
  isSaving?: boolean;
}

const PersonalInformationModal: React.FC<PersonalInformationModalProps> = ({
  isOpen,
  onClose,
  initialData = {
    email: 'rahul.sharma@example.com',
    phoneNumber: '+91 9876543210',
    classGrade: 'Grade 10',
    schoolName: 'Delhi Public School',
    schoolId: 'SCH001',
  },
  onSave,
  isSaving = false,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInformationFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: initialData.email || '',
      phoneNumber: initialData.phoneNumber || '',
      classGrade: initialData.classGrade || '',
      schoolName: initialData.schoolName || '',
      schoolId: initialData.schoolId || '',
    },
  });

  const onSubmit = (data: PersonalInformationFormData) => {
    onSave?.(data);
    // Don't close modal here - let parent handle it after successful save
  };

  const classGradeOptions = [
    'Grade 1',
    'Grade 2',
    'Grade 3',
    'Grade 4',
    'Grade 5',
    'Grade 6',
    'Grade 7',
    'Grade 8',
    'Grade 9',
    'Grade 10',
    'Grade 11',
    'Grade 12',
  ];

  

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Personal Information" size="md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
          name="phoneNumber"
          control={control}
          rules={{
            required: 'Phone number is required',
            pattern: {
              value: /^\+?[0-9]{10,15}$/,
              message: 'Invalid phone number',
            },
          }}
          render={({ field }) => (
            <LoginInput
              label="Phone Number*"
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
          name="classGrade"
          control={control}
          rules={{
            required: 'Class / Grade is required',
          }}
          render={({ field }) => (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Class / Grade*
              </label>
              <select
                {...field}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#02947B] focus:border-transparent"
              >
                <option value="">Select class/grade</option>
                {classGradeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.classGrade && (
                <p className="mt-1 text-sm text-red-600">{errors.classGrade.message}</p>
              )}
            </div>
          )}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            School Name
          </label>
          <input
            type="text"
            value={initialData.schoolName || ''}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />
          <p className="mt-1 text-xs text-gray-500">School name cannot be changed</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            School ID
          </label>
          <input
            type="text"
            value={initialData.schoolId || ''}
            disabled
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
          />
          <p className="mt-1 text-xs text-gray-500">School ID cannot be changed</p>
        </div>

        <div className="pt-4">
            <div className=''>

            </div>
          <Button
            type="submit"
            variant="primary"
            size="md"
            fullWidth
            disabled={isSaving}
            className='bg-[#02947B] disabled:opacity-50'
          >
            {isSaving ? 'Saving...' : 'Save Details'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default PersonalInformationModal;

