import React, { useState } from 'react';
import LoginInput from '@/pages/login/components/LoginInput';
import ArrowButton from '@/components/ArrowButton';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement form submission
      // eslint-disable-next-line no-console
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-[20px] p-8 flex flex-col gap-6"
      style={{
        width: '541px',
        height: '784px',
        borderRadius: '20px',
        background: '#FFFFFF',
        boxShadow: `
          2px 9px 20px 0px rgba(0, 0, 0, 0.1),
          10px 36px 37px 0px rgba(0, 0, 0, 0.09),
          21px 80px 50px 0px rgba(0, 0, 0, 0.05),
          38px 142px 59px 0px rgba(0, 0, 0, 0.01),
          60px 222px 64px 0px rgba(0, 0, 0, 0)
        `,
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '168%',
        textTransform: 'capitalize'
      }}
    >
      {/* Form Header */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[120%] capitalize text-black font-integral">
          Send A Message
        </h2>
        <p
          className="text-base font-normal leading-[150%] text-[#6A7282]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Fill Out The Form Below And We'll Get Back To You Shortly.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-6">
        <LoginInput
          label="Name"
          type="text"
          name="name"
          placeholder="Joe Smith"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />

        <LoginInput
          label="Email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />

        <LoginInput
          label="Phone number"
          type="tel"
          name="phone"
          placeholder="+91 987654321"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
        />

        {/* Industry Select */}
        <div className="w-full flex flex-col gap-0">
          <label
            htmlFor="industry"
            className="block font-normal text-[15.22px] leading-[21.74px] text-[#4A5565] mb-1.5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full h-[44.57px] px-[13.04px] py-[5.43px] rounded-[8.7px] border-[0.87px] border-[#E5E7EB] bg-[#F3F3F3] text-[15.22px] focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none focus:bg-white transition-all"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <option value="">Select...</option>
            <option value="education">Education</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="w-full flex flex-col gap-0">
          <label
            htmlFor="message"
            className="block font-normal text-[15.22px] leading-[21.74px] text-[#4A5565] mb-1.5"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            minLength={10}
            className={`
              w-full min-h-[120px] px-[13.04px] py-[5.43px] rounded-[8.7px]
              border-[0.87px] border-[#E5E7EB] bg-[#F3F3F3]
              text-[15.22px] placeholder:text-[#717182]
              focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none focus:bg-white
              transition-all resize-y
              ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            `.trim()}
            style={{ fontFamily: 'Inter, sans-serif' }}
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-start">
        <ArrowButton
          text="Get start"
          bgColor="#00B512"
          textColor="#F9FAFB"
          arrowBgColor="#FBF9F1"
          arrowColor="#000000"
          type="submit"
          className="w-full sm:w-auto font-semibold text-[17.39px] leading-[150%] font-poppins h-[56.52px] min-w-[194.57px] px-[26.09px] py-[26.09px] rounded-[47.83px] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#00B512] focus:ring-offset-2"
          size="lg"
        />
      </div>
    </form>
  );
};

export default ContactForm;

