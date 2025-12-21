const FeaturesSection = () => {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized platform.',
      icon: '⚡',
    },
    {
      title: 'Secure & Reliable',
      description: 'Your data is protected with enterprise-grade security measures.',
      icon: '🔒',
    },
    {
      title: 'Easy to Use',
      description: 'Intuitive interface designed for users of all skill levels.',
      icon: '✨',
    },
    {
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock support.',
      icon: '💬',
    },
    {
      title: 'Scalable',
      description: 'Grows with your business, from startup to enterprise scale.',
      icon: '📈',
    },
    {
      title: 'Analytics',
      description: 'Track your performance with detailed analytics and insights.',
      icon: '📊',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to boost your performance and achieve your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
