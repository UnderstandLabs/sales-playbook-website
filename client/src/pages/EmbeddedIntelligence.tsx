import { Link } from "wouter";
import { ArrowRight, Lightbulb, Target, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import SectionNumber from "@/components/SectionNumber";
import QuickNavigation from "@/components/QuickNavigation";
import Breadcrumb from "@/components/Breadcrumb";

export default function EmbeddedIntelligence() {
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
          { label: "Embedded Intelligence" }
        ]} />
      </div>
      
      <QuickNavigation sections={sections} color="pink" />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-background" />
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium">
              <Target className="w-4 h-4" />
              For Product Leaders
            </div>
            
            <h1 className="text-5xl md:text-7xl font-outfit font-bold">
              Embedded <span className="text-gradient from-pink-400 to-purple-400">Intelligence</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deliver real-time, embedded intelligence that enhances your product, delights users, and unlocks new revenue streams—driving differentiation and monetization.
            </p>
            
            <div className="pt-4">
              <Link href="/resources">
                <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all">
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
            <SectionNumber number="01" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-6 text-center">Value Proposition</h2>
            
            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
              <p className="text-lg leading-relaxed">
                Deliver real-time, <strong>embedded intelligence</strong> that enhances your product, delights users, and unlocks new revenue streams. GoodData helps you go beyond dashboards to deliver trusted, explainable intelligence inside your product—driving differentiation and monetization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pain Points Solved */}
      <section id="core-pain-points" className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionNumber number="02" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Core Pain Points Solved</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Underutilized Analytics</h3>
                <p className="text-muted-foreground">
                  Product analytics are underutilized because they live outside the workflow.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Disconnected UX</h3>
                <p className="text-muted-foreground">
                  Legacy embedding approaches create disconnected, slow, or brittle UX.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Scaling Challenges</h3>
                <p className="text-muted-foreground">
                  Scaling insights across customers or partners is expensive and insecure.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Deployment Risk</h3>
                <p className="text-muted-foreground">
                  Generative AI is hard to deploy safely and explainably inside products.
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
            <SectionNumber number="03" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">AI Era Context</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-pink-500/20">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Your Product's ChatGPT Moment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the AI era, your product needs to be smart, not static. This is your product's ChatGPT moment.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">From Dashboards to Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embedded dashboards are being replaced by embedded intelligence—real-time, guided, and proactive insight experiences.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-pink-500/20">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Proven AI-Native Product Features</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData powers AI-native, revenue-generating product features for Mastercard, Mark43, and others—designed to evolve rapidly alongside the AI landscape.
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
            <SectionNumber number="04" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-8 text-center">Board-Level Relevance</h2>
            
            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20">
                <h3 className="text-2xl font-semibold mb-4">Foundational Capability</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Boards now expect product teams to define and ship AI experiences. Embedded intelligence isn't a feature—it's a foundational capability.
                </p>
                
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-pink-500">
                  <p className="text-sm font-medium text-pink-400 mb-2">Field Directive:</p>
                  <p className="text-muted-foreground">
                    Reps must shift the conversation from tooling to outcomes: how will this intelligence change the product experience and revenue model?
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
            <SectionNumber number="05" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Making Your Data Work for You</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Product Features, Not Reports</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Embedded Intelligence turns analytics into product features—not reports—creating sticky, revenue-driving user experiences.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Analytics-as-Code Model</h3>
                <p className="text-muted-foreground leading-relaxed">
                  GoodData's analytics-as-code model accelerates shipping and scaling new intelligence use cases.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Governed Metrics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Governed metrics ensure consistency, security, and explainability across every user interaction.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Rapid Transformation with Cursor</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cursor rapidly transforms legacy logic into scalable, AI-ready definitions—cutting build time from months to weeks.
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
            <SectionNumber number="06" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Key Discovery Questions</h2>
            
            <div className="space-y-4">
              {[
                "What kind of product experience do you want your users to have when it comes to data?",
                "Are your analytics embedded for value—or just visible for compliance?",
                "How will intelligence drive ARR or expand your feature tiers?",
                "How do you plan to evolve your product in response to GenAI expectations?",
                "Are you looking to replicate what Mastercard or Mark43 have already delivered?"
              ].map((question, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-pink-500/30 transition-colors">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 font-bold">
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
            <SectionNumber number="07" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Positioning & Messaging</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-pink-500/20">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">From Embedded Analytics to Embedded Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Go beyond embedded charts to deliver truly differentiated, conversational, and guided product experiences.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Smart, Sticky Products</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Give users not just charts, but answers, context, and next steps—natively in your UI.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-pink-500/20">
                <h3 className="text-xl font-semibold mb-3 text-pink-400">Governed at Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Support thousands of tenants and users with secure, explainable insights—backed by a single semantic layer.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Built for AI Evolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you start with dashboards or agents, GoodData's open, headless architecture is designed to evolve as your product roadmap does.
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
            <SectionNumber number="08" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Competitive Landmines to Drop</h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Embedding legacy dashboards is a dead-end—most can't scale, support multi-tenancy, or deliver AI-ready experiences.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  Bolt-on AI lacks trust. GoodData embeds semantic logic and governance directly into every output.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                <p className="text-lg leading-relaxed">
                  DIY solutions require massive engineering investment to match what GoodData delivers out of the box.
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
            <SectionNumber number="09" color="pink" />
            
            <h2 className="text-3xl font-outfit font-bold mb-12 text-center">Common Objections & Suggested Responses</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-pink-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We already have embedded charts."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Charts aren't intelligence. This is about transforming insights into product features that drive ARR and user engagement."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-pink-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We built something ourselves."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "That's a strong start—but AI governance, semantic structure, and scale aren't trivial. We accelerate and harden what you've started."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-pink-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"We're evaluating OpenAI or building our own agent."</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "We support that—and give your agent a trusted, governed semantic layer so it produces accurate, explainable outputs."
                </p>
              </div>

              <div className="p-6 rounded-xl bg-background border border-border">
                <p className="text-sm font-medium text-pink-400 mb-2">Objection:</p>
                <p className="text-lg font-semibold mb-4">"Is GoodData still focused on embedded analytics?"</p>
                <p className="text-sm font-medium text-green-400 mb-2">Response:</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Yes—and we've evolved. Embedded analytics was step one. Embedded intelligence is the future: it's how smart products deliver value and revenue in the AI era."
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
                LinkedIn Ad Examples · Embedded Intelligence
              </h2>
            </div>

            <div className="glass-panel p-8 rounded-3xl" style={{
              background: 'radial-gradient(circle at top left, rgba(236, 72, 153, 0.15) 0%, rgba(168, 85, 247, 0.05) 40%, transparent 80%)'
            }}>
              <div className="mb-8">
                <p className="text-muted-foreground text-sm">
                  Example creatives for Embedded Intelligence—designed to feel like real LinkedIn ads for product and UX leaders.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/linkedin-ads-embedded-intelligence.png" 
                  alt="LinkedIn Ad Examples for Embedded Intelligence - Three ad variations showing 'Give Your Product Its ChatGPT Moment', 'Embed AI Co-Pilots Without the Rip-and-Replace', and 'Lead the AI Shift or Get Left Behind'"
                  className="w-full h-auto"
                />
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
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all">
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
