import Simar from '../assets/simar.svg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center px-6 md:px-70 bg-gradient-to-b from-[rgba(20,15,30,0.85)] via-black to-black text-white overflow-hidden"
    >
      {/* Left: Text Section inside container */}
      <div className="z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full h-full">
        <div className="space-y-6 animate-fade-slide-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I’m <span className="text-[#b9a6f1]">Simarjeet Singh Arora</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-md">
            A passionate developer driven by creativity, curiosity, and clean
            design. I build modern, purposeful applications that focuses on solving real world problems.
          </p>
        </div>
      </div>

      {/* Right: Full-screen Image Positioned to Right */}
      <div className="absolute right-0 top-4 h-full z-0">
        <img
          src={Simar}
          alt="Simarjeet Singh"
          className="h-full object-cover"
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-slide-left {
          0% {
            opacity: 0;
            transform: translateX(-40px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-slide-left {
          animation: fade-slide-left 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
