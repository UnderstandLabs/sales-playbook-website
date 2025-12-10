import { Link } from "wouter";
import { ArrowRight, Database, Zap, Shield, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionNumber from "@/components/SectionNumber";
import QuickNavigation from "@/components/QuickNavigation";
import Breadcrumb from "@/components/Breadcrumb";

export default function AIModernization() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const sections = [
    { id: "value-proposition", label: "Value Proposition", number: "01" },
    { id: "core-pain-points", label: "Core Pain Points Solved", number: "02" },
    { id: "ai-era-context", label: "AI Era Context", number: "03" },
    { id: "board-level-relevance", label: "Board-Level Relevance", number: "04" },
    { id: "making-data-work", label: "Making Your Data Work for You", number: "05" },
    { id: "discovery-questions", label: "Key Discovery Questions", number: "06" },
    { id: "positioning", label: "Positioning & Messaging", number: "07" },
    { id: "competitive-landmines", label: "Competitive Landmines", number: "08" },
    { id: "objections", label: "Common Objections & Responses", number: "09" },
    { id: "competitive-summary", label: "Competitive Summary", number: "10" },
    { id: "linkedin-ads", label: "LinkedIn Ad Examples", number: "11" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <div className="container pt-8 pb-4">
        <Breadcrumb items={[
          { label: "Our Plays", path: "/four-pillars" },
          { label: "AI Modernization" }
        ]} />
      </div>
      
      <QuickNavigation sections={sections} color="cyan" />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-background" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Database className="w-4 h-4" />
              For Analytics & Data Teams
            </div>
            
            <h1 className="text-5xl md:text-7xl font-outfit font-bold">
              AI <span className="text-gradient from-cyan-400 to-blue-400">Modernization</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eliminate BI complexity and technical debt. Rebuild a governed semantic foundation that delivers faster analytics and prepares your organization for AI.
            </p>
            
            <div className="pt-4">
              <Link href="/resources">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                  View Resources
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="01" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-6 text-center">Value Proposition</h2>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <p className="text-lg leading-relaxed">
                Eliminate BI complexity and technical debt. Rebuild a governed semantic foundation that delivers faster analytics and prepares your organization for AI. GoodData transforms brittle, undocumented logic into a modern, <strong>AI-ready architecture</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pain Points Solved */}
      <section id="core-pain-points" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="02" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Core Pain Points Solved</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Legacy BI Platforms</h3>
                <p className="text-muted-foreground">
                  Legacy BI platforms are siloed, brittle, and designed for static dashboards—not AI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hidden Business Logic</h3>
                <p className="text-muted-foreground">
                  Business logic is hidden across dashboards and reports, impossible to track or trust.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inconsistent Definitions</h3>
                <p className="text-muted-foreground">
                  Inconsistent definitions, metric drift, and duplicated logic erode confidence and productivity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Slow Migration</h3>
                <p className="text-muted-foreground">
                  Migration from legacy systems is slow, expensive, and often fails to enable AI-readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Context */}
      <section id="ai-era-context" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="03" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">AI Era Context</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">The Missing Bridge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprises already have the data (Snowflake, Databricks) and the ambition (GenAI), but they lack the bridge.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Dashboard Fatigue</h3>
                <p className="text-muted-foreground leading-relaxed">
                  "Dashboard Fatigue" has set in—users want answers, not more charts.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI Needs Structure</h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI needs structure and context, not spreadsheets. Without a semantic foundation, it can't reason or explain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board-Level Relevance */}
      <section id="board-level-relevance" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="04" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-8 text-center">Board-Level Relevance</h2>
            
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <h3 className="text-2xl font-semibold mb-4">AI Transformation Mandate</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Executive teams are pushing AI transformation. Analytics and data teams must modernize fast to support these goals.
                </p>
                
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-cyan-500">
                  <p className="text-sm font-medium text-cyan-400 mb-2">Field Directive:</p>
                  <p className="text-muted-foreground">
                    Reframe modernization not as a migration effort, but as a shift toward AI-ready architecture. Focus on value acceleration, not tool replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Making Your Data Work for You */}
      <section id="making-data-work" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="05" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Making Your Data Work for You</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Governed Semantic Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Convert complex, undocumented logic into a governed semantic model that humans and machines can trust.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Analytics-as-Code Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData's analytics-as-code model accelerates metric development, testing, and reuse—cutting down BI backlog.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Cursor Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cursor automates the transformation of brittle DAX/MDX logic into structured, governed definitions—making months-long work possible in days.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Single Source of Truth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empower AI agents and dashboards with the same source of truth—backed by lineage, validation, and governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Discovery Questions */}
      <section id="discovery-questions" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="06" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Key Discovery Questions</h2>
            
            <div className="space-y-4">
              {[
                "How long does it take to introduce a new metric or dashboard today?",
                "Are definitions of KPIs consistent across tools and departments?",
                "What prevents you from scaling analytics to new teams or AI workflows?",
                "What's your current approach to AI-enablement or data productization?"
              ].map((question, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{question}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning & Messaging */}
      <section id="positioning" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="07" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Positioning & Messaging</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">From Technical Debt to AI-Ready Foundation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modernization isn't just cleanup—it's a strategic shift toward AI scalability.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Cursor-Powered Conversion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData's platform and automation accelerate your transformation. What once took 18 months now takes 12 weeks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">One Layer for Dashboards and AI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With GoodData, metrics live in one governed layer—used by dashboards, embedded apps, and AI agents alike.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Analytics as Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Versioned, governed, and deployed like software. Empower your analytics team to move as fast as engineering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landmines */}
      <section id="competitive-landmines" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="08" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Competitive Landmines to Drop</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Tableau, Power BI, and Looker were built for dashboards—not AI. Ask how they expose lineage, enforce definitions, or integrate with agents.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Point tools don't offer governance or lineage—only visual output or storage.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Manual migrations are expensive, error-prone, and fail to establish an AI-ready layer. GoodData and Cursor automate the lift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections & Responses */}
      <section id="objections" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="09" color="cyan" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Common Objections & Suggested Responses</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-cyan-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We've already moved to the cloud."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "That's a great foundation—but cloud data isn't AI-ready until it's structured, governed, and machine-readable."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-cyan-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We're replacing dashboards, not the model underneath."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Without modernizing the logic layer, new dashboards will suffer the same problems: drift, duplication, and debt."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-cyan-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"This sounds like a big rip-and-replace."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Not at all. GoodData layers on top of your stack to complete it—not compete with it. You keep Snowflake or Databricks, we bring intelligence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Competitive Summary */}
      <section id="competitive-summary" className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-bold text-primary/20">10</div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                Competitive Summary
              </h2>
            </div>
            
            <div className="glass-panel p-8 space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                In summary, GoodData's competitive edge across use cases is its holistic approach. It delivers the governance and reliability enterprises associate with legacy BI while also providing the agility required in the AI era. Competitors typically force a trade-off—governance versus agility, depth versus speed—but GoodData is engineered so customers don't have to choose.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether enabling internal teams to make better, faster decisions or powering embedded intelligence within software products, GoodData's combination of a governed semantic layer, AI-native architecture, scalable multi-tenancy, and analytics-as-code positions it uniquely in the market—offering a level of capability that piecemeal competitors cannot easily match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Resource */}
      <section className="py-16 border-t border-border bg-gradient-to-b from-background to-cyan-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                <Zap className="w-4 h-4" />
                Featured Video
              </div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                Intelligence Layer Explained
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch how the Intelligence Layer transforms your data architecture for AI readiness
              </p>
            </div>

            <div className="glass-panel p-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-white mb-2">Video Walkthrough</h3>
                    <p className="text-muted-foreground">
                      Discover why traditional BI tools fail in the AI era and how GoodData's Intelligence Layer provides the governed semantic foundation that makes AI work reliably at enterprise scale.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">Intelligence Layer</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">AI Architecture</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">Demo</span>
                  </div>
                  <a 
                    href="https://drive.google.com/file/d/1-nWtZ-OPwgZFhjWYR5_w7Jq1Rbvw3NlA/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                    Watch Video
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: LinkedIn Ad Examples */}
      <section id="linkedin-ads" className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-bold text-primary/20">11</div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                LinkedIn Ad Examples · AI Modernization
              </h2>
            </div>

            <div className="glass-panel p-8 rounded-3xl" style={{
              background: 'radial-gradient(circle at top left, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 80%)'
            }}>
              <div className="flex justify-between items-center gap-6 mb-8">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Example creatives for AI Modernization—designed to feel like real LinkedIn ads for analytics and data teams.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${
                          currentSlide === i ? 'w-6 bg-cyan-400' : 'w-2 bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Ad 1 */}
                  <div className="min-w-full px-2">
                    <div className="max-w-3xl mx-auto rounded-2xl p-8 grid md:grid-cols-[2.1fr_1.9fr] gap-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(9,9,12,0.98), rgba(8,47,73,0.95))',
                        boxShadow: '0 18px 30px rgba(0, 0, 0, 0.3)'
                      }}>
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                          style={{ background: 'rgba(34, 211, 238, 0.2)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 3 · AI Modernization</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          Your BI Stack Wasn't Built for AI. Time to Fix That.
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Eliminate technical debt and rebuild a governed semantic foundation.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Legacy BI tools were designed for dashboards, not AI agents. GoodData modernizes your
                          analytics stack with a governed semantic layer that eliminates complexity, accelerates
                          time-to-insight, and makes your data AI-ready—without ripping and replacing everything.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: Analytics & data leaders</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            Download guide
                          </button>
                        </div>
                      </div>
                      <div className="relative rounded-xl overflow-hidden"
                        style={{
                          background: 'radial-gradient(circle at top left, rgba(34,211,238,0.9), transparent 55%), radial-gradient(circle at bottom right, rgba(59,130,246,0.9), transparent 55%), linear-gradient(145deg, #09090C, #082F49)'
                        }}>
                        <div className="absolute inset-4 rounded-lg border border-white/15 backdrop-blur-sm p-4 flex flex-col gap-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Governed semantic layer
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            AI-ready data foundation
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">Reduction in technical debt</div>
                            <div className="text-sm text-cyan-300 font-semibold">73% faster analytics delivery</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ad 2 */}
                  <div className="min-w-full px-2">
                    <div className="max-w-3xl mx-auto rounded-2xl p-8 grid md:grid-cols-[2.1fr_1.9fr] gap-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(9,9,12,0.98), rgba(8,47,73,0.95))',
                        boxShadow: '0 18px 30px rgba(0, 0, 0, 0.3)'
                      }}>
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                          style={{ background: 'rgba(34, 211, 238, 0.2)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 3 · AI Modernization</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          Why 95% of AI Pilots Fail (And How to Be in the 5%)
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Data architecture problems kill AI initiatives before they start.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Most AI failures aren't model problems—they're data problems. Fragmented sources,
                          inconsistent definitions, and ungoverned pipelines doom AI from day one. GoodData's
                          Intelligence Layer creates the unified, trusted foundation AI needs to succeed.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: CIO, CDO, CTO</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            Read whitepaper
                          </button>
                        </div>
                      </div>
                      <div className="relative rounded-xl overflow-hidden"
                        style={{
                          background: 'radial-gradient(circle at top left, rgba(34,211,238,0.9), transparent 55%), radial-gradient(circle at bottom right, rgba(59,130,246,0.9), transparent 55%), linear-gradient(145deg, #09090C, #082F49)'
                        }}>
                        <div className="absolute inset-4 rounded-lg border border-white/15 backdrop-blur-sm p-4 flex flex-col gap-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            95% AI pilot failure rate
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Root cause: Data architecture
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">With Intelligence Layer foundation</div>
                            <div className="text-sm text-cyan-300 font-semibold">5x higher AI success rate</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ad 3 */}
                  <div className="min-w-full px-2">
                    <div className="max-w-3xl mx-auto rounded-2xl p-8 grid md:grid-cols-[2.1fr_1.9fr] gap-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(9,9,12,0.98), rgba(8,47,73,0.95))',
                        boxShadow: '0 18px 30px rgba(0, 0, 0, 0.3)'
                      }}>
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4"
                          style={{ background: 'rgba(34, 211, 238, 0.2)', border: '1px solid rgba(34, 211, 238, 0.3)' }}>
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 3 · AI Modernization</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          From Months to Minutes: The Semantic Layer Advantage
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Accelerate analytics delivery while ensuring governance and consistency.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Stop rebuilding metrics in every tool. GoodData's governed semantic layer defines
                          business logic once, then serves it everywhere—dashboards, AI agents, embedded apps.
                          Faster insights, zero inconsistency, full lineage and explainability.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: Data engineering & platform teams</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            View demo
                          </button>
                        </div>
                      </div>
                      <div className="relative rounded-xl overflow-hidden"
                        style={{
                          background: 'radial-gradient(circle at top left, rgba(34,211,238,0.9), transparent 55%), radial-gradient(circle at bottom right, rgba(59,130,246,0.9), transparent 55%), linear-gradient(145deg, #09090C, #082F49)'
                        }}>
                        <div className="absolute inset-4 rounded-lg border border-white/15 backdrop-blur-sm p-4 flex flex-col gap-3">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Single source of truth
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Full lineage & governance
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">Time-to-insight improvement</div>
                            <div className="text-sm text-cyan-300 font-semibold">From months to minutes</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource: Intelligence Beyond The Dashboard */}
      <section className="py-16 border-t border-border bg-gradient-to-b from-background to-cyan-500/5">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                <Database className="w-4 h-4" />
                Featured Resource
              </div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                Intelligence Beyond The Dashboard
              </h2>
              <p className="text-lg text-muted-foreground">
                A visual guide to modernizing your data architecture for the AI era
              </p>
            </div>

            <div className="glass-panel p-8 space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center">
                    <Database className="w-16 h-16 text-cyan-400" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-outfit font-bold text-white mb-2">15-Page Presentation</h3>
                    <p className="text-muted-foreground">
                      Understand why 95% of AI pilots fail due to data architecture problems, how the Intelligence Layer solves this, and why GoodData competes on AI readiness—not features.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">AI Modernization</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">Intelligence Layer</span>
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">Competitive Positioning</span>
                  </div>
                  <a 
                    href="/Intelligence_Beyond_The_Dashboard.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/50"
                  >
                    <Database className="w-5 h-5" />
                    View Presentation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Link */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Looking for more sales assets, battle cards, and messaging guides?
            </p>
            <Link href="/resources">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                View All Resources
                <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
