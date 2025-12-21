import footerImage from "@/assets/images/Footer.png";
import performImage from "@/assets/images/perform.png";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";


const Footer = () => {
  return (
    <section className="relative bg-[#154033] min-h-screen flex flex-col px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16 text-white font-sans overflow-hidden">
      {/* Main content flex container */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-0 max-w-7xl mx-auto w-full">
        {/* Left text and button */}
        <div className="w-full lg:w-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[74px] font-bold leading-tight mb-4 sm:mb-6">
            Your growth is <br />
            just one call <br />
            away!
          </h1>
          <button 
            className="flex justify-center items-center border-[1.5px] border-[#8AF135] bg-[#8AF135] text-black font-semibold text-sm sm:text-base hover:opacity-90 transition px-4 sm:px-5 lg:px-[21.5px] py-2.5 sm:py-3 lg:py-[13.45px] lg:pb-[11.65px]"
          >
            Book a demo
          </button>
        </div>

        {/* Right isometric image */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
          <img
            src={footerImage}
            alt="Footer illustration"
            className="max-w-[280px] sm:max-w-[340px] lg:max-w-[424px] w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Navigation and bottom area */}
      <div className="max-w-7xl mx-auto w-full mt-8 sm:mt-12 lg:mt-16 border-b-[2px] border-white/80 pb-4 sm:pb-6 flex flex-col lg:flex-row justify-center items-center text-white text-sm font-normal tracking-wide">
        <nav 
          className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 lg:gap-10 text-white text-sm sm:text-base lg:text-[20px] font-normal not-italic leading-normal"
          style={{ fontFamily: 'Epilogue, sans-serif', letterSpacing: '0.4px' }}
        >
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            Home
          </a>
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            About
          </a>
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            Project
          </a>
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            why us
          </a>
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            services
          </a>
          <a href="#" className="hover:text-[#82D83A] transition whitespace-nowrap">
            Contact
          </a>
        </nav>
      </div>

      {/* Social icons container white bg - below border, right aligned */}
      <div className="max-w-7xl mx-auto w-full flex justify-center lg:justify-end mt-4 sm:mt-6">
        <div className="flex bg-white text-[#154033] drop-shadow-[0_0_1px_rgba(0,0,0,0.15)] rounded-sm px-3 sm:px-4 py-1 gap-4 sm:gap-6 items-center cursor-pointer shrink-0">
          <a aria-label="YouTube" href="#" className="hover:text-[#82D83A]">
            <Youtube size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a aria-label="Twitter" href="#" className="hover:text-[#82D83A]">
            <Twitter size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a aria-label="LinkedIn" href="#" className="hover:text-[#82D83A]">
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a aria-label="Facebook" href="#" className="hover:text-[#82D83A]">
            <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="max-w-7xl mx-auto w-full mt-4 sm:mt-6 text-xs sm:text-sm lg:text-[14px] font-bold tracking-wide text-center lg:text-left">
        © 2025 PERFORM100X. ALL RIGHTS RESERVED.
      </div>

      {/* Large faint image behind bottom */}
      <img
        src={performImage}
        alt="Perform100x"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-30 sm:opacity-40 w-full max-w-[800px] sm:max-w-[1200px] lg:max-w-[1460px] h-auto object-contain"
        aria-hidden="true"
      />
    </section>
  );
};

export default Footer;


