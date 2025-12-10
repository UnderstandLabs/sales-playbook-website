import { useState } from "react";
import { Link } from "wouter";
import { Home, Image, Download, ZoomIn } from "lucide-react";
import PillarFilter, { Pillar } from "@/components/PillarFilter";

interface Infographic {
  id: string;
  title: string;
  description: string;
  pillar: Pillar[];
  imageUrl: string;
  downloadUrl?: string;
  featured?: boolean;
}

export default function Infographics() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const infographics: Infographic[] = [
    {
      id: "make-your-data-work",
      title: "Make Your Data Work for You",
      description: "From dashboards to decisions: See how the era of active intelligence shifts from 'you work with data' to 'data works for you' with AI Assistants, Autopilots, and Agents.",
      pillar: ["decision-intelligence"],
      imageUrl: "/assets/makeyourdatawork.png",
      downloadUrl: "/assets/makeyourdatawork.png",
      featured: true,
    },
    {
      id: "dashboards-to-intelligence",
      title: "From Dashboards to Decisions",
      description: "Visual guide showing the problem (dashboard era hitting limits) and the solution (platform built to operationalize data with AI Lake, AI Hub, and AI Apps).",
      pillar: ["decision-intelligence"],
      imageUrl: "/assets/DashboardstoIntelligence.png",
      downloadUrl: "/assets/DashboardstoIntelligence.png",
      featured: true,
    },
    {
      id: "ai-modernization-migration",
      title: "From Complex DAX to AI-Ready Analytics",
      description: "Visual breakdown of how AI transforms legacy BI complexity into modern, AI-ready architecture. Shows the journey from nested DAX calculations to composable metrics in minutes.",
      pillar: ["ai-modernization"],
      imageUrl: "/assets/ai-modernization-infographic.png",
      downloadUrl: "/assets/ai-modernization-infographic.png",
      featured: true,
    },
  ];

  const filteredInfographics = selectedPillar === "all" 
    ? infographics 
    : infographics.filter(infographic => infographic.pillar.includes(selectedPillar) || infographic.pillar.includes("all"));

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
              <Image className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Infographics
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Infographics
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Visual storytelling for complex concepts
            </p>
          </div>

          {/* Pillar Filter */}
          <PillarFilter selectedPillar={selectedPillar} onPillarChange={setSelectedPillar} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInfographics.length > 0 ? (
              filteredInfographics.map((infographic) => (
                <div
                  key={infographic.id}
                  className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 ${
                    infographic.featured 
                      ? "border-pink-500/30 shadow-lg shadow-pink-500/10" 
                      : "border-white/10 hover:border-pink-500/30"
                  }`}
                >
                  {/* Image Preview */}
                  <div 
                    className="relative aspect-video bg-white/5 cursor-pointer overflow-hidden"
                    onClick={() => setSelectedImage(infographic.imageUrl)}
                  >
                    <img 
                      src={infographic.imageUrl} 
                      alt={infographic.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="p-3 rounded-full bg-pink-500/20 backdrop-blur-sm">
                        <ZoomIn className="w-6 h-6 text-pink-400" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                      {infographic.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm">{infographic.description}</p>
                    {infographic.downloadUrl && (
                      <a
                        href={infographic.downloadUrl}
                        download
                        className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all ${
                          infographic.featured
                            ? "bg-gradient-to-r from-pink-500 to-cyan-500 hover:shadow-lg hover:shadow-pink-500/25"
                            : "bg-gradient-to-r from-pink-500/80 to-cyan-500/80 hover:from-pink-500 hover:to-cyan-500"
                        }`}
                      >
                        <Download className="w-4 h-4" />
                        Download PNG
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Image className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">
                  No infographics found for {selectedPillar === "all" ? "this filter" : "this pillar"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon or try a different filter
                </p>
              </div>
            )}
          </div>

          {/* Coming Soon */}
          {filteredInfographics.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400">More infographics coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full">
            <img 
              src={selectedImage} 
              alt="Infographic preview"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <span className="text-white text-xl">×</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
