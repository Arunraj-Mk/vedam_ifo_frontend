const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Perform100x has transformed how we work. Our productivity increased by 300% in just the first month!',
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      content: 'The best platform I\'ve ever used. It\'s intuitive, fast, and has everything we need in one place.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      content: 'Outstanding service and support. The team is always there when we need them. Highly recommended!',
      avatar: '👩‍💼',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4 text-center">{testimonial.avatar}</div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
