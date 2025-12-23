import React, { useState } from 'react';
import DashboardBadge from '@/components/DashboardBadge';

interface AccountBillingCardProps {
  planDetails?: string;
  paymentDate?: string;
  transactionId?: string;
  amountPaid?: string;
  paymentMethod?: string;
  planStatus?: 'Active' | 'Inactive';
  planName?: string;
}

const AccountBillingCard: React.FC<AccountBillingCardProps> = ({
  planDetails = 'Unlimited test access',
  paymentDate = '15 Nov 2025',
  transactionId = 'TXN20251115001234',
  amountPaid = '₹350',
  paymentMethod = 'Credit Card (**** 3456)',
  planStatus = 'Active',
  planName = 'Premium Access',
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transactionId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Account & Billing</h2>

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Plan Details</label>
          <p className="text-gray-900 font-medium">{planDetails}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Payment Date</label>
          <p className="text-gray-900 font-medium">{paymentDate}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Transaction ID</label>
          <div className="flex items-center gap-2">
            <p className="text-gray-900 font-medium">{transactionId}</p>
            <button
              onClick={copyToClipboard}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Copy Transaction ID"
            >
              {copied ? (
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Amount Paid</label>
          <p className="text-gray-900 font-medium">{amountPaid}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Payment Method</label>
          <p className="text-gray-900 font-medium">{paymentMethod}</p>
        </div>
        <div>
          <label className="text-sm text-gray-500 mb-1 block">Current Plan</label>
          <div className="flex items-center gap-3">
            <p className="text-gray-900 font-medium">{planName}</p>
            <DashboardBadge
              label={planStatus}
              variant="success"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountBillingCard;

