import Layout from "@/components/Layout";
import { Building2, Boxes, Database, Network, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function FourPillars() {
  const [activeSection, setActiveSection] = useState("decision-intelligence");

  useEffect(() => {
    document.title = "Our Plays | GoodData Playbook";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = pillars.map(p => p.id);
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const pillars = [
    {
      id: "decision-intelligence",
      icon: Building2,
      persona: "For Business Leaders",
      title: "Decision Intelligence",
      description:
        "Turn data into enterprise intelligence. Give your business AI-driven clarity, trusted insights, and real-time decisioning that accelerate outcomes and competitive advantage.",
      benefits: [
        "AI-powered analysis on demand",
        "Trusted, governed intelligence",
        "ROI you can measure",
      ],
      color: "from-purple-500 to-pink-500",
      bgGlow: "bg-purple-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400",
      link: "/decision-intelligence",
    },
    {
      id: "embedded-intelligence",
      icon: Boxes,
      persona: "For Product Leaders",
      title: "Embedded Intelligence",
      description:
        "Move beyond dashboards. Deliver AI agents that analyze signals, explain changes, and recommend next actions directly inside your product.",
      benefits: [
        "Agent framework",
        "Context-aware reasoning",
        "Multi-region scale",
      ],
      color: "from-pink-500 to-rose-500",
      bgGlow: "bg-pink-500/20",
      borderColor: "border-pink-500/30",
      iconColor: "text-pink-400",
      link: "/embedded-intelligence",
    },
    {
      id: "ai-modernization",
      icon: Database,
      persona: "For Analytics & Data Teams",
      title: "AI Modernization",
      description:
        "Eliminate BI complexity and technical debt. Rebuild a governed semantic foundation that delivers faster analytics and prepares for AI.",
      benefits: [
        "Convert brittle logic",
        "Fix modeling drift",
        "Enterprise governance",
      ],
      color: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/20",
      borderColor: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      link: "/ai-modernization",
    },
    {
      id: "ai-architecture",
      icon: Network,
      persona: "For Platform & Data Leaders",
      title: "AI Architecture",
      description:
        "Deliver a unified, AI-native intelligence platform that replaces fragmented stacks and accelerates time-to-value.",
      benefits: [
        "Unified Intelligence Layer",
        "Production-Grade Platform",
        "AI-Native by Design",
      ],
      color: "from-blue-500 to-indigo-500",
      bgGlow: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
      link: "/ai-architecture",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-primary">
                What We Sell
              </span>
            </div>

            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              Our Plays for{" "}
              <span className="text-gradient">2026</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              GoodData Intelligence Layer accelerates how enterprises embed intelligence,
              modernize analytics, and operate AI-ready systems — without
              disruption.
            </p>
            
            {/* CTAs: Playbook Selector & Email Sequence Builder */}
            <div className="flex flex-col md:flex-row justify-center gap-4 max-w-5xl mx-auto">
              <Link href="/playbook-selector" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all flex items-center justify-center gap-3 group">
                  <span className="text-xl">🎯</span>
                  <span className="text-center">Not Sure Which Play to Use? Get a Recommendation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/email-sequence-builder" className="flex-1">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center justify-center gap-3 group">
                  <span className="text-xl">✉️</span>
                  <span className="text-center">Build Personalized Email Sequences</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Content with Sidebar */}
          <div className="flex gap-8 relative">
            {/* Sticky Sidebar Navigation - Hidden on mobile */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <div className="glass-card p-6">
                  <h3 className="font-outfit font-semibold text-sm text-white mb-4 uppercase tracking-wide">
                    Jump to Play
                  </h3>
                  <nav className="space-y-2">
                    {pillars.map((pillar, index) => {
                      const Icon = pillar.icon;
                      const isActive = activeSection === pillar.id;
                      return (
                        <button
                          key={pillar.id}
                          onClick={() => scrollToSection(pillar.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                            isActive
                              ? `${pillar.bgGlow} border ${pillar.borderColor} text-white`
                              : "text-muted-foreground hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? pillar.iconColor : ""}`} />
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs opacity-50">{String(index + 1).padStart(2, '0')}</span>
                              <span className="text-sm font-medium">{pillar.title}</span>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Vertical Play Sections */}
            <div className="flex-1 space-y-12">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    id={pillar.id}
                    className={`glass-card p-10 border ${pillar.borderColor} hover:scale-[1.01] transition-all duration-300 scroll-mt-24`}
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Icon and Number */}
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-center">
                          <span className="text-4xl font-bold text-white/20">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className="text-sm font-medium text-primary mb-2 block">
                            {pillar.persona}
                          </span>
                          <h2 className="font-outfit font-bold text-4xl text-white mb-4">
                            {pillar.title}
                          </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {pillar.description}
                        </p>

                        <div className="mb-6">
                          <h3 className="text-sm font-semibold text-white mb-3">Key Benefits:</h3>
                          <div className="flex flex-wrap gap-3">
                            {pillar.benefits.map((benefit, idx) => (
                              <div
                                key={idx}
                                className={`px-4 py-2 rounded-full ${pillar.bgGlow} border ${pillar.borderColor} text-sm text-white`}
                              >
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Link href={pillar.link}>
                          <Button 
                            size="lg" 
                            className={`bg-gradient-to-r ${pillar.color} hover:opacity-90 text-white rounded-full px-8`}
                          >
                            Learn More About {pillar.title}
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pillar Selection Matrix */}
          <div className="glass-card p-8 mt-16">
            <h2 className="font-outfit font-bold text-3xl text-white mb-6 text-center">
              Which Play Should You Lead With?
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              Use this matrix to quickly identify the right entry point based on your prospect's pain points, buyer persona, and industry context.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-white font-semibold">Customer Pain Point</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Recommended Play</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Buyer Persona</th>
                    <th className="text-left py-4 px-4 text-white font-semibold">Industry Fit</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4">"We need faster, smarter decisions"</td>
                    <td className="py-4 px-4 font-medium text-purple-400">Decision Intelligence</td>
                    <td className="py-4 px-4">CEO, CFO, COO</td>
                    <td className="py-4 px-4">Finance, Retail, Healthcare</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4">"Our product needs intelligent features"</td>
                    <td className="py-4 px-4 font-medium text-pink-400">Embedded Intelligence</td>
                    <td className="py-4 px-4">CPO, VP Product, CTO</td>
                    <td className="py-4 px-4">SaaS, Fintech, Martech</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5">
                    <td className="py-4 px-4">"Our BI stack is slow and brittle"</td>
                    <td className="py-4 px-4 font-medium text-cyan-400">AI Modernization</td>
                    <td className="py-4 px-4">CDO, VP Analytics, Data Lead</td>
                    <td className="py-4 px-4">Enterprise, F500, Tech</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="py-4 px-4">"We need a scalable, AI-ready architecture"</td>
                    <td className="py-4 px-4 font-medium text-blue-400">AI Architecture</td>
                    <td className="py-4 px-4">CTO, Enterprise Architect, VP Eng</td>
                    <td className="py-4 px-4">Cloud-native, Data-intensive</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-primary/10 border border-primary/30 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-white">Pro Tip:</strong> Many deals will touch multiple plays. Use this matrix as a starting point to identify the primary entry play, then expand the conversation to adjacent plays as you uncover additional pain points during discovery.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center glass-card p-8">
            <h3 className="font-outfit font-bold text-2xl text-white mb-4">
              Ready to Dive Deeper?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore each play in detail to access campaign narratives, competitive positioning, and sales resources.
            </p>
            <Link href="/decision-intelligence">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">
                Start with Decision Intelligence
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
