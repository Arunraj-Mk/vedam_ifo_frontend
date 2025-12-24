import React, { useState, useMemo } from 'react';
import ProfileHero from './components/ProfileHero';
import ProfileKPIs from './components/ProfileKPIs';
import PersonalInfoCard from './components/PersonalInfoCard';
import AccountBillingCard from './components/AccountBillingCard';
import PersonalInformationModal from './components/PersonalInformationModal';
import {
  useStudentProfile,
  useUpdateStudentProfile,
  useMyPerformanceSummary,
} from '@/hooks/useStudents';

const ProfilePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fetch student profile data (includes payment info)
  const { data: profileData, isLoading: profileLoading } = useStudentProfile();
  const { data: performanceData } = useMyPerformanceSummary();
  const { mutate: updateProfile, isPending: isUpdating } = useUpdateStudentProfile();

  // Extract profile information
  const profile = profileData?.data;
  const performance = performanceData?.data;

  // Format date
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Get badges for profile hero
  const badges = useMemo(() => {
    const badgeList = [];
    
    if (performance?.averagePercentage && performance.averagePercentage >= 80) {
      badgeList.push({
        label: 'Top Performer',
        variant: 'info' as const,
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ),
      });
    }
    
    if (performance?.completedAttempts) {
      badgeList.push({
        label: `${performance.completedAttempts} Test${performance.completedAttempts !== 1 ? 's' : ''} Completed`,
        variant: 'default' as const,
      });
    }
    
    if (profile?.paymentStatus === 'PAID') {
      badgeList.push({
        label: 'Payment Completed',
        variant: 'success' as const,
      });
    }
    
    return badgeList;
  }, [performance, profile]);

  const handleEditInfo = () => {
    setIsModalOpen(true);
  };

  const handleSaveInfo = (data: {
    email: string;
    phoneNumber: string;
    classGrade: string;
    schoolName: string;
    schoolId: string;
  }) => {
    updateProfile(
      {
        email: data.email,
        phone: data.phoneNumber,
        classGrade: data.classGrade,
      },
      {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      }
    );
  };

  if (profileLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-32 bg-gray-200 rounded-lg"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-64 bg-gray-200 rounded"></div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Hero Section - Green Banner */}
      <ProfileHero
        studentName={profile?.name || 'Student'}
        studentId={profile?.studentCode || 'N/A'}
        badges={badges}
      />

      {/* KPI Cards */}
      <ProfileKPIs
        testsTaken={performance?.completedAttempts || 0}
        joinedAt={formatDate(profile?.createdAt)}
        planStatus={profile?.paymentStatus === 'PAID' ? 'Active' : 'Inactive'}
        planName={profile?.paymentStatus === 'PAID' ? 'Premium Access' : 'Basic Plan'}
      />

      {/* Personal Information and Account & Billing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PersonalInfoCard
          email={profile?.email || 'N/A'}
          phoneNumber={profile?.phone || 'N/A'}
          schoolName={profile?.schoolName || 'N/A'}
          classGrade={profile?.classGrade || 'N/A'}
          schoolId={profile?.schoolId || 'N/A'}
          onEdit={handleEditInfo}
        />
        <AccountBillingCard
          planDetails="Unlimited test access"
          paymentDate={formatDate(profile?.paymentDate)}
          transactionId={profile?.studentId || 'N/A'}
          amountPaid="₹350"
          paymentMethod="Online Payment"
          planStatus={profile?.paymentStatus === 'PAID' ? 'Active' : 'Inactive'}
          planName={profile?.paymentStatus === 'PAID' ? 'Premium Access' : 'Basic Plan'}
        />
      </div>

      {/* Personal Information Modal */}
      <PersonalInformationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={{
          email: profile?.email || '',
          phoneNumber: profile?.phone || '',
          schoolName: profile?.schoolName || '',
          classGrade: profile?.classGrade || '',
          schoolId: profile?.schoolId || '',
        }}
        onSave={handleSaveInfo}
        isSaving={isUpdating}
      />
    </div>
  );
};

export default ProfilePage;
