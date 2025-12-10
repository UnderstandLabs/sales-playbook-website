interface SectionNumberProps {
  number: string;
  color?: "purple" | "cyan" | "pink" | "blue";
  showArrow?: boolean;
}

export default function SectionNumber({ number, color = "purple", showArrow = true }: SectionNumberProps) {
  const colorClasses = {
    purple: {
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      arrow: "text-purple-400",
    },
    cyan: {
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      arrow: "text-cyan-400",
    },
    pink: {
      gradient: "from-pink-500/20 to-purple-500/20",
      border: "border-pink-500/30",
      arrow: "text-pink-400",
    },
    blue: {
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      arrow: "text-blue-400",
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="flex flex-col items-center mb-8">
      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${colors.gradient} ${colors.border} border`}>
        <span className="font-outfit font-bold text-2xl text-gradient">{number}</span>
      </div>
      
      {showArrow && (
        <div className="mt-4 mb-2">
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            fill="none"
            className={`${colors.arrow} opacity-40 animate-pulse`}
            style={{ animationDuration: "2s" }}
          >
            <path
              d="M12 0L12 28M12 28L6 22M12 28L18 22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
