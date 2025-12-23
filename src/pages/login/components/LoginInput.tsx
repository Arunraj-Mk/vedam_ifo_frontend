import React from 'react';

export interface LoginInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const LoginInput: React.FC<LoginInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const labelId = `${inputId}-label`;

  return (
    <div className="w-full flex flex-col gap-0">
      <label
        htmlFor={inputId}
        id={labelId}
        className="block font-normal text-[15.22px] leading-[21.74px] text-[#4A5565] mb-1.5"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full h-[44.57px] px-[13.04px] py-[5.43px] rounded-[8.7px]
          border-[0.87px] border-[#E5E7EB] bg-[#F3F3F3]
          text-[15.22px] placeholder:text-[#717182]
          focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none focus:bg-white
          transition-all
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `.trim()}
        style={{ fontFamily: 'Inter, sans-serif' }}
        aria-labelledby={labelId}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-sm text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default LoginInput;

