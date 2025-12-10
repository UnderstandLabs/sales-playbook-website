import { useState } from "react";
import { useState as useReactState } from "react";
import { Link } from "wouter";
import { Home, Presentation, Download } from "lucide-react";
import PillarFilter, { Pillar } from "@/components/PillarFilter";
import PresentationPreviewModal from "@/components/PresentationPreviewModal";

interface PresentationItem {
  id: string;
  title: string;
  description: string;
  pillar: Pillar[];
  fileType: string;
  downloadUrl?: string;
  thumbnail?: string;
  previewSlides?: string[];
}

export default function Presentations() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>("all");
  const [previewModal, setPreviewModal] = useReactState<{
    isOpen: boolean;
    title: string;
    slides: string[];
  }>({ isOpen: false, title: "", slides: [] });

  const presentations: PresentationItem[] = [
    {
      id: "first-call-deck",
      title: "First Call Deck",
      description: "The standard 12-slide pitch deck focusing on the \"Dashboard Barrier\" narrative.",
      pillar: ["all"],
      fileType: "PPTX",
      downloadUrl: "/assets/first_call_deck.pptx",
      thumbnail: "/thumbnails/first-call-deck.png",
      previewSlides: [
        "/slides/first-call-deck-slide-1.png",
        "/slides/first-call-deck-slide-2.png",
        "/slides/first-call-deck-slide-3.png",
      ],
    },
    {
      id: "ai-modernization-deck",
      title: "AI Modernization Deck",
      description: "Comprehensive overview of AI modernization benefits and implementation strategies.",
      pillar: ["ai-modernization"],
      fileType: "Google Slides",
      downloadUrl: "https://docs.google.com/presentation/d/12y4fQJ1ti6yNJc0Lg50Le3IS9qkMuAr8YrxyFoUWutY/edit?slide=id.g363dc1506e7_0_8#slide=id.g363dc1506e7_0_8",
      thumbnail: "/thumbnails/ai-modernization-deck.png",
      previewSlides: [
        "/slides/ai-modernization-deck-slide-1.png",
        "/slides/ai-modernization-deck-slide-2.png",
        "/slides/ai-modernization-deck-slide-3.png",
      ],
    },
  ];

  const filteredPresentations = selectedPillar === "all" 
    ? presentations 
    : presentations.filter(pres => pres.pillar.includes(selectedPillar) || pres.pillar.includes("all"));

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
              <Presentation className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Presentations
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Presentations
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Customizable slide decks for every conversation
            </p>
          </div>

          {/* Pillar Filter */}
          <PillarFilter selectedPillar={selectedPillar} onPillarChange={setSelectedPillar} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPresentations.length > 0 ? (
              filteredPresentations.map((pres) => (
                <div key={pres.id} className="group glass-card overflow-hidden hover:bg-white/5 transition-all duration-300">
                  {pres.thumbnail && (
                    <div 
                      className="relative w-full aspect-video overflow-hidden cursor-pointer"
                      onClick={() => pres.previewSlides && setPreviewModal({ isOpen: true, title: pres.title, slides: pres.previewSlides })}
                    >
                      <img 
                        src={pres.thumbnail} 
                        alt={pres.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="text-xs font-mono text-white bg-black/60 backdrop-blur-sm border border-white/20 px-2 py-1 rounded">{pres.fileType}</span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                      {pres.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{pres.description}</p>
                    {pres.downloadUrl && (
                    <a
                      href={pres.downloadUrl}
                      {...(pres.fileType === "Google Slides" ? { target: "_blank", rel: "noopener noreferrer" } : { download: true })}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    >
                      <Download className="w-4 h-4" />
                      {pres.fileType === "Google Slides" ? "Open" : "Download"} {pres.fileType}
                    </a>
                     )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Presentation className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">
                  No presentations found for {selectedPillar === "all" ? "this filter" : "this pillar"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon or try a different filter
                </p>
              </div>
            )}
          </div>

          {/* Coming Soon */}
          {filteredPresentations.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400">More presentations coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Preview Modal */}
      <PresentationPreviewModal
        isOpen={previewModal.isOpen}
        onClose={() => setPreviewModal({ isOpen: false, title: "", slides: [] })}
        title={previewModal.title}
        slides={previewModal.slides}
      />
    </div>
  );
}
