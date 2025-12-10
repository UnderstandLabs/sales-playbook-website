import { Link } from "wouter";
import { ArrowRight, Brain, Zap, Shield, Code, Target, AlertTriangle, CheckCircle2, TrendingUp, Layers, Cpu, Database, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useAuth } from "@/_core/hooks/useAuth";
import { useEffect, useState } from "react";

export default function PositioningIntelligence() {
  const { isAuthenticated, loading } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.title = "Positioning Intelligence | GoodData Playbook";
  }, []);

  if (loading || !mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Please log in to view this content.</p>
          <Link href="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-background" />
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              <Brain className="w-4 h-4" />
              Core Competitive Positioning
            </div>
            
            <h1 className="text-5xl md:text-7xl font-outfit font-bold leading-tight">
              The <span className="text-gradient from-purple-400 via-cyan-400 to-blue-400">Intelligence Layer</span>
            </h1>
            
            <p className="text-2xl text-foreground leading-relaxed max-w-4xl mx-auto">
              GoodData is the Intelligence Layer that turns your existing data stack into a governed, AI-ready system of intelligence that your copilots, agents, dashboards, and decisions rely on.
            </p>

            <div className="glass-panel p-8 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We do not compete feature-for-feature with BI visualization tools. <span className="text-foreground font-semibold">They render charts. We provide the semantic brain and orchestration layer that makes AI work reliably across your enterprise.</span>
              </p>
            </div>

            <div className="pt-6">
              <a 
                href="https://drive.google.com/file/d/1-nWtZ-OPwgZFhjWYR5_w7Jq1Rbvw3NlA/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-bold text-lg transition-all duration-200 shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                Watch: Intelligence Layer Explained
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The 2026 Reality Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                The 2026 Reality: Every Company Needs an AI Data Strategy
              </h2>
              <p className="text-xl text-red-400 font-semibold">And most companies don't have one.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-panel p-8 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-white">What You Need</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "An AI-ready semantic foundation",
                    "A unified intelligence layer to govern business logic",
                    "Context-aware data that copilots and agents can understand",
                    "A way to go from prototype → production without architectural failure"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel p-8 space-y-4 border-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-outfit font-bold text-white">The Uncomfortable Truth</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-red-400">
                    95% of AI pilots have failed—not because the models didn't work, but because the data wasn't ready for AI.
                  </p>
                  <p className="text-muted-foreground">
                    Executives believe they have "lots of data," but they don't have <span className="text-foreground font-semibold">AI-usable data</span>:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Logic trapped in dashboards</li>
                    <li>• Inconsistent metric definitions</li>
                    <li>• Siloed pipelines</li>
                    <li>• No machine-readable context</li>
                    <li>• BI tools that can't explain their own semantics</li>
                    <li>• No way for AI to know what revenue, churn, or customer actually mean</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass-panel p-8 bg-gradient-to-br from-red-500/5 to-orange-500/5 border-red-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-foreground">
                    "If your AI agents can't understand your metrics, workflows, or business logic, they'll hallucinate, miscalculate, or fail silently. And your competitors who solve this first will widen the gap immediately."
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-green-400 font-semibold mb-1">Prototype success</p>
                      <p className="text-sm text-muted-foreground">= misleading optimism</p>
                    </div>
                    <div>
                      <p className="text-red-400 font-semibold mb-1">Production failure</p>
                      <p className="text-sm text-muted-foreground">= strategic disaster</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-purple-400 mt-4">
                    Only an Intelligence Layer removes this risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Legacy BI Tools Cannot Deliver AI */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                Why Legacy BI Tools Cannot Deliver AI
              </h2>
              <p className="text-xl text-muted-foreground">
                Traditional dashboards were built for humans—not AI.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-3">What They Lack:</h3>
                  <ul className="space-y-2">
                    {[
                      "A semantic layer",
                      "Machine-readable context",
                      "Metric consistency",
                      "Reusable definitions",
                      "Entity relationships",
                      "Governance for AI",
                      "APIs to express business meaning",
                      "The ability to answer \"why\" without a human analyst"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-red-400">×</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">The Result:</h3>
                  <ul className="space-y-3">
                    {[
                      { icon: AlertTriangle, text: "Dashboards are dead ends" },
                      { icon: AlertTriangle, text: "AI copilots hallucinate" },
                      { icon: AlertTriangle, text: "Data teams drown in support tickets" },
                      { icon: AlertTriangle, text: "Companies never reach production scale" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-lg font-semibold text-center text-gradient from-red-400 to-orange-400">
                  "Every dashboard reinventing the same metrics is why your AI doesn't work today."
                </p>
              </div>
            </div>

            {/* Hidden Costs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-panel p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-outfit font-bold text-white">Brittleness & Sprawl</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Each dashboard encodes its own logic</li>
                  <li>• Hundreds of reports contradict each other</li>
                  <li>• Maintenance is a hidden tax eating 40–60% of data team cycles</li>
                  <li>• Dashboards get stale → "trashboards"</li>
                </ul>
              </div>

              <div className="glass-panel p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-orange-400" />
                  <h3 className="text-lg font-outfit font-bold text-white">Slowness</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• New question = new dashboard pipeline</li>
                  <li>• Weeks of modeling, reviews, and UX</li>
                  <li>• No ability to ask follow-up questions</li>
                </ul>
              </div>

              <div className="glass-panel p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-lg font-outfit font-bold text-white">Low Adoption</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Only 25% of employees use BI tools</li>
                  <li>• Executives avoid them</li>
                  <li>• Analysts serve as intermediaries → slow decision cycles</li>
                </ul>
              </div>

              <div className="glass-panel p-6 space-y-4 border-red-500/20">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-outfit font-bold text-white">AI Failure Point</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Raw tables + dashboards = no semantics. LLMs misinterpret metrics → wrong answers.
                </p>
                <p className="text-sm font-semibold text-red-400">
                  "Traditional dashboards can't keep up with the pace of modern business questions—or AI."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Presentation: Intelligence Beyond The Dashboard */}
      <section className="py-16 border-t border-white/5 bg-gradient-to-b from-background to-purple-500/5">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                <FileText className="w-4 h-4" />
                Featured Presentation
              </div>
              <h2 className="text-4xl font-outfit font-bold text-white">
                Intelligence Beyond The Dashboard
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive visual guide to understanding why traditional BI fails in the AI era and how the Intelligence Layer changes everything.
              </p>
            </div>

            <div className="glass-panel p-8 space-y-6">
              <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg border border-white/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center">
                    <FileText className="w-10 h-10 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-outfit font-bold text-white mb-2">15-Page Visual Story</h3>
                    <p className="text-muted-foreground mb-4">Explore how the Intelligence Layer solves the 95% AI pilot failure rate</p>
                    <a 
                      href="/Intelligence_Beyond_The_Dashboard.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
                    >
                      <FileText className="w-5 h-5" />
                      View Full Presentation
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-white">The Problem</h3>
                  <p className="text-sm text-muted-foreground">Why dashboards are dead ends for AI and the hidden costs of dashboard-centric analytics</p>
                </div>

                <div className="glass-panel p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-white">The Solution</h3>
                  <p className="text-sm text-muted-foreground">How the Intelligence Layer provides unified semantics, AI-ready context, and governance</p>
                </div>

                <div className="glass-panel p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-white">The Impact</h3>
                  <p className="text-sm text-muted-foreground">Business outcomes: 60% faster insights, trusted AI, and democratized data access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the Intelligence Layer Is */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                What the Intelligence Layer Is
              </h2>
              <p className="text-xl text-gradient from-purple-400 to-cyan-400 font-semibold">
                (and Why It Changes Everything)
              </p>
            </div>

            <div className="glass-panel p-8 bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
              <p className="text-xl text-center text-foreground leading-relaxed mb-6">
                The Intelligence Layer sits <span className="text-purple-400 font-semibold">above your warehouse</span> and <span className="text-cyan-400 font-semibold">below your AI Interface</span>. In GoodData, copilots, and AI agents. We go beyond just being a semantic tool and provide the complete Intelligence Layer and front end for consuming your intelligence.
              </p>
              <p className="text-lg text-center text-muted-foreground">
                It is the missing piece that makes data understandable, trustworthy, consistent, and actionable for every system and user.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Unified Semantic Model",
                  description: "Revenue, churn, LTV defined once—used everywhere",
                  color: "purple"
                },
                {
                  icon: Brain,
                  title: "AI-Ready Context",
                  description: "AI understands business language, not raw SQL",
                  color: "cyan"
                },
                {
                  icon: Shield,
                  title: "Governance & Guardrails",
                  description: "Prevents hallucinations + metric drift",
                  color: "blue"
                },
                {
                  icon: Code,
                  title: "Analytics-as-Code",
                  description: "Versioned, testable, deployable logic",
                  color: "green"
                },
                {
                  icon: TrendingUp,
                  title: "Decision Intelligence",
                  description: "Narrative explanations, reasons, and recommendations",
                  color: "pink"
                },
                {
                  icon: Cpu,
                  title: "Works Across All Surfaces",
                  description: "Dashboards, apps, copilots, workflows, agents",
                  color: "amber"
                }
              ].map((capability, idx) => (
                <div key={idx} className="glass-panel p-6 space-y-3 hover:border-primary/30 transition-colors">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${capability.color}-500/20 to-${capability.color}-600/20 border border-${capability.color}-500/30 flex items-center justify-center`}>
                    <capability.icon className={`w-6 h-6 text-${capability.color}-400`} />
                  </div>
                  <h3 className="text-lg font-outfit font-bold text-white">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </div>
              ))}
            </div>

            <div className="glass-panel p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
              <p className="text-2xl font-semibold text-center text-gradient from-purple-400 to-cyan-400 leading-relaxed">
                "You can't scale AI on pipelines and dashboards. You need machine-readable business logic, not just data."
              </p>
              <p className="text-center text-muted-foreground mt-4">
                This layer turns data pipelines into intelligence supply chains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why GoodData Is the Intelligence Layer */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                Why GoodData Is the Intelligence Layer
              </h2>
              <p className="text-xl text-muted-foreground">
                GoodData is the only platform that delivers:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: "1",
                  title: "Governed Semantic Layer (AI-Ready)",
                  description: "Your entire business's logic, defined once and applied everywhere."
                },
                {
                  number: "2",
                  title: "Multi-Tenant Intelligence Engine",
                  description: "For enterprise scale and SaaS products."
                },
                {
                  number: "3",
                  title: "Analytics-as-Code",
                  description: "A developer-first way to build semantic logic fast."
                },
                {
                  number: "4",
                  title: "AI Reasoning Governance",
                  description: "Every AI answer is explainable and traceable."
                },
                {
                  number: "5",
                  title: "Embedded Intelligence for Products",
                  description: "Ship insights, copilots, and agents inside your product."
                },
                {
                  number: "6",
                  title: "Complement to Snowflake/Databricks",
                  description: "We use your warehouse as the foundation—we do NOT replace it."
                },
                {
                  number: "7",
                  title: "High-Value Engineering Pods",
                  description: "We co-build MVP → production in 12 weeks."
                },
                {
                  number: "8",
                  title: "Partnership-in-Action Model",
                  description: "Measurable outcomes, customer independence, fast time to value."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass-panel p-6 space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-gradient from-purple-400 to-cyan-400">{item.number}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-outfit font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                Competitive Positioning: Why We Don't Compare Features
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-panel p-8 space-y-4 border-red-500/20">
                <h3 className="text-2xl font-outfit font-bold text-red-400">BI Tools Compete On:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dashboards, filters, visuals, SQL modeling</li>
                </ul>
              </div>

              <div className="glass-panel p-8 space-y-4 border-green-500/20">
                <h3 className="text-2xl font-outfit font-bold text-green-400">GoodData Competes On:</h3>
                <ul className="space-y-2 text-foreground">
                  <li>• AI readiness</li>
                  <li>• Enterprise decision velocity</li>
                  <li>• System-wide consistency</li>
                  <li>• Governance</li>
                  <li>• Machine-readable business logic</li>
                  <li>• Semantic grounding for copilots</li>
                  <li>• The ability for AI to explain "why"</li>
                </ul>
              </div>
            </div>

            <div className="glass-panel p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
              <p className="text-2xl font-semibold text-center text-gradient from-purple-400 to-cyan-400 leading-relaxed">
                "We're not another BI tool. We are the Intelligence Layer that makes your BI stack—and your AI stack—actually work."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Questions */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                Discovery Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Use these to expose gaps and activate executive fear of falling behind
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "How will your organization compete in 2026 if you don't have an AI-ready data strategy?",
                "What prevents your AI copilots from giving incorrect answers today?",
                "How many versions of \"revenue\" exist in your dashboards?",
                "When executives ask follow-up questions, can your dashboards answer—or do analysts get pulled in?",
                "How long does it take to introduce or change a metric across the business?",
                "How will you reason over your data if the semantics aren't machine-readable?",
                "How will you get AI prototypes into production, not stuck in pilot?"
              ].map((question, idx) => (
                <div key={idx} className="glass-panel p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-gradient from-purple-400 to-cyan-400">{idx + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{question}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel p-6 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 border-purple-500/20">
              <p className="text-center text-lg font-semibold text-gradient from-purple-400 to-cyan-400">
                These questions consistently lead prospects to one conclusion: They need an intelligence layer immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Narrative */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-outfit font-bold text-white">
                Closing Narrative for Reps
              </h2>
            </div>

            <div className="glass-panel p-10 space-y-6 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-blue-500/10 border-purple-500/20">
              <p className="text-lg text-foreground leading-relaxed">
                "Every company now needs an AI data strategy to stay competitive. The reason 95% of AI pilots fail is because their data isn't AI-ready—definitions are inconsistent, logic is buried in dashboards, and copilots are guessing at business meaning.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                You don't fix this by buying another BI tool. You fix it by adding an Intelligence Layer—a governed semantic foundation your dashboards, applications, copilots, and agents can all rely on.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                GoodData gives you that layer. It turns your warehouse into a system of intelligence and gets AI prototypes into production—quickly, safely, and at enterprise scale.
              </p>
              
              <p className="text-xl font-semibold text-gradient from-purple-400 to-cyan-400 leading-relaxed">
                That's why we don't compete with BI tools. We complete the AI architecture every enterprise will need by 2026."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Ready to explore how the Intelligence Layer applies to your use case?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/four-pillars">
                <Button className="gap-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
                  Explore Our Plays
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="gap-2">
                  View Sales Resources
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
