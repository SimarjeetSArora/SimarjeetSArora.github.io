// components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <nav className="max-w-380 mx-auto flex items-center px-6 py-4 text-white dark:text-white">
        
        <div className="text-3xl md:text-5xl font-extrabold tracking-wide text-white dark:text-white hover:text-[#6a569e] transition duration-300">
          <a href="#home" className="no-underline cursor-pointer">Simar</a>
        </div>

        <ul className="flex ml-auto space-x-4 text-sm font-semibold">
          {["about", "experience", "skills", "projects", "education", "contact"].map((section, index) => (
            <li
              key={section}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "both" }}
            >
              <a
                href={`#${section}`}
                className="group inline-block px-4 py-2 rounded-full border border-[#6a569e]/30 bg-[#6a569e]/10 dark:bg-[#6a569e]/20 hover:bg-[#6a569e] hover:text-white transform transition-all duration-300 hover:scale-105 shadow-sm"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
