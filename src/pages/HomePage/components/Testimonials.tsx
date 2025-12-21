const Testimonials = () => {
  const testimonials = [
    {
      name: 'kevin',
      company: 'London Examinations Board',
      content: 'Perform100x not only drove growth but also guided us in setting up a complete and effective sales system.',
      avatarImage: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
    },
    {
      name: 'Angelica',
      company: 'Rcu',
      content: 'The Perform100x team is flexible, easy to work with, and delivered high-quality work. We\'re extremely pleased with the overall experience.',
      avatarImage: 'https://i.pravatar.cc/150?img=45',
      rating: 5,
    },
    {
      name: 'Ar karthik j',
      company: 'Verdant Space Studio',
      content: 'Perform100x helped us triple our lead volume in just two months through a highly effective optimization approach and close collaboration with our internal team.',
      avatarImage: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
    },
  ]

  const renderStars = (_rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div
      className="flex flex-col items-start gap-3 bg-[#F5FBFF] rounded-xl border border-[#345FFB] hover:border-blue-300/80 transition-all duration-300 w-full max-w-[608px]"
      style={{ padding: '16px 24px' }}
    >
      <div className="flex items-center gap-0.5">
        {renderStars(testimonial.rating)}
      </div>
      <p className="text-gray-800 text-base lg:text-lg leading-relaxed font-normal">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-3">
        <img 
          src={testimonial.avatarImage} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex gap-3 flex-row items-center">
          <p className="font-bold text-gray-900 text-base">{testimonial.name}</p>
          <p className="text-base text-gray-500">{testimonial.company}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Testimonials
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We partnered with a team that seamlessly united creativity, data, and technology to build precise, scalable growth engines for our brand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center">
          <TestimonialCard testimonial={testimonials[2]} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
