import { useState } from "react";
import { ChevronDown, Navigation } from "lucide-react";

interface NavigationSection {
  id: string;
  label: string;
  number: string;
}

interface QuickNavigationProps {
  sections: NavigationSection[];
  color?: "purple" | "pink" | "cyan";
}

export default function QuickNavigation({ sections, color = "purple" }: QuickNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const colorClasses = {
    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
      hover: "hover:bg-purple-500/20",
      activeBg: "bg-purple-500/20",
    },
    pink: {
      bg: "bg-pink-500/10",
      border: "border-pink-500/30",
      text: "text-pink-400",
      hover: "hover:bg-pink-500/20",
      activeBg: "bg-pink-500/20",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      text: "text-cyan-400",
      hover: "hover:bg-cyan-500/20",
      activeBg: "bg-cyan-500/20",
    },
  };

  const colors = colorClasses[color];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-24 left-8 z-40 hidden lg:block">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-lg ${colors.bg} ${colors.border} border backdrop-blur-md ${colors.text} font-medium transition-all ${colors.hover} shadow-lg`}
        >
          <Navigation className="w-4 h-4" />
          <span>Quick Nav</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[-1]"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <div className={`absolute top-full left-0 mt-2 w-72 rounded-lg ${colors.bg} ${colors.border} border backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200`}>
              <div className="max-h-[70vh] overflow-y-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${colors.hover} border-b border-white/5 last:border-b-0`}
                  >
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full ${colors.activeBg} ${colors.text} flex items-center justify-center text-xs font-bold`}>
                      {section.number}
                    </span>
                    <span className="text-sm text-white font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
