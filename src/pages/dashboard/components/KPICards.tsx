import React from 'react';

export interface KPIData {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}


interface KPICardsProps {
  data: KPIData[];
}

const KPICards: React.FC<KPICardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {data.map((kpi, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
              <p className="text-2xl font-semibold text-gray-900">{kpi.value}</p>
            </div>
            {kpi.icon && (
              <div className="w-12 h-12 bg-[#00B512]/10 rounded-full flex items-center justify-center text-[#00B512]">
                {kpi.icon}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPICards;


