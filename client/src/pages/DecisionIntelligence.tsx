import { useAuth } from "@/_core/hooks/useAuth";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import SectionNumber from "@/components/SectionNumber";
import QuickNavigation from "@/components/QuickNavigation";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, Brain, CheckCircle2, XCircle, Target, TrendingUp, AlertTriangle, Zap, Shield, Users, Code, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function DecisionIntelligence() {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    document.title = "Decision Intelligence | GoodData Playbook";
  }, []);

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
    { id: "positioning-messaging", label: "Positioning & Messaging", number: "07" },
    { id: "competitive-landmines", label: "Competitive Landmines", number: "08" },
    { id: "objections", label: "Common Objections & Responses", number: "09" },
    { id: "competitive-summary", label: "Competitive Summary", number: "10" },
    { id: "linkedin-ads", label: "LinkedIn Ad Examples", number: "11" },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <Layout>
      {/* Breadcrumb Navigation */}
      <div className="container pt-8 pb-4">
        <Breadcrumb items={[
          { label: "Our Plays", path: "/four-pillars" },
          { label: "Decision Intelligence" }
        ]} />
      </div>
      
      <QuickNavigation sections={sections} color="purple" />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400">For Business Leaders</span>
            </div>
            
            <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient">
              Decision Intelligence
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform static BI into Decision Intelligence built for the AI era—analytics that go beyond dashboards to deliver AI-driven, actionable insights and next-best recommendations.
            </p>

            <Link href="/resources">
              <Button size="lg" className="gap-2">
                View Resources <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section id="value-proposition" className="py-16 bg-gradient-to-b from-transparent to-background">
        <div className="container">
          <SectionNumber number="01" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Value Proposition</h2>
            <div className="glass-card p-8 border-l-4 border-purple-500">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Transform static BI into <strong className="text-foreground">Decision Intelligence</strong> built for the AI era—analytics that go beyond dashboards to deliver AI-driven, actionable insights and next-best recommendations based on governed, explainable data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pain Points Solved */}
      <section id="core-pain-points" className="py-16">
        <div className="container">
          <SectionNumber number="02" color="purple" />
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Core Pain Points Solved</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: XCircle,
                  title: "No \"Why\" or \"What Next\"",
                  desc: "Dashboards show the \"what,\" but not the \"why\" or \"what to do next\"."
                },
                {
                  icon: AlertTriangle,
                  title: "Analyst Dependency",
                  desc: "Executives can't get real-time answers to ad-hoc questions without analyst support."
                },
                {
                  icon: TrendingUp,
                  title: "Inconsistent Definitions",
                  desc: "Data definitions are inconsistent, leading to mistrust and rework."
                },
                {
                  icon: Brain,
                  title: "Not AI-Compatible",
                  desc: "Current analytics aren't AI-compatible: they lack context, structure, and governance."
                }
              ].map((pain, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <pain.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{pain.title}</h3>
                      <p className="text-sm text-muted-foreground">{pain.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Context */}
      <section id="ai-era-context" className="py-16 bg-gradient-to-b from-transparent to-background/50">
        <div className="container">
          <SectionNumber number="03" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">AI Era Context</h2>
            <div className="space-y-6">
              <div className="glass-card p-6 border-l-4 border-cyan-500">
                <div className="flex items-start gap-3 mb-3">
                  <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg">Decision Latency is a Competitive Liability</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  In the AI era, decision latency is a competitive liability. Teams that can't move from insight to action instantly will be left behind.
                </p>
              </div>

              <div className="glass-card p-6 border-l-4 border-purple-500">
                <div className="flex items-start gap-3 mb-3">
                  <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg">LLMs Need Context, Not Just Data</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  LLMs and AI agents need context, not just data. Decision Intelligence empowers AI to deliver reliable, explainable answers grounded in business truth.
                </p>
              </div>

              <div className="glass-card p-6 border-l-4 border-pink-500">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-lg">AI Without Governance is a Risk</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  AI without governance is a risk. Decision Intelligence ensures explainability, traceability, and control—making AI trustworthy and enterprise-safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board-Level Relevance */}
      <section id="board-level-relevance" className="py-16">
        <div className="container">
          <SectionNumber number="04" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Board-Level Relevance</h2>
            <div className="glass-card p-8 bg-gradient-to-br from-purple-500/5 to-transparent border-2 border-purple-500/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Strategic AI Transformation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Boards and executive teams are now setting AI transformation targets. Every sales interaction should begin with research into the organization's AI initiatives, public AI statements, and C-level AI-related hiring.
                  </p>
                </div>
              </div>
              
              <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <p className="text-sm font-medium text-purple-400 mb-2">Field Directive:</p>
                <p className="text-sm text-muted-foreground">
                  Every AE or SDR should research the target account's AI strategy, board-level AI directives, and any public GenAI commitments before a first call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Making Your Data Work for You */}
      <section id="making-data-work" className="py-16 bg-gradient-to-b from-transparent to-background/50">
        <div className="container">
          <SectionNumber number="05" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Making Your Data Work for You</h2>
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reusable Intelligence Layer</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Traditional BI creates isolated outputs. GoodData transforms your data into a reusable, governed intelligence layer that can power every decision—human or machine.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <GitBranch className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Analytics-as-Code Architecture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our analytics-as-code architecture means logic is version-controlled, auditable, and composable—enabling rapid development, iteration, and scale.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Code className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Accelerate with Cursor</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Using Cursor, you can extract buried dashboard logic and convert it into governed, AI-readable definitions in a fraction of the time—accelerating your AI readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Discovery Questions */}
      <section id="discovery-questions" className="py-16">
        <div className="container">
          <SectionNumber number="06" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Discovery Questions</h2>
            <div className="space-y-4">
              {[
                "How do you currently turn data into decisions? Is the process real-time, or dependent on analysts?",
                "Do you trust that every team is working off the same definition of key metrics like revenue or churn?",
                "What happens when leadership asks \"why\" something changed—can you answer that immediately?",
                "Have you started exploring AI use cases in analytics? If so, what's blocking broader adoption?"
              ].map((question, i) => (
                <div key={i} className="glass-card p-6 hover:bg-white/5 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-purple-400">{i + 1}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning & Messaging */}
      <section id="positioning-messaging" className="py-16 bg-gradient-to-b from-transparent to-background/50">
        <div className="container">
          <SectionNumber number="07" color="purple" />
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Positioning & Messaging</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "From BI to Decision Intelligence",
                  desc: "It's not about replacing dashboards—it's about transforming them into conversation-ready, AI-augmented guidance tools."
                },
                {
                  title: "Built for AI, Grounded in Trust",
                  desc: "GoodData delivers insights powered by AI, but governed by semantics. Answers aren't just fast—they're right."
                },
                {
                  title: "One Language for Humans and Machines",
                  desc: "With a shared semantic layer, every team and every AI assistant uses the same definitions and logic."
                },
                {
                  title: "Your Analytics, AI-Ready",
                  desc: "GoodData makes your existing data and workflows usable by AI, without needing to start from scratch."
                },
                {
                  title: "Analytics as Code",
                  desc: "Build and scale faster using Git-based workflows and programmatic metric creation. GoodData turns analytics into durable, agile infrastructure."
                }
              ].map((msg, i) => (
                <div key={i} className="glass-card p-6 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-lg mb-3 text-purple-400">{msg.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{msg.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Landmines */}
      <section id="competitive-landmines" className="py-16">
        <div className="container">
          <SectionNumber number="08" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Competitive Landmines to Drop</h2>
            <div className="space-y-4">
              {[
                "Legacy BI tools weren't built for AI. Ask competitors how they ensure AI outputs are governed and explainable—most can't.",
                "\"Chatbot over dashboard\" is a gimmick if the data lacks semantic structure. Without it, AI returns hallucinations, not insights.",
                "Point AI tools can't scale across departments because they lack shared metrics and trust.",
                "Most platforms still require manual dashboard rebuilds. GoodData + Cursor lets you convert logic in days, not months."
              ].map((landmine, i) => (
                <div key={i} className="glass-card p-6 bg-gradient-to-r from-red-500/5 to-transparent border-l-4 border-red-500">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{landmine}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Objections & Responses */}
      <section id="objections" className="py-16 bg-gradient-to-b from-transparent to-background/50">
        <div className="container">
          <SectionNumber number="09" color="purple" />
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Objections & Suggested Responses</h2>
            <div className="space-y-6">
              {[
                {
                  objection: "We already have dashboards that work fine.",
                  response: "Dashboards show what happened. Decision Intelligence shows why it happened and what to do next—in the language of business."
                },
                {
                  objection: "We aren't ready for AI.",
                  response: "That's exactly why we focus on governance-first AI. We give your teams a safe, structured way to adopt AI that builds trust—not risk."
                },
                {
                  objection: "This sounds like a replacement.",
                  response: "We don't replace your infrastructure. We make it AI-ready. GoodData layers on top of your existing stack to modernize it for the next decade."
                }
              ].map((obj, i) => (
                <div key={i} className="glass-card p-6">
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-400 mb-1">Objection:</p>
                        <p className="text-muted-foreground italic">"{obj.objection}"</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pl-11">
                    <div>
                      <p className="font-semibold text-green-400 mb-1">Response:</p>
                      <p className="text-muted-foreground">"{obj.response}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Competitive Summary */}
      <section id="competitive-summary" className="py-16 border-t border-white/5">
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
      <section id="linkedin-ads" className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-bold text-primary/20">11</div>
              <h2 className="text-3xl font-outfit font-bold text-white">
                LinkedIn Ad Examples · Decision Intelligence
              </h2>
            </div>

            <div className="glass-panel p-8 rounded-3xl" style={{
              background: 'radial-gradient(circle at top left, rgba(168, 85, 247, 0.15) 0%, rgba(147, 51, 234, 0.05) 40%, transparent 80%)'
            }}>
              <div className="mb-8">
                <p className="text-muted-foreground text-sm">
                  Example creatives for Decision Intelligence—designed to feel like real LinkedIn ads for business and functional leaders.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/linkedin-ads-decision-intelligence.png" 
                  alt="LinkedIn Ad Examples for Decision Intelligence - Six ad variations covering data-driven decision making, AI recommendations, and proactive intelligence"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Link */}
      <section className="py-16 border-t border-white/5">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-muted-foreground">
              Looking for sales assets, battle cards, and messaging guides?
            </p>
            <Link href="/resources">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                View All Resources
                <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
