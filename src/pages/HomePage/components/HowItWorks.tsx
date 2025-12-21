import ziczac from '@/svg/ziczac.svg'
import bag from '@/svg/bag.svg'
import network from '@/svg/network.svg'
import cart from '@/svg/cart.svg'
import HowItWorksMobile from './HowItWorksMobile'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      description: 'We start by understanding your current marketing performance. We audit what\'s working, what\'s not, and study your market, competitors, and audience to find real growth opportunities.',
      icon: bag,
      // Change these values to position icon 1
      top: '46%',
      left: '12%',
    },
    {
      number: '2',
      description: 'Based on insights, we design a custom marketing system. This includes strategy, automation, and AI-driven optimizations to build a smooth, scalable growth engine.',
      icon: network,
      // Change these values to position icon 2
      top: '49%',
      left: '44%',
    },
    {
      number: '3',
      description: 'We launch, track, and continuously improve performance. What works is scaled, what doesn\'t is fixed—driving consistent and measurable growth.',
      icon: cart,
      // Change these values to position icon 3
      top: '46%',
      right: '19%',
    },
  ]

  return (
    <>
      {/* Mobile View - Separate Component */}
      <div className="md:hidden">
        <HowItWorksMobile />
      </div>

      {/* Desktop View - Original Code Unchanged */}
      <section className="hidden md:block py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#292929] mb-4">
            How it works
          </h2>
          <p className="text-lg lg:text-xl text-[#292929] max-w-2xl mx-auto">
            We help ambitious brands unite creativity, data, and technology to build precise, scalable growth engines.
          </p>
        </div>

        {/* Steps with Wavy Line */}
        <div className="relative max-w-6xl mx-auto">
          {/* Container for wavy line and steps */}
          <div className="relative w-full" style={{ minHeight: '600px' }}>
            {/* Wavy Line SVG - positioned absolutely */}
            <img 
              src={ziczac} 
              alt="Wavy line" 
              className="w-full h-auto absolute top-1/2 left-0 -translate-y-1/2"
              style={{ 
                filter: 'drop-shadow(0 0 8px rgba(42, 115, 254, 0.5))',
                maxHeight: '300px'
              }}
            />
        
            {/* Step 1 - Icon */}
            <div 
              className="absolute flex flex-col items-center justify-center h-[290px] "
              style={{
                top: steps[0].top,
                left: steps[0].left,
                // border: '2px solid red',
                transform: 'translate(-50%, -50%)'
              }}
            >

                  <div className="text-center mt-4">
                    <div className='flex items-baseline justify-end gap-2 '>
<h3 className='font-semibold'>Audit & Market Clarity</h3>

                    <div className="text-7xl lg:text-8xl font-bold text-gray-200 mb-3 leading-none">
              {steps[0].number}
                </div>
                    </div>
                  
                <p className="text-sm text-gray-600 max-w-xs">{steps[0].description}</p>
              </div>


              <img 
                src={steps[0].icon} 
                alt="Step 1 icon"
                className="w-16 h-20 lg:w-20 lg:h-24"
              />
            
            </div>

            {/* Step 2 - Icon */}
            <div 
              className="absolute flex flex-col items-center justify-center"
              style={{
                top: steps[1].top,
                left: steps[1].left,
                // border: '2px solid red',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <img 
                src={steps[1].icon} 
                alt="Step 2 icon"
                className="w-16 h-20 lg:w-20 lg:h-24"
              />
              <div className="text-center mt-4">

             
              <div className='flex items-baseline justify-end gap-2 '>
              <h3 className='font-semibold'>Audit & Market Clarity</h3>

<div className="text-7xl lg:text-8xl font-bold text-gray-200 mb-3 leading-none">
{steps[1].number}
  </div>
             </div>
            
                <p className="text-sm text-gray-600 max-w-xs">{steps[1].description}</p>
              </div>
            </div>

            {/* Step 3 - Icon */}
            <div 
              className="absolute flex flex-col items-center  justify-center"
              style={{
                top: steps[2].top,
                // border: '2px solid red',
                right: steps[2].right,
                transform: 'translate(50%, -50%)'
              }}
            >

<div className="text-center mt-4  h-[250px]">


<div className='flex items-baseline justify-end gap-2 '>
<h3 className='font-semibold'>Audit & Market Clarity</h3>

<div className="text-7xl lg:text-8xl font-bold text-gray-200 mb-3 leading-none">
              {steps[2].number}
 </div>
</div>

                <p className="text-sm text-gray-600 max-w-xs">{steps[2].description}</p>
              </div>


              <img 
                src={steps[2].icon} 
                alt="Step 3 icon"
                className="w-16 h-20 lg:w-20 lg:h-24"
              />
              
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default HowItWorks