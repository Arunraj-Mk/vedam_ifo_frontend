import React from 'react';
import DashboardBadge from '@/components/DashboardBadge';

interface ProfileKPIsProps {
  testsTaken?: number;
  joinedAt?: string;
  planStatus?: 'Active' | 'Inactive';
  planName?: string;
}

const ProfileKPIs: React.FC<ProfileKPIsProps> = ({
  testsTaken = 5,
  joinedAt = '15 Nov 2025',
  planStatus = 'Active',
  planName = 'Premium Access',
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Tests Taken */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Tests Taken</p>
        <p className="text-2xl font-semibold text-gray-900">{testsTaken}</p>
      </div>

      {/* Joined at */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Joined at</p>
        <p className="text-2xl font-semibold text-gray-900">{joinedAt}</p>
      </div>

      {/* Current Plan */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <p className="text-sm text-gray-600 mb-1">Current Plan</p>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-2xl font-semibold text-gray-900">{planName}</p>
          <DashboardBadge
            label={planStatus}
            variant="success"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileKPIs;


