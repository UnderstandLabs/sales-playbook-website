import { useState } from "react";
import { Link } from "wouter";
import { Home, Play, Download, ExternalLink } from "lucide-react";
import PillarFilter, { Pillar } from "@/components/PillarFilter";

interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  pillar: Pillar[];
  thumbnail: string;
  videoUrl: string;
  downloadUrl?: string;
  tags: string[];
  targetAudience: string;
}

export default function Videos() {
  const [selectedPillar, setSelectedPillar] = useState<Pillar>("all");

  const videos: Video[] = [
    {
      id: "ai-modernization-explainer",
      title: "AI Modernization Explainer",
      description: "Transform legacy BI into AI-ready architecture with governed semantics. Learn how GoodData + Cursor accelerates 18-month migrations to 12 weeks.",
      duration: "~4 minutes",
      pillar: ["ai-modernization"],
      thumbnail: "/placeholder-video-thumbnail.jpg",
      videoUrl: "https://drive.google.com/file/d/1eMYPY6nbz1m1GDGbJHiVuyzEk2mrANos/view?usp=sharing",
      tags: ["AI Modernization", "Semantic Layer", "Cursor", "Migration"],
      targetAudience: "For Analytics & Data Teams",
    },
    {
      id: "decision-intelligence-demo",
      title: "Decision Intelligence Demo",
      description: "In today's landscape, dashboards alone aren't enough. Modern financial institutions are flooded with data, yet still struggle with slow analysis cycles, siloed insights, and reactive decision-making. This video tells the story of how banks are moving past static BI dashboards and embracing AI-powered intelligence systems that can understand data, explain it, and act on it.",
      duration: "~5 minutes",
      pillar: ["decision-intelligence"],
      thumbnail: "/placeholder-video-thumbnail.jpg",
      videoUrl: "https://vimeo.com/1138491801",
      tags: ["Decision Intelligence", "AI-Powered Analytics", "Financial Services", "Banking"],
      targetAudience: "For Financial Services Leaders",
    },
    {
      id: "mic-powered-by-ai-cloud",
      title: "MIC - Powered By AI Cloud",
      description: "The Mastercard Intelligence Center (MIC) is already live in the UK & Ireland and MEA (Middle East and Africa). A powerful self-service platform giving issuers instant access to real-time portfolio insights, peer benchmarks and cardholder behavior — all in one place. ✅ Optimize spend and approval performance ✅ Minimize risk with real-time insights ✅ Uncover growth opportunities faster ✅ Customize benchmarks and portfolios with ease ✅ Build Quarterly Business Reviews in minutes ✅ Access premium features instantly with Click-to-Buy. With a redesigned interface, AI-powered recommendations and tools built for executives, product leads, and data scientists — Intelligence Center puts smarter, data-driven decisions at your fingertips.",
      duration: "~3 minutes",
      pillar: ["embedded-intelligence"],
      thumbnail: "/placeholder-video-thumbnail.jpg",
      videoUrl: "https://vimeo.com/1143896787/190bac79cf",
      tags: ["Embedded Intelligence", "Mastercard", "AI Cloud", "Self-Service Analytics"],
      targetAudience: "For Executives & Product Leaders",
    },
  ];

  const filteredVideos = selectedPillar === "all" 
    ? videos 
    : videos.filter(video => video.pillar.includes(selectedPillar));

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

      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <Play className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Videos & Demos
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Videos & Demos
              </span>
            </h1>
            
            <p className="text-xl text-gray-300">
              Product demos, customer testimonials, and training videos to support your sales conversations
            </p>
          </div>

          {/* Pillar Filter */}
          <PillarFilter selectedPillar={selectedPillar} onPillarChange={setSelectedPillar} />

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.length > 0 ? (
              filteredVideos.map((video) => (
                <div
                  key={video.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
                >
                  {/* Video Thumbnail */}
                  <div className="relative mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-pink-500/20 to-cyan-500/20 aspect-video flex items-center justify-center">
                    <Play className="w-16 h-16 text-white/60" />
                  </div>

                  {/* Video Info */}
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-sm text-pink-400 mb-2">{video.targetAudience}</p>
                  <p className="text-sm text-gray-400 mb-3">Duration: {video.duration}</p>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">{video.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                    >
                      <Play className="w-4 h-4" />
                      Watch Video
                    </a>
                    
                    {video.downloadUrl && (
                      <a
                        href={video.downloadUrl}
                        download
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-pink-500/30 transition-all"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <Play className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">
                  No videos found for {selectedPillar === "all" ? "this filter" : "this pillar"}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Check back soon or try a different filter
                </p>
              </div>
            )}
          </div>

          {/* Coming Soon Section */}
          {filteredVideos.length > 0 && (
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10">
                <span className="text-gray-400">More videos coming soon...</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
