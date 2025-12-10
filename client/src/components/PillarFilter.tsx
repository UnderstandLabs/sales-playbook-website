import { useState } from "react";

export type Pillar = "all" | "decision-intelligence" | "embedded-intelligence" | "ai-modernization" | "ai-architecture";

interface PillarFilterProps {
  selectedPillar: Pillar;
  onPillarChange: (pillar: Pillar) => void;
}

export default function PillarFilter({ selectedPillar, onPillarChange }: PillarFilterProps) {
  const pillars: { id: Pillar; label: string; color: string }[] = [
    { id: "all", label: "All", color: "from-pink-500 to-cyan-500" },
    { id: "decision-intelligence", label: "Decision Intelligence", color: "from-purple-500 to-purple-600" },
    { id: "embedded-intelligence", label: "Embedded Intelligence", color: "from-pink-500 to-pink-600" },
    { id: "ai-modernization", label: "AI Modernization", color: "from-cyan-500 to-cyan-600" },
    { id: "ai-architecture", label: "AI Architecture", color: "from-blue-500 to-blue-600" },
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {pillars.map((pillar) => (
          <button
            key={pillar.id}
            onClick={() => onPillarChange(pillar.id)}
            className={`
              px-6 py-3 rounded-full font-medium transition-all duration-300
              ${
                selectedPillar === pillar.id
                  ? `bg-gradient-to-r ${pillar.color} text-white shadow-lg scale-105`
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
              }
            `}
          >
            {pillar.label}
          </button>
        ))}
      </div>
    </div>
  );
}
