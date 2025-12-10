import { useState } from "react";
import { Link } from "wouter";
import { Home, Shield, Download } from "lucide-react";
import PillarFilter, { Pillar } from "@/components/PillarFilter";

interface BattleCard {
  id: string;
  title: string;
  description: string;
  pillar: Pillar[];
  fileType: string;
  downloadUrl?: string;
}

export default function BattleCards() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>("all");

  const battleCards: BattleCard[] = [
    {
      id: "cio-one-pager",
      title: "One-Pager: CIO",
      description: "Executive summary tailored for the CIO persona. Focuses on governance and security.",
      pillar: ["all"],
      fileType: "PDF",
      downloadUrl: "/assets/cio_one_pager.pdf",
    },
  ];

  const filteredBattleCards = selectedPillar === "all" 
    ? battleCards 
    : battleCards.filter(card => card.pillar.includes(selectedPillar) || card.pillar.includes("all"));

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      {/* Back to Resources */}
      <div className="container pt-8 pb-4">
        <Link href="/resources">
          <a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
            Back to Resources
          </a>
        </Link>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <Shield className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Battle Cards & One-Pagers
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Battle Cards & One-Pagers
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Competitive insights and objection handling for every scenario
            </p>
          </div>

          {/* Pillar Filter */}
          <PillarFilter selectedPillar={selectedPillar} onPillarChange={setSelectedPillar} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBattleCards.length > 0 ? (
              filteredBattleCards.map((card) => (
                <div
                  key={card.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">{card.fileType}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{card.description}</p>
                  {card.downloadUrl && (
                    <a
                      href={card.downloadUrl}
                      download
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Download {card.fileType}
                    </a>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Shield className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">
                  No battle cards found for {selectedPillar === "all" ? "this filter" : "this pillar"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon or try a different filter
                </p>
              </div>
            )}
          </div>

          {/* Coming Soon */}
          {filteredBattleCards.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400">More battle cards coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
