import { Link } from "wouter";
import { ArrowRight, Layers, Cpu, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionNumber from "@/components/SectionNumber";
import QuickNavigation from "@/components/QuickNavigation";
import Breadcrumb from "@/components/Breadcrumb";

export default function AIArchitecture() {
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
          { label: "AI Architecture" }
        ]} />
      </div>
      
      <QuickNavigation sections={sections} color="cyan" />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-background" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <Layers className="w-4 h-4" />
              For Platform & Data Leaders
            </div>
            
            <h1 className="text-5xl md:text-7xl font-outfit font-bold">
              AI <span className="text-gradient from-cyan-400 to-blue-400">Architecture</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deliver a unified, AI-native intelligence platform that replaces fragmented stacks and accelerates time-to-value.
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
                Deliver a unified, AI-native intelligence platform that replaces fragmented stacks and accelerates time-to-value. GoodData's <strong>Intelligence Layer</strong> fuses semantic modeling, reasoning, governance, and AI-powered apps into a complete, production-grade solution—ready to scale across your business.
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
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fragmented Toolchains</h3>
                <p className="text-muted-foreground">
                  Fragmented toolchains and data pipelines increase cost, risk, and time-to-value.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Incomplete Solutions</h3>
                <p className="text-muted-foreground">
                  Standalone semantic layers solve only one piece of the puzzle—without decision automation or agent orchestration.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expensive DIY</h3>
                <p className="text-muted-foreground">
                  DIY architectures are expensive science projects that rarely produce enterprise-wide impact.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Missing Governance</h3>
                <p className="text-muted-foreground">
                  Governance, lineage, and observability are missing from most "modern" data stacks.
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
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Architectural Failure Rate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  70% of enterprise tech initiatives fail due to bad architectural decisions. The pressure to adopt GenAI forces platform teams to rethink how data, logic, and reasoning converge.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">The Integration Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Companies must choose: stitch together lakehouse + semantic + BI + AI tools, or adopt a complete Intelligence Layer.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">The Third Path</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData offers the third path: a fully integrated, multi-tenant, governed platform built for reasoning, decision-making, and monetization.
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
                <h3 className="text-2xl font-semibold mb-4">Architecture as Strategic Enabler</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Executives expect faster AI delivery, not just cleaner dashboards. Your architecture will either accelerate value or block it.
                </p>
                
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-cyan-500">
                  <p className="text-sm font-medium text-cyan-400 mb-2">Field Directive:</p>
                  <p className="text-muted-foreground">
                    Shift the conversation from tools to outcomes—what business problems can this intelligence layer solve in weeks, not quarters?
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
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Unified Intelligence Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Replace up to 7 separate tools with one Intelligence Layer purpose-built for AI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">AI Reasoning Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Govern and orchestrate AI reasoning—not just expose metrics.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Decision Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Move from dashboards to decision automation by embedding agents, assistants, and actions directly into user workflows.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Executive-Ready Outputs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver executive-ready outputs, trusted by business users and governed by your platform.
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
                "Is your current data architecture capable of delivering AI-powered experiences in production?",
                "Are you focused on governance and lineage, or just performance and storage?",
                "How many tools are involved in delivering a single dashboard or AI output today?",
                "Do your semantic definitions connect to real-time decisions and actions—or are they just \"reference metadata\"?"
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
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">From Semantic Layer to Intelligence Layer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData delivers semantics plus reasoning, governance, observability, and embeddable AI apps.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Production-Grade, Not Piecemeal</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Skip the science experiment. Get real business outcomes from an integrated platform that deploys in weeks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-cyan-500/20">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">AI-Native by Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built for agents, assistants, explainability, and multi-step reasoning—not just metric stores.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-blue-500/20">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Designed for SaaS and Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Native multi-tenancy, secure isolation, and embedding support product use cases from day one.
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
                  DIY architectures take quarters to build and require ongoing maintenance—ask how fast they can deploy governed AI agents.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Semantic point solutions stop at metrics—no reasoning, lineage, or orchestration.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Most stacks require separate tools for UX, observability, and governance—GoodData brings all of this together natively.
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
                <p className="text-lg font-semibold mb-4">"We already have a semantic layer."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "That's a great start—but does it reason? Govern AI? Or orchestrate agents? GoodData does—all in one platform."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-cyan-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We've built our own stack."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "If you've hand-wired lakehouse + BI + AI + governance tools, that's powerful—but fragile. We give you the same capability, hardened and production-ready."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-cyan-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We're considering dbt SL or Cube."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Those tools define metrics—but they don't deliver intelligence. GoodData is the layer that reasons, explains, and acts."
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

      {/* Section 11: LinkedIn Ad Examples */}
      <section id="linkedin-ads" className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-bold text-primary/20">11</div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                LinkedIn Ad Examples · AI Architecture
              </h2>
            </div>

            <div className="glass-panel p-8 rounded-3xl" style={{
              background: 'radial-gradient(circle at top left, rgba(34, 211, 238, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 80%)'
            }}>
              <div className="flex justify-between items-center gap-6 mb-8">
                <div>
                  <p className="text-muted-foreground text-sm">
                    Example creatives for AI Architecture—designed to feel like real LinkedIn ads for platform and data leaders.
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
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 4 · AI Architecture</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          One Platform. Zero Duct Tape. Full Intelligence.
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Replace your fragmented stack with a unified AI-native intelligence platform.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Stop duct-taping lakehouse + BI + semantic layer + AI tools together. GoodData delivers
                          a unified, production-ready platform that orchestrates data, semantics, analytics, and AI
                          agents—governed, explainable, and built for scale.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: Platform & data leaders</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            View architecture
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
                            Unified intelligence platform
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Semantic + AI + governance
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">Integration complexity reduction</div>
                            <div className="text-sm text-cyan-300 font-semibold">From 8 tools to 1 platform</div>
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
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 4 · AI Architecture</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          Build AI Agents That Actually Work in Production
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Orchestrate AI reasoning, execution, and governance in one platform.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Most AI agents fail because they lack trusted data, governed semantics, and orchestration.
                          GoodData's AI Architecture provides the foundation agents need: unified context, explainable
                          reasoning, and production-grade execution—all in one platform.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: AI & ML engineering leaders</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            See agent demo
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
                            AI agent orchestration
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            Governed reasoning layer
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">AI agent production success rate</div>
                            <div className="text-sm text-cyan-300 font-semibold">89% vs. 5% industry avg</div>
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
                          <span className="text-xs text-cyan-300 font-medium uppercase tracking-wider">Pillar 4 · AI Architecture</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                          From Lakehouse to Intelligence Layer: The Modern Data Stack
                        </h3>
                        <p className="text-cyan-200 mb-3 text-sm">
                          Layer AI-native intelligence on top of Databricks, Snowflake, or BigQuery.
                        </p>
                        <p className="text-cyan-100/80 text-sm leading-relaxed mb-6">
                          Your lakehouse stores data. GoodData makes it intelligent. We layer governed semantics,
                          AI reasoning, and autonomous agents on top of your existing Databricks, Snowflake, or
                          BigQuery investment—no rip-and-replace required.
                        </p>
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-xs text-gray-400">Audience: Data platform & infrastructure teams</span>
                          <button className="px-4 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-xs font-semibold uppercase tracking-wide transition-all">
                            View integrations
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
                            Works with existing lakehouse
                          </div>
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/25 bg-black/30 text-xs text-white w-fit">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                            No rip-and-replace needed
                          </div>
                          <div className="mt-auto rounded-lg p-3 bg-black/70 border border-cyan-400/40">
                            <div className="text-xs text-cyan-100/70 mb-1">Time to AI-ready architecture</div>
                            <div className="text-sm text-cyan-300 font-semibold">Weeks, not years</div>
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

      {/* Resources Link */}
      <section className="py-16 border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Looking for sales assets, battle cards, and messaging guides?
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
