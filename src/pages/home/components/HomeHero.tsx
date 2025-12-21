import { useMemo } from 'react';
import { generateGridBoxes } from '@/utils/gridBoxes';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

interface HomeHeroProps {
  title?: string;
  subtitle?: string;
}

const HomeHero: React.FC<HomeHeroProps> = () => {
  const filledBoxes = useMemo(() => {
    return generateGridBoxes({
      gridSize: 80,
      boxPadding: 0,
      columnsToFill: [2, 4, 7, 9, 12],
      rowsToFill: [3, 5, 8, 10, 13, 15],
      maxRows: 15,
      maxCols: 20,
      boxesPerColumn: 2,
      boxesPerRow: 2,
    });
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top right, #0a1929 0%, #0f2d4a 60%, #0d9488 98%, #14b8a6 100%)',
        }}
      ></div>
      
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1.5px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      ></div>

      {filledBoxes.map((box) => (
        <div
          key={box.id}
          className="absolute bg-white/20 rounded-sm"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
            opacity: box.opacity,
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(1px)',
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[90vh] flex items-center justify-center py-20 md:py-0">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-between gap-8 lg:gap-12">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
