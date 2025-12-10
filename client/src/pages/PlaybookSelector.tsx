import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { Target, ArrowRight, ArrowLeft, Download, Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { generateRecommendationPDF } from "@/lib/pdfGenerator";

// Types
type BuyerPersona = "ceo" | "cpo" | "cdo" | "cto" | null;
type PainPoint = "slow-decisions" | "product-differentiation" | "bi-complexity" | "architecture-fragmentation" | null;
type Industry = "finance" | "saas" | "enterprise" | "cloud-native" | null;

interface Recommendation {
  pillar: "decision-intelligence" | "embedded-intelligence" | "ai-modernization" | "ai-architecture";
  pillarName: string;
  confidence: number;
  reason: string;
  talkTrack: string;
  discoveryQuestions: string[];
  valueProps: string[];
  secondaryPillar?: string;
  secondaryReason?: string;
  color: string;
}

export default function PlaybookSelector() {
  const [step, setStep] = useState(1);
  const [persona, setPersona] = useState<BuyerPersona>(null);
  const [painPoint, setPainPoint] = useState<PainPoint>(null);
  const [industry, setIndustry] = useState<Industry>(null);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "Playbook Selector | GoodData Playbook";
  }, []);

  // Recommendation engine
  const getRecommendation = (): Recommendation => {
    // Decision Intelligence - CEO/CFO focused on business decisions
    if (persona === "ceo" && painPoint === "slow-decisions") {
      return {
        pillar: "decision-intelligence",
        pillarName: "Decision Intelligence",
        confidence: 95,
        reason: "Best for Business Leaders who need faster, smarter decisions",
        talkTrack: "I noticed executives in your industry are struggling to make data-driven decisions quickly. What if your leadership team had AI-powered intelligence that explains trends, recommends actions, and automates decisions in real-time?",
        discoveryQuestions: [
          "How long does it currently take your leadership team to get answers to critical business questions?",
          "Are your executives spending more time interpreting dashboards than making decisions?",
          "What would change if your data could proactively alert you to risks and opportunities?"
        ],
        valueProps: [
          "AI-powered analysis delivers insights on demand, not on request",
          "Trusted, governed intelligence that executives can act on confidently",
          "Measurable ROI through faster decision cycles and reduced analysis time"
        ],
        secondaryPillar: "AI Modernization",
        secondaryReason: "for data teams preparing the foundation for AI-driven decisions",
        color: "purple"
      };
    }

    // Embedded Intelligence - Product leaders needing differentiation
    if (persona === "cpo" || painPoint === "product-differentiation") {
      return {
        pillar: "embedded-intelligence",
        pillarName: "Embedded Intelligence",
        confidence: 95,
        reason: "Best for Product Leaders in SaaS who need intelligent features",
        talkTrack: "I noticed product leaders in SaaS are struggling to differentiate with basic dashboards. What if your analytics could explain changes, recommend actions, and automate decisions directly inside your product—turning data into a revenue driver?",
        discoveryQuestions: [
          "How are your current users discovering new features within their daily workflow?",
          "What are the biggest friction points your product team faces when trying to implement data-driven recommendations?",
          "If you could automate one decision-making process for your end-users today, what would it be and why?"
        ],
        valueProps: [
          "Increases feature adoption by 30% through contextual guidance",
          "Reduces time-to-value for end-users with proactive insights",
          "Differentiates your product with unique, AI-driven capabilities"
        ],
        secondaryPillar: "Decision Intelligence",
        secondaryReason: "for executive buyers looking for strategic oversight",
        color: "pink"
      };
    }

    // AI Modernization - Analytics teams with BI complexity
    if (persona === "cdo" || painPoint === "bi-complexity") {
      return {
        pillar: "ai-modernization",
        pillarName: "AI Modernization",
        confidence: 92,
        reason: "Best for Analytics & Data Teams dealing with brittle BI stacks",
        talkTrack: "I noticed data teams are spending more time fixing dashboards than building intelligence. What if you could eliminate BI complexity, convert brittle logic into governed semantic models, and prepare your entire analytics stack for AI—in weeks, not quarters?",
        discoveryQuestions: [
          "How much time does your team spend maintaining existing dashboards versus building new capabilities?",
          "What happens when a key metric definition changes—how long does it take to update everywhere?",
          "Are you confident your current BI stack can support AI agents and intelligent applications?"
        ],
        valueProps: [
          "Convert brittle dashboard logic into governed, reusable semantic models",
          "Fix modeling drift and ensure consistent metrics across all tools",
          "Enterprise governance that prepares your stack for AI at scale"
        ],
        secondaryPillar: "AI Architecture",
        secondaryReason: "for platform leaders evaluating long-term architecture strategy",
        color: "cyan"
      };
    }

    // AI Architecture - CTOs/Architects focused on platform strategy
    if (persona === "cto" || painPoint === "architecture-fragmentation") {
      return {
        pillar: "ai-architecture",
        pillarName: "AI Architecture",
        confidence: 93,
        reason: "Best for Platform & Data Leaders building scalable, AI-ready architecture",
        talkTrack: "I noticed platform teams are struggling with fragmented toolchains that slow AI delivery. What if you could replace 7+ separate tools with one unified Intelligence Layer—complete with semantic modeling, AI reasoning governance, and production-ready apps?",
        discoveryQuestions: [
          "Is your current data architecture capable of delivering AI-powered experiences in production?",
          "How many tools are involved in delivering a single dashboard or AI output today?",
          "Are you focused on governance and lineage, or just performance and storage?",
          "Do your semantic definitions connect to real-time decisions and actions—or are they just reference metadata?"
        ],
        valueProps: [
          "Unified Intelligence Layer replaces fragmented stacks and accelerates time-to-value",
          "Production-grade platform with native multi-tenancy and secure isolation",
          "AI-native by design—built for agents, assistants, and multi-step reasoning"
        ],
        secondaryPillar: "AI Modernization",
        secondaryReason: "for data teams modernizing existing BI infrastructure",
        color: "blue"
      };
    }

    // Default fallback - Decision Intelligence
    return {
      pillar: "decision-intelligence",
      pillarName: "Decision Intelligence",
      confidence: 85,
      reason: "Recommended starting point for most enterprise buyers",
      talkTrack: "Based on your profile, I'd recommend starting with Decision Intelligence—it's the fastest way to demonstrate value by transforming how your business makes data-driven decisions.",
      discoveryQuestions: [
        "What's the biggest bottleneck in your current decision-making process?",
        "How do your executives currently access and interpret data?",
        "What would change if your data could proactively recommend actions?"
      ],
      valueProps: [
        "AI-powered analysis on demand",
        "Trusted, governed intelligence",
        "ROI you can measure"
      ],
      color: "purple"
    };
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Generate recommendation
      const rec = getRecommendation();
      setRecommendation(rec);
      setStep(4); // Results page
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setStep(1);
    setPersona(null);
    setPainPoint(null);
    setIndustry(null);
    setRecommendation(null);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (recommendation) {
      navigator.clipboard.writeText(recommendation.talkTrack);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const canProceed = () => {
    if (step === 1) return persona !== null;
    if (step === 2) return painPoint !== null;
    if (step === 3) return industry !== null;
    return false;
  };

  const getPersonaLabel = (p: BuyerPersona) => {
    const labels = {
      ceo: "CEO/CFO/COO",
      cpo: "CPO/VP Product",
      cdo: "CDO/VP Analytics",
      cto: "CTO/Enterprise Architect"
    };
    return p ? labels[p] : "";
  };

  const getPainPointLabel = (pp: PainPoint) => {
    const labels = {
      "slow-decisions": "Slow Decision-Making",
      "product-differentiation": "Product Differentiation",
      "bi-complexity": "BI Complexity & Technical Debt",
      "architecture-fragmentation": "Fragmented Architecture"
    };
    return pp ? labels[pp] : "";
  };

  const getIndustryLabel = (i: Industry) => {
    const labels = {
      finance: "Finance/Banking",
      saas: "SaaS/Software",
      enterprise: "Enterprise/F500",
      "cloud-native": "Cloud-Native/Data-Intensive"
    };
    return i ? labels[i] : "";
  };

  // Wizard Steps
  if (step <= 3) {
    return (
      <Layout>
        <section className="py-20 min-h-screen">
          <div className="container max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Playbook Selector</span>
              </div>
              
              <h1 className="font-outfit font-bold text-5xl text-white mb-4">
                Find Your Perfect <span className="text-gradient">Play</span>
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Answer 3 quick questions to get a personalized playbook recommendation
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-3 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    s === step 
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white' 
                      : s < step 
                      ? 'bg-primary/30 text-primary' 
                      : 'bg-white/10 text-muted-foreground'
                  }`}>
                    {s < step ? <CheckCircle2 className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-1 rounded-full ${s < step ? 'bg-primary' : 'bg-white/10'}`} />
                  )}
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mb-8">Step {step} of 3</p>

            {/* Question Card */}
            <div className="glass-card p-12 rounded-2xl mb-8">
              {/* Step 1: Buyer Persona */}
              {step === 1 && (
                <div>
                  <h2 className="font-outfit text-3xl font-bold text-white mb-8 text-center">
                    Who is your primary buyer?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setPersona("ceo")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        persona === "ceo"
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-white/10 bg-white/5 hover:border-purple-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">👔</span>
                        </div>
                        <div>
                          <h3 className="font-outfit text-lg font-bold text-white mb-2">CEO/CFO/COO</h3>
                          <p className="text-sm text-muted-foreground">
                            Executives focused on business strategy, financial growth, and operational efficiency.
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setPersona("cpo")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        persona === "cpo"
                          ? 'border-pink-500 bg-pink-500/10'
                          : 'border-white/10 bg-white/5 hover:border-pink-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🚀</span>
                        </div>
                        <div>
                          <h3 className="font-outfit text-lg font-bold text-white mb-2">CPO/VP Product</h3>
                          <p className="text-sm text-muted-foreground">
                            Leaders driving product vision, development lifecycles, and market innovation.
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setPersona("cdo")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        persona === "cdo"
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-white/5 hover:border-cyan-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">📊</span>
                        </div>
                        <div>
                          <h3 className="font-outfit text-lg font-bold text-white mb-2">CDO/VP Analytics</h3>
                          <p className="text-sm text-muted-foreground">
                            Experts responsible for data strategy, governance, and deriving actionable insights.
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setPersona("cto")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        persona === "cto"
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🏗️</span>
                        </div>
                        <div>
                          <h3 className="font-outfit text-lg font-bold text-white mb-2">CTO/Enterprise Architect</h3>
                          <p className="text-sm text-muted-foreground">
                            Technology leaders managing IT infrastructure, security, and scalable solutions.
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Pain Point */}
              {step === 2 && (
                <div>
                  <h2 className="font-outfit text-3xl font-bold text-white mb-8 text-center">
                    What's the primary challenge?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setPainPoint("slow-decisions")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        painPoint === "slow-decisions"
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-white/10 bg-white/5 hover:border-purple-500/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">⏱️ Slow Decision-Making</h3>
                      <p className="text-sm text-muted-foreground">
                        Leadership needs faster, smarter decisions with AI-driven insights
                      </p>
                    </button>

                    <button
                      onClick={() => setPainPoint("product-differentiation")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        painPoint === "product-differentiation"
                          ? 'border-pink-500 bg-pink-500/10'
                          : 'border-white/10 bg-white/5 hover:border-pink-500/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">🎯 Product Differentiation</h3>
                      <p className="text-sm text-muted-foreground">
                        Product needs intelligent features that drive adoption and revenue
                      </p>
                    </button>

                    <button
                      onClick={() => setPainPoint("bi-complexity")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        painPoint === "bi-complexity"
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-white/5 hover:border-cyan-500/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">🔧 BI Complexity & Technical Debt</h3>
                      <p className="text-sm text-muted-foreground">
                        Analytics stack is slow, brittle, and not AI-ready
                      </p>
                    </button>

                    <button
                      onClick={() => setPainPoint("architecture-fragmentation")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        painPoint === "architecture-fragmentation"
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-white/10 bg-white/5 hover:border-blue-500/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">🏗️ Fragmented Architecture</h3>
                      <p className="text-sm text-muted-foreground">
                        Need scalable, unified, AI-native intelligence platform
                      </p>
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Industry */}
              {step === 3 && (
                <div>
                  <h2 className="font-outfit text-3xl font-bold text-white mb-8 text-center">
                    What's your industry or company type?
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setIndustry("finance")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        industry === "finance"
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-white/5 hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">🏦 Finance/Banking</h3>
                      <p className="text-sm text-muted-foreground">
                        Financial services, banking, insurance, fintech
                      </p>
                    </button>

                    <button
                      onClick={() => setIndustry("saas")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        industry === "saas"
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-white/5 hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">💻 SaaS/Software</h3>
                      <p className="text-sm text-muted-foreground">
                        Software companies, SaaS platforms, martech, ISVs
                      </p>
                    </button>

                    <button
                      onClick={() => setIndustry("enterprise")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        industry === "enterprise"
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-white/5 hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">🏢 Enterprise/F500</h3>
                      <p className="text-sm text-muted-foreground">
                        Large enterprises, Fortune 500, global corporations
                      </p>
                    </button>

                    <button
                      onClick={() => setIndustry("cloud-native")}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        industry === "cloud-native"
                          ? 'border-primary bg-primary/10'
                          : 'border-white/10 bg-white/5 hover:border-primary/50'
                      }`}
                    >
                      <h3 className="font-outfit text-lg font-bold text-white mb-2">☁️ Cloud-Native/Data-Intensive</h3>
                      <p className="text-sm text-muted-foreground">
                        Cloud platforms, data infrastructure, analytics companies
                      </p>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                onClick={handleBack}
                disabled={step === 1}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="gap-2 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600"
              >
                {step === 3 ? 'Get Recommendation' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Results Page
  return (
    <Layout>
      <section className="py-20 min-h-screen">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recommendation Header */}
              <div className={`glass-card p-8 rounded-2xl border-2 border-${recommendation?.color}-500/30`}>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${recommendation?.color}-500 to-${recommendation?.color}-600 flex items-center justify-center flex-shrink-0`}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">We recommend:</p>
                      <h1 className="font-outfit text-4xl font-bold text-white mb-3">
                        {recommendation?.pillarName}
                      </h1>
                      <p className="text-lg text-muted-foreground">
                        {recommendation?.reason}
                      </p>
                    </div>
                  </div>
                  <div className={`px-6 py-3 rounded-full bg-${recommendation?.color}-500/20 border border-${recommendation?.color}-500/50 flex-shrink-0`}>
                    <p className="text-2xl font-bold text-white">{recommendation?.confidence}%</p>
                    <p className="text-xs text-muted-foreground">Match</p>
                  </div>
                </div>
              </div>

              {/* Talk Track */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                  <h2 className="font-outfit text-xl font-bold text-white">Your Opening Talk Track</h2>
                </div>
                <p className="text-white leading-relaxed mb-4">
                  "{recommendation?.talkTrack}"
                </p>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </Button>
              </div>

              {/* Discovery Questions */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-xl">❓</span>
                  </div>
                  <h2 className="font-outfit text-xl font-bold text-white">Top {recommendation?.discoveryQuestions.length} Discovery Questions</h2>
                </div>
                <div className="space-y-3">
                  {recommendation?.discoveryQuestions.map((q, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-primary font-bold flex-shrink-0">{i + 1}.</span>
                      <p className="text-white">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-xl">⭐</span>
                  </div>
                  <h2 className="font-outfit text-xl font-bold text-white">Key Value Proposition</h2>
                </div>
                <div className="space-y-2">
                  {recommendation?.valueProps.map((vp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-primary">•</span>
                      <p className="text-white">{vp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${recommendation?.pillar}`} className="flex-1">
                  <Button className="w-full gap-2 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600">
                    View Full {recommendation?.pillarName} Playbook
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              <Button 
                onClick={() => {
                  if (recommendation) {
                    generateRecommendationPDF({
                      pillarName: recommendation.pillarName,
                      confidence: recommendation.confidence,
                      reason: recommendation.reason,
                      talkTrack: recommendation.talkTrack,
                      discoveryQuestions: recommendation.discoveryQuestions,
                      valueProps: recommendation.valueProps,
                      persona: getPersonaLabel(persona),
                      painPoint: getPainPointLabel(painPoint),
                      industry: getIndustryLabel(industry)
                    });
                  }
                }}
                variant="outline" 
                className="flex-1 gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF Summary
              </Button>
              </div>

              {/* Secondary Recommendation */}
              {recommendation?.secondaryPillar && (
                <div className="text-center py-4">
                  <p className="text-muted-foreground">
                    Also consider: <span className="text-white font-semibold">{recommendation.secondaryPillar}</span> {recommendation.secondaryReason}
                  </p>
                </div>
              )}

              {/* Start Over */}
              <div className="text-center">
                <Button onClick={handleReset} variant="ghost" className="gap-2">
                  Start Over
                </Button>
              </div>
            </div>

            {/* Sidebar - Your Selections */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 rounded-xl sticky top-24">
                <h3 className="font-outfit text-lg font-bold text-white mb-6">Your Selections</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">👤</span>
                      <p className="text-sm text-muted-foreground">Persona:</p>
                    </div>
                    <p className="text-white font-medium pl-7">{getPersonaLabel(persona)}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🎯</span>
                      <p className="text-sm text-muted-foreground">Pain Point:</p>
                    </div>
                    <p className="text-white font-medium pl-7">{getPainPointLabel(painPoint)}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">🏢</span>
                      <p className="text-sm text-muted-foreground">Industry:</p>
                    </div>
                    <p className="text-white font-medium pl-7">{getIndustryLabel(industry)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
