import React from 'react';

interface PersonalInfoCardProps {
  email?: string;
  phoneNumber?: string;
  schoolName?: string;
  classGrade?: string;
  schoolId?: string;
  onEdit?: () => void;
}

const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  email = 'rahul.sharma@example.com',
  phoneNumber = '+91 9876543210',
  schoolName = 'Delhi Public School',
  classGrade = 'Grade 10',
  schoolId = 'SCH001',
  onEdit,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        <button
          onClick={onEdit}
          className="text-[#02947B] hover:text-[#027a6a] font-medium text-sm transition-colors"
        >
          Edit Info
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Email</label>
          <p className="text-gray-900 font-medium">{email}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Phone Number</label>
          <p className="text-gray-900 font-medium">{phoneNumber}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">School Name</label>
          <p className="text-gray-900 font-medium">{schoolName}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Class / Grade</label>
          <p className="text-gray-900 font-medium">{classGrade}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">School ID</label>
          <p className="text-gray-900 font-medium">{schoolId}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoCard;

