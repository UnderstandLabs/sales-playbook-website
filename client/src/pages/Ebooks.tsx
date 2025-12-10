import { useState } from "react";
import { Link } from "wouter";
import { Home, BookOpen, Download } from "lucide-react";
import PillarFilter, { Pillar } from "@/components/PillarFilter";

interface Ebook {
  id: string;
  title: string;
  description: string;
  pillar: Pillar[];
  fileType: string;
  downloadUrl?: string;
  featured?: boolean;
}

export default function Ebooks() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>("all");

  const ebooks: Ebook[] = [
    {
      id: "ai-modernization-ebook",
      title: "We Watched AI Tackle a Nightmare BI Project",
      description: "Real-world proof-of-concept showing how AI modernized a complex Power BI model in minutes instead of weeks. Learn the 5 key lessons that change the ROI of analytics modernization.",
      pillar: ["ai-modernization"],
      fileType: "PDF",
      downloadUrl: "/assets/ai-modernization-ebook.pdf",
      featured: true,
    },
    {
      id: "complete-playbook",
      title: "The Complete Playbook",
      description: "\"Break the Dashboard Barrier\" - The full strategy guide in a single, branded PDF.",
      pillar: ["all"],
      fileType: "PDF",
      downloadUrl: "/assets/gooddata_playbook_ebook.pdf",
      featured: false,
    },
  ];

  const filteredEbooks = selectedPillar === "all" 
    ? ebooks 
    : ebooks.filter(ebook => ebook.pillar.includes(selectedPillar) || ebook.pillar.includes("all"));

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
              <BookOpen className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                eBooks & Guides
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                eBooks & Guides
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              In-depth guides, white papers, and industry reports
            </p>
          </div>

          {/* Pillar Filter */}
          <PillarFilter selectedPillar={selectedPillar} onPillarChange={setSelectedPillar} />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEbooks.length > 0 ? (
              filteredEbooks.map((ebook) => (
                <div
                  key={ebook.id}
                  className={`group relative bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                    ebook.featured 
                      ? "border-pink-500/30 shadow-lg shadow-pink-500/10" 
                      : "border-white/10 hover:border-pink-500/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-pink-500/20 text-pink-400">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <span className={`text-xs font-mono border px-2 py-1 rounded ${
                      ebook.featured 
                        ? "text-pink-400 border-pink-500/30 bg-pink-500/10" 
                        : "text-muted-foreground border-white/10"
                    }`}>
                      {ebook.fileType}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {ebook.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{ebook.description}</p>
                  {ebook.downloadUrl && (
                    <a
                      href={ebook.downloadUrl}
                      download
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-all ${
                        ebook.featured
                          ? "bg-gradient-to-r from-pink-500 to-cyan-500 hover:shadow-lg hover:shadow-pink-500/25"
                          : "bg-gradient-to-r from-pink-500/80 to-cyan-500/80 hover:from-pink-500 hover:to-cyan-500"
                      }`}
                    >
                      <Download className="w-4 h-4" />
                      Download eBook
                    </a>
                  )}
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">
                  No eBooks found for {selectedPillar === "all" ? "this filter" : "this pillar"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon or try a different filter
                </p>
              </div>
            )}
          </div>

          {/* Coming Soon */}
          {filteredEbooks.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400">More eBooks coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
