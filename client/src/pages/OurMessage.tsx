import Layout from "@/components/Layout";
import { Sparkles, TrendingUp, Target, Rocket, CheckCircle2, Zap } from "lucide-react";
import { useEffect } from "react";

export default function OurMessage() {
  useEffect(() => {
    document.title = "Our Message | GoodData Playbook";
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Message</span>
            </div>
            
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              Why We Are Evolving — And Why It Is <span className="text-gradient">Exactly the Right Moment</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              For the last five years, we've been building something that anticipated where the market was going long before the world caught up. Now, the market has arrived at that moment — and our story must rise to meet it.
            </p>
            
            {/* Embedded Google Slides */}
            <div className="max-w-5xl mx-auto">
              <div className="glass-card p-4 rounded-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://docs.google.com/presentation/d/1MkxBAPBZgeDx5C-0ob32Tx4xNFfoVlxGdp2eFajkZlA/embed?start=false&loop=false&delayms=3000"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    allowFullScreen
                    title="Our Message Presentation"
                  />
                </div>
              </div>
              
              {/* Sales Script Button */}
              <div className="flex justify-center mt-6">
                <a
                  href="https://docs.google.com/spreadsheets/d/1h3qslQGoDQz_1akG13F171yue2pbWt0CnNdLsKgjyig/edit?gid=0#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all text-lg group"
                >
                  <span className="text-xl">📝</span>
                  Sales Script
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Message */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 rounded-2xl mb-12">
              <div className="space-y-6 text-center">
                <p className="text-2xl font-outfit font-bold text-white">This is not a pivot.</p>
                <p className="text-2xl font-outfit font-bold text-white">This is not a reset.</p>
                <p className="text-2xl font-outfit font-bold text-white">This is not a new direction.</p>
                
                <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8"></div>
                
                <p className="text-2xl font-outfit font-bold text-gradient">
                  This is an amplification of who we already are — and what we uniquely built.
                </p>
                
                <p className="text-xl text-white mt-6">
                  The AI Era didn't change our mission. <strong className="text-primary">It validated it.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Are Shifting */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-8 h-8 text-primary" />
              <h2 className="font-outfit text-4xl font-bold text-white">
                Why We Are Shifting Our Message Now
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Across every industry, companies are realizing that the systems they relied on for decades cannot carry them into the AI Era.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 border border-red-500/20">
                <h3 className="font-outfit text-xl font-bold text-white mb-3">Dashboards Are Hitting Their Limits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  They are static, backward-looking, and require people to do the interpretation. They slow decisions rather than accelerate them.
                </p>
              </div>

              <div className="glass-card p-6 border border-red-500/20">
                <h3 className="font-outfit text-xl font-bold text-white mb-3">Data Pipelines Are Fragile</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Classic BI stacks bury logic in dashboards. Pipelines break daily. Metrics drift. Definitions live everywhere and nowhere. AI cannot reason over any of it.
                </p>
              </div>

              <div className="glass-card p-6 border border-red-500/20">
                <h3 className="font-outfit text-xl font-bold text-white mb-3">Architectural Costs Are Exploding</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Companies are spending millions to "modernize" warehouses and lakes — only to end up with faster dashboards instead of true intelligence.
                </p>
              </div>

              <div className="glass-card p-6 border border-red-500/20">
                <h3 className="font-outfit text-xl font-bold text-white mb-3">Everyone Wants AI, But Almost No One Is AI-Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The problem is not desire. The problem is foundation. The systems of the dashboard era cannot support the intelligence era.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-2xl font-outfit font-bold text-white mb-4">The market is saying clearly:</p>
              <p className="text-3xl font-outfit font-bold text-gradient mb-6">The old way is dying.</p>
              <p className="text-lg text-muted-foreground">
                Enterprises need a new operational paradigm. They need a new way to work with information. They need <strong className="text-white">intelligence — not interpretation.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is NOT Changing */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-8 h-8 text-cyan-400" />
              <h2 className="font-outfit text-4xl font-bold text-white">
                What Is <span className="text-cyan-400">NOT</span> Changing
              </h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              While our message is shifting, our underlying product strategy, architecture, and vision remain exactly the same.
            </p>

            <div className="glass-card p-8 rounded-2xl mb-8 border border-cyan-500/20">
              <h3 className="font-outfit text-2xl font-bold text-white mb-6">For five years, we have been building:</h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">A governed, machine-readable semantic layer</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">A programmable, flexible, analytics-as-code foundation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">An explainable, auditable, safe environment for AI</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">A platform that embeds intelligence directly into workflows</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <p className="text-white text-lg">An architecture designed for scale, trust, and automation</p>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We didn't build this because dashboards needed improving. We built it because the future of data was always going to be <strong className="text-white">intelligence, not visualization.</strong>
              </p>
              
              <p className="text-xl font-outfit font-bold text-white mb-4">Everything the market suddenly wants:</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div className="text-cyan-300">• AI agents</div>
                <div className="text-cyan-300">• Operational intelligence</div>
                <div className="text-cyan-300">• Automatic recommendations</div>
                <div className="text-cyan-300">• Context-aware reasoning</div>
                <div className="text-cyan-300">• Intelligent products</div>
                <div className="text-cyan-300">• AI-ready pipelines</div>
                <div className="text-cyan-300">• Modern, governed architectures</div>
              </div>

              <p className="text-2xl font-outfit font-bold text-gradient text-center">
                We already built the foundation for it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Not a Pivot */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-y border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-purple-400" />
              <h2 className="font-outfit text-4xl font-bold text-white">
                This Is Not a Pivot — It Is the <span className="text-gradient">Fulfillment of Our Original Vision</span>
              </h2>
            </div>

            <div className="glass-card p-8 rounded-2xl mb-8">
              <p className="text-xl text-white mb-4 leading-relaxed">
                A pivot means changing direction. <strong className="text-primary">We are not changing direction.</strong>
              </p>
              <p className="text-xl text-gradient font-outfit font-bold">
                We are stepping into the moment our platform was built for.
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The world is waking up to the limitations of dashboards, the failures of brittle BI pipelines, the rising costs of legacy architectures, and the operational urgency of AI readiness.
            </p>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-8">
              <h3 className="font-outfit text-2xl font-bold text-white mb-6">Everything we've built now becomes clearer to customers:</h3>
              
              <div className="space-y-3">
                <p className="text-white"><strong className="text-purple-400">→</strong> The semantic layer matters more than ever</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Governance is now a prerequisite for AI</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Analytics-as-code is the only scalable approach</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Products need embedded intelligence, not embedded dashboards</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Leaders need decision intelligence, not reports</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Data teams need automation, not continual firefighting</p>
                <p className="text-white"><strong className="text-purple-400">→</strong> Architects need openness, not lock-in</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent my-8"></div>

              <p className="text-xl text-center text-white">
                We are not shifting away from our foundation. <br />
                <strong className="text-gradient">We are elevating it into the AI narrative the market now understands.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Message */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-primary" />
              <h2 className="font-outfit text-4xl font-bold text-white">
                Why Our New Message: <span className="text-gradient">Make Your Data Work for You</span>
              </h2>
            </div>

            <div className="glass-card p-8 rounded-2xl mb-8 border border-primary/30">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The old world forced people to work for their data: Digging, drilling, filtering, reconciling, waiting, interpreting.
              </p>

              <p className="text-xl font-outfit font-bold text-white mb-4">The AI Era requires the opposite. Data must:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Explain itself</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Recommend next steps</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Trigger workflows</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Operate intelligently</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Adapt to context</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Power products</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-white">Scale safely</p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <p className="text-xl text-white text-center leading-relaxed">
                  <strong className="text-gradient">Make Your Data Work for You</strong> is not a slogan. <br />
                  It is the transformation enterprises need — and the transformation our platform delivers.
                </p>
              </div>
            </div>

            {/* Four Pillars Connection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 border border-purple-500/20">
                <h3 className="font-outfit text-lg font-bold text-purple-400 mb-2">Decision Intelligence</h3>
                <p className="text-sm text-muted-foreground">Better experiences, faster value, lower cost.</p>
              </div>

              <div className="glass-card p-6 border border-cyan-500/20">
                <h3 className="font-outfit text-lg font-bold text-cyan-400 mb-2">Embedded Intelligence</h3>
                <p className="text-sm text-muted-foreground">New revenue opportunities through product-led intelligence.</p>
              </div>

              <div className="glass-card p-6 border border-green-500/20">
                <h3 className="font-outfit text-lg font-bold text-green-400 mb-2">AI Modernization</h3>
                <p className="text-sm text-muted-foreground">Efficiency and AI readiness for BI & data teams.</p>
              </div>

              <div className="glass-card p-6 border border-pink-500/20">
                <h3 className="font-outfit text-lg font-bold text-pink-400 mb-2">AI Architecture</h3>
                <p className="text-sm text-muted-foreground">Simplicity, openness, and lower cost for engineering leaders.</p>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
              <p className="text-lg text-white leading-relaxed">
                This message speaks to every buyer. It elevates the conversation. It differentiates us from visualization-era vendors. <br />
                <strong className="text-gradient text-xl">It positions us as the platform built for the AI Era.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-6">
              What This Means for <span className="text-gradient">All of Us</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are entering a category-defining moment.
            </p>

            <div className="glass-card p-10 rounded-2xl mb-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The market is shifting from dashboards → intelligence. From pipelines → semantic automation. From BI → operational AI. From manual interpretation → autonomous workflows.
              </p>

              <p className="text-2xl font-outfit font-bold text-gradient mb-6">
                We are not chasing this change. We are leading it.
              </p>

              <p className="text-lg text-white leading-relaxed">
                Everything we've built now has the clarity, context, and narrative it deserves.
              </p>
            </div>

            <div className="bg-primary/20 border-2 border-primary/50 rounded-2xl p-10">
              <p className="text-xl text-white mb-6">Our job now is simple:</p>
              <p className="text-2xl font-outfit font-bold text-white mb-8">
                Bring this message to every customer, every partner, and every conversation.
              </p>
              
              <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8"></div>

              <p className="text-4xl font-outfit font-bold text-gradient mb-4">
                Make Your Data Work for You
              </p>
              
              <p className="text-xl text-muted-foreground">
                is more than a tagline. <br />
                It's the story of the next decade — and we are perfectly positioned to own it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Story That Sits Above—and Powers—All Four Pillars */}
      <section className="py-16 bg-black/20 backdrop-blur-sm border-y border-white/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-outfit text-4xl font-bold text-white mb-8 text-center">
              The Story That Sits Above—and Powers—<span className="text-gradient">All Our Playbooks</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
              Today's enterprises don't need more dashboards, reports, or tools that make people work with data. They need intelligence that works for them.
            </p>

            <div className="bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl p-8 mb-12">
              <p className="text-xl text-white text-center leading-relaxed">
                This is the shift GoodData enables: from static BI to active intelligence — from interpreting charts to deploying AI agents that explain, automate, and act.
              </p>
              <p className="text-2xl font-outfit font-bold text-gradient text-center mt-6">
                GoodData Makes Your Data Work for You — Automatically, Intelligently, and at Enterprise Scale.
              </p>
            </div>

            {/* 1. The Problem */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-red-400">1</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">The Problem: You Work With Data</h3>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-red-500/20">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Most organizations still operate in a world where people must dig into dashboards, interpret metrics manually, run multistep workflows, and wait on teams to take action.
                </p>
                <p className="text-white mb-4">This world is slow, reactive, and expensive. It traps analytics in the past.</p>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-xl text-white text-center">
                    Dashboards force you to <strong className="text-red-400">work with data</strong>; they don't get data working for you.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. The Shift */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">The Shift: Data Works for You</h3>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-primary/30">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  GoodData enables the leap from dashboard-centric BI to active intelligence — where AI doesn't just answer questions, but explains changes, orchestrates workflows, and even acts autonomously.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-white font-outfit">AI Capability</th>
                        <th className="text-left py-4 px-4 text-white font-outfit">What It Does</th>
                        <th className="text-left py-4 px-4 text-white font-outfit">What It Replaces</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-primary font-bold">AI Assistant</td>
                        <td className="py-4 px-4 text-muted-foreground">Answers questions instantly</td>
                        <td className="py-4 px-4 text-muted-foreground">Manual analysis</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-cyan-400 font-bold">AI Co-Pilot</td>
                        <td className="py-4 px-4 text-muted-foreground">Proactively surfaces insights</td>
                        <td className="py-4 px-4 text-muted-foreground">Hunting through dashboards</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-4 px-4 text-green-400 font-bold">AI Autopilot</td>
                        <td className="py-4 px-4 text-muted-foreground">Automates dynamic workflows</td>
                        <td className="py-4 px-4 text-muted-foreground">Rigid rules engines</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-pink-400 font-bold">AI Agent</td>
                        <td className="py-4 px-4 text-muted-foreground">Takes safe, autonomous action</td>
                        <td className="py-4 px-4 text-muted-foreground">Slow, multi-team human coordination</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                  <p className="text-white text-center">
                    This is the moment when data stops being a reporting layer and becomes an <strong className="text-gradient">operational engine</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. The Foundation */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-purple-400">3</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">The Foundation: A Platform That Operationalizes Data</h3>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                GoodData is an operational intelligence platform built on three connected layers that together make data work:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 border border-purple-500/20">
                  <h4 className="font-outfit text-xl font-bold text-purple-400 mb-3">AI Lake</h4>
                  <p className="text-sm text-white mb-4">Data That AI Can Understand</p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Unified semantic layer</p>
                    <p className="text-sm text-muted-foreground">• Analytics-as-code architecture</p>
                    <p className="text-sm text-muted-foreground">• Governed, explainable, auditable data</p>
                  </div>
                </div>

                <div className="glass-card p-6 border border-cyan-500/20">
                  <h4 className="font-outfit text-xl font-bold text-cyan-400 mb-3">AI Hub</h4>
                  <p className="text-sm text-white mb-4">Where Data Connects to Logic and Workflows</p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Workflow orchestration</p>
                    <p className="text-sm text-muted-foreground">• Models, APIs, SDKs, MCP</p>
                    <p className="text-sm text-muted-foreground">• Full governance, permissions, observability</p>
                  </div>
                </div>

                <div className="glass-card p-6 border border-green-500/20">
                  <h4 className="font-outfit text-xl font-bold text-green-400 mb-3">AI Apps</h4>
                  <p className="text-sm text-white mb-4">Where AI Works for Users</p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">• Assistants & Co-Pilots</p>
                    <p className="text-sm text-muted-foreground">• Autopilots & AI Agents</p>
                    <p className="text-sm text-muted-foreground">• Embeddable UI components</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. How It Powers All Four Pillars */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-yellow-400">⭐</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">How "Make Your Data Work for You" Underpins ALL Four Pillars</h3>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The Four Pillars are simply four expressions of the same foundational story. Here is how the Make Your Data Work narrative maps to each pillar:
              </p>

              <div className="space-y-6">
                <div className="glass-card p-6 border border-purple-500/20">
                  <h4 className="font-outfit text-lg font-bold text-purple-400 mb-2">Pillar 1 — Decision Intelligence (Business Leaders)</h4>
                  <p className="text-white mb-3">Make Your Data Work for You by turning decisions from reactive to autonomous.</p>
                  <p className="text-sm text-muted-foreground">
                    Business leaders no longer wait for analysts, dashboards, or meetings. AI Assistants and Co-Pilots give them instant clarity, trusted answers, real-time explanations, and measurable ROI.
                  </p>
                </div>

                <div className="glass-card p-6 border border-cyan-500/20">
                  <h4 className="font-outfit text-lg font-bold text-cyan-400 mb-2">Pillar 2 — Embedded Intelligence (Product Leaders)</h4>
                  <p className="text-white mb-3">Make Your Data Work for You by transforming your product into an intelligent experience.</p>
                  <p className="text-sm text-muted-foreground">
                    GoodData lets you embed AI Co-Pilots, Autopilots, and Agents directly into your product so it guides users, explains changes, automates tasks, and takes action.
                  </p>
                </div>

                <div className="glass-card p-6 border border-green-500/20">
                  <h4 className="font-outfit text-lg font-bold text-green-400 mb-2">Pillar 3 — AI Modernization (Analytics & Data Teams)</h4>
                  <p className="text-white mb-3">Make Your Data Work for You by building the semantic foundation AI requires.</p>
                  <p className="text-sm text-muted-foreground">
                    GoodData modernizes analytics by giving AI clean semantics, governed lineage, explainable metrics, and a flexible, open architecture.
                  </p>
                </div>

                <div className="glass-card p-6 border border-pink-500/20">
                  <h4 className="font-outfit text-lg font-bold text-pink-400 mb-2">Pillar 4 — AI Architecture (Architects & Engineering Leaders)</h4>
                  <p className="text-white mb-3">Make Your Data Work for You through an open, enterprise-scale architecture built for AI velocity.</p>
                  <p className="text-sm text-muted-foreground">
                    GoodData integrates seamlessly with your cloud ecosystem, unifying data (Iceberg, Arrow), logic (semantic models, analytics-as-code), and execution (AI Agents).
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary/20 to-cyan-500/20 border border-primary/30 rounded-xl p-8">
                <p className="text-2xl font-outfit font-bold text-gradient text-center mb-4">⭐ The Unified Message</p>
                <p className="text-lg text-white text-center leading-relaxed">
                  GoodData makes your data work for you by turning it into active intelligence — intelligence that explains, automates, and acts across every decision, every product, every workflow, and every architecture.
                </p>
              </div>
            </div>

            {/* 6. Why This Story Works for GTM */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-green-400">6</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-white">Why This Story Works for GTM</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Anchors in a clear, defensible problem</p>
                </div>

                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Positions GoodData as a leap, not another tool</p>
                </div>

                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Creates urgency around aging dashboard paradigms</p>
                </div>

                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Supports persona-based selling</p>
                </div>

                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Aligns cleanly to all four product pillars</p>
                </div>

                <div className="flex items-center gap-3 glass-card p-4 border border-green-500/20">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <p className="text-white">Repeats one core message across all touchpoints</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
