import add1 from '@/assets/images/add1.jpeg'
import add2 from '@/assets/images/add2.jpeg'
import add3 from '@/assets/images/add3.jpeg'
import add4 from '@/assets/images/add4.jpeg'
import add5 from '@/assets/images/add5.jpeg'
import add6 from '@/assets/images/add6.jpeg'
import add7 from '@/assets/images/add7.jpeg'
import add8 from '@/assets/images/add8.jpeg'



const TrustedBy = () => {
  // Logo components - styled to look like the design
  const logos = [
    {
      name: 'logoipsum1',
      element: (
        <div className="flex items-center gap-1 text-gray-400">
          <span className="text-2xl">
            <img src={add1} alt="logo" className="w-8 h-8" />
          </span>
          <span className="text-xl font-semibold">Grow</span>
        </div>
      ),
    },
    {
      name: 'logoipsum2',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <img src={add2} alt="logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">WAWU Foundation</span>
        </div>
      ),
    },
    {
      name: 'logoipsum3',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-8 h-8 border-2 border-gray-400 rounded-lg flex items-center justify-center">
            <span className="text-sm">
            <img src={add3} alt="logo" className="w-8 h-8" />

            </span>
          </div>
          <span className="text-xl font-semibold">Qwlytics</span>
        </div>
      ),
    },
    {
      name: 'logoipsum4',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <div className="w-6 h-6 bg-gray-400 rounded">
          <img src={add4} alt="logo" className="w-8 h-8" />

          </div>
          <span className="text-xl font-semibold">Karu Mitra</span>
        </div>
      ),
    },
    {
      name: 'logoipsum5',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-2xl">
          <img src={add5} alt="logo" className="w-8 h-8" />

          </span>

          <span className="text-xl font-semibold">Franchisify.in</span>
        </div>
      ),
    },
    {
      name: 'logoipsum6',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <span className="text-xl">
          <img src={add6} alt="logo" className="w-8 h-8" />

          </span>
          <span className="text-xl font-semibold">CEO2</span>
        </div>
      ),
    },
    {
      name: 'logoipsum7',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <img src={add7} alt="logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Startup TV</span>
        </div>
      ),
    },
    {
      name: 'logoipsum8',
      element: (
        <div className="flex items-center gap-2 text-gray-400">
          <img src={add8} alt="logo" className="w-8 h-8" />
          <span className="text-xl font-semibold">Study in bangalore.com</span>
        </div>
      ),
    },
  ]

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos]

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-lg ">
            <span className="font-bold">Trusted</span> by growing companies
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="flex animate-scroll">
          {allLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 lg:mx-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {logo.element}
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default TrustedBy
