import projectByStatus from '@/svg/projectbystatus.svg'
import perform100xLogo from '@/svg/perform100x.svg'

const ProjectBy = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div 
              className="rounded-3xl overflow-hidden"
              style={{
                background: `
                  radial-gradient(ellipse at top, rgba(138, 255, 255, 0.6) 0%, transparent 50%),
                  radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.7) 30%, transparent 60%),
                  radial-gradient(ellipse at bottom left, rgba(128, 179, 254, 0.5) 0%, transparent 50%),
                  radial-gradient(ellipse at bottom right, rgba(128, 179, 254, 0.6) 0%, transparent 50%),
                  linear-gradient(180deg, rgba(230, 250, 255, 1) 0%, rgba(200, 225, 255, 1) 100%)
                `
              }}
            >
              <img 
                src={projectByStatus} 
                alt="Projects by Status Dashboard" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Side - Logo and Text */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <div>
              <img 
                src={perform100xLogo} 
                alt="Perform 100x" 
                className="h-12 w-auto"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-6">
              <p className="text-base sm:text-lg lg:text-2xl text-[#3C3C3C] leading-relaxed">
                Real growth is not won by shouting louder or spending bigger. It is earned through clarity, connection, and consistency
              </p>
              
              <p className="text-base sm:text-lg lg:text-2xl text-[#3C3C3C] leading-relaxed">
                At <span className='font-semibold'>Perform 100X</span>, we are strategists, analysts, and creative technologists who believe growth should be quietly powerful. We use data science, design thinking, and intelligent systems to help modern brands grow with intention, not with noise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectBy
