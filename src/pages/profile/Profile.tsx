import React, { useState } from 'react';
import ProfileHero from './components/ProfileHero';
import ProfileKPIs from './components/ProfileKPIs';
import PersonalInfoCard from './components/PersonalInfoCard';
import AccountBillingCard from './components/AccountBillingCard';
import PersonalInformationModal from './components/PersonalInformationModal';

const ProfilePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    email: 'rahul.sharma@example.com',
    phoneNumber: '+91 9876543210',
    schoolName: 'Delhi Public School',
    classGrade: 'Grade 10',
    schoolId: 'SCH001',
  });


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
    setPersonalInfo(data);
    // TODO: Save to API
    console.log('Saved personal info:', data);
  };

  return (
    <div className="p-6">
      {/* Hero Section - Green Banner */}
      <ProfileHero
        studentName="Rahul Sharma"
        studentId="STU2024001"
        badges={[
          {
            label: 'Top Performer',
            variant: 'info',
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ),
          },
          { label: '5 Tests Completed', variant: 'default' },
          { label: 'Payment Completed', variant: 'success' },
        ]}
      />

      {/* KPI Cards */}
      <ProfileKPIs
        testsTaken={5}
        joinedAt="15 Nov 2025"
        planStatus="Active"
        planName="Premium Access"
      />

      {/* Personal Information and Account & Billing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <PersonalInfoCard
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          schoolName={personalInfo.schoolName}
          classGrade={personalInfo.classGrade}
          schoolId={personalInfo.schoolId}
          onEdit={handleEditInfo}
        />
        <AccountBillingCard
          planDetails="Unlimited test access"
          paymentDate="15 Nov 2025"
          transactionId="TXN20251115001234"
          amountPaid="₹350"
          paymentMethod="Credit Card (**** 3456)"
          planStatus="Active"
          planName="Premium Access"
        />
      </div>

     

      {/* Personal Information Modal */}
      <PersonalInformationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={personalInfo}
        onSave={handleSaveInfo}
      />
    </div>
  );
};

export default ProfilePage;

