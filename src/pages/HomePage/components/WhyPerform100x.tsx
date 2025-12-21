import { useState } from 'react'
import { Check, Phone, Mail, Shield, CreditCard } from 'lucide-react'
import whyperformx from '@/svg/whyperformx.svg'

const WhyPerform100x = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    comments: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const reasons = [
    { text: 'Strategic, not reactive Growth that lasts.' },
    { text: 'Creative, but measured Ideas that earn their place.' },
    { text: 'Technology as leverage Not as illusion.' },
    { text: 'Execution with integrity Performance over promises.' },
  ]

  return (
    <section className="py-2 lg:py-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Why Perform100x */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Why Perform100x
            </h2>

            {/* Bullet Points */}
            <div className="space-y-5 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {reason.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Illustration - Deliverability SVG */}
            <div className="relative p-4  border-b border-[#2B60EC] rounded-xl inline-block">
              <img src={whyperformx} alt="Deliverable" className="w-full max-w-[500px] h-auto" />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className="bg-white rounded-2xl p-8 relative"
            style={{
              border: '1px solid #B7B7B7',
              background:"#ffffff",
              borderRadius: '20px',
            }}
          >
            {/* Limited Spot Badge */}
            <div className="absolute top-2 right-6">
              <span 
                style={{
                  color: '#1DA84B',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '135%',
                  letterSpacing: '0.14px',
                  borderRadius: "30px",
background:" rgba(225, 255, 222, 0.57)",
padding:"5px 14px"
                }}
              >
                Limited Spot available
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              Ready to grow<br />with intention?
            </h3>
            <p className="text-gray-600 mb-8">
              Book a free 30-minute strategy. no pitch, just value.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="form-input w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '135%',
                    letterSpacing: '0.14px',
                  }}
                />
              </div>

              {/* Phone and Email - Side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="form-input w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '135%',
                      letterSpacing: '0.14px',
                    }}
                  />
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email address"
                    className="form-input w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: '135%',
                      letterSpacing: '0.14px',
                    }}
                  />
                </div>
              </div>

              {/* Comments */}
              <div>
                <input
                  type="text"
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  placeholder="Comments"
                  className="form-input w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '135%',
                    letterSpacing: '0.14px',
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white font-semibold transition-colors duration-300 hover:opacity-90 whitespace-nowrap"
                style={{
                  display: 'flex',
                  padding: '19px 40px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '11px',
                  background: '#2B60EC',
                }}
              >
                Get your Free strategy Session
              </button>
            </form>

            {/* Placeholder styling */}
            <style>{`
              .form-input::placeholder {
                color: #939393;
                font-family: Inter, sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 135%;
                letter-spacing: 0.14px;
              }
            `}</style>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Bank level Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#2B60EC]" />
                <span>No Credit card Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyPerform100x
