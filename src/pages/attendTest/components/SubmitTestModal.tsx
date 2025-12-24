import React from 'react';
import { Modal } from '@/components';
import { Button } from '@/components';

interface SubmitTestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

const SubmitTestModal: React.FC<SubmitTestModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isSubmitting = false,
}) => {
  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={false}
      size="md"
      className="p-0 bg-[#F3F3F3]"
    >
      <div className="text-center">
        <div className="bg-[#F3F3F3] p-8 pb-4 ">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              {/* Outer circle */}
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              {/* Filled quarter arc */}
              <path
                d="M 12 2 A 10 10 0 0 1 22 12"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

          {/* Heading */}
       
        </div>


        <h2 className="text-xl font-bold text-gray-900 mb-3 pt-4" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Are you sure you want to submit the test?
          </h2>

          {/* Subtext */}
          <p className="text-gray-600" style={{ fontFamily: 'General Sans, sans-serif' }}>
            Once submitted, your answers cannot be edited
          </p>

        {/* Buttons Section */}
        <div className=" pt-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            variant="secondary"
            size="md"
            onClick={onClose}
            className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            Continue Test
          </Button>
          <Button
            variant="primary"
            size="md"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full sm:w-auto bg-[#4B9C91] hover:bg-[#3a7a70] text-white disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Test →'}
          </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SubmitTestModal;

