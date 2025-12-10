import Layout from "@/components/Layout";
import { Sparkles, Cloud, Brain, Rocket, Calendar } from "lucide-react";
import { useEffect } from "react";

export default function Story() {
  useEffect(() => {
    document.title = "Our Story | GoodData Playbook";
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
              <span className="text-sm font-medium text-primary">Our Journey</span>
            </div>
            
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              The Story Behind <span className="text-gradient">Intelligence Layer</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              From data analytics to intelligent systems — the evolution of a platform built to empower the future of AI-driven products.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            
            {/* 2021: The Realization */}
            <div className="relative pl-8 md:pl-16 pb-16 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-primary ring-4 ring-primary/20"></div>
              
              <div className="glass-card p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">2021</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                
                <h2 className="font-outfit font-bold text-3xl text-white mb-4">The Realization</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The story begins with a realization from <strong className="text-white">Roman Stanek</strong>, founder and CEO of GoodData. For years, enterprises had relied on monolithic data pipelines to deliver analytics, but something was missing.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  These systems were powerful but rigid — they could process information, yet they struggled to bring true intelligence to the customers they served.
                </p>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mt-6">
                  <h3 className="font-outfit font-bold text-xl text-white mb-3">The Bold Vision</h3>
                  <p className="text-white leading-relaxed">
                    What if, instead of static dashboards and brittle integrations, organizations could build <strong>living data products</strong> — products that learned, adapted, and evolved alongside the business?
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Roman set out to rebuild the GoodData Platform from the ground up into an open, composable, cloud-first architecture — one designed not for control, but for <strong className="text-primary">creativity</strong>. A platform where teams could bring data products to life, faster and smarter than ever before.
                  </p>
                </div>
              </div>
            </div>

            {/* November 2022: The World Changed */}
            <div className="relative pl-8 md:pl-16 pb-16 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-cyan-500 ring-4 ring-cyan-500/20"></div>
              
              <div className="glass-card p-8 rounded-2xl border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-cyan-400">November 2022</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                </div>
                
                <h2 className="font-outfit font-bold text-3xl text-white mb-4">The World Changed Overnight</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  OpenAI released <strong className="text-cyan-400">ChatGPT</strong>, and suddenly, everyone could see the power of Large Language Models (LLMs) — machines that could read, reason, and respond in human language.
                </p>

                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 mt-6">
                  <h3 className="font-outfit font-bold text-xl text-white mb-3">The Profound Realization</h3>
                  <p className="text-white leading-relaxed text-lg">
                    The very thing GoodData had been building — an <strong>open, composable, machine-readable analytics framework</strong> — was the perfect foundation for this new AI frontier.
                  </p>
                  <p className="text-cyan-300 mt-4 leading-relaxed font-bold text-xl">
                    What had started as a data platform became the bridge between data and intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* The Evolution */}
            <div className="relative pl-8 md:pl-16 pb-16 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-purple-500 ring-4 ring-purple-500/20"></div>
              
              <div className="glass-card p-8 rounded-2xl border border-purple-500/20">
                <h2 className="font-outfit font-bold text-3xl text-white mb-6">The Evolution</h2>
                <p className="text-xl text-muted-foreground mb-8">Through Waves of Transformation</p>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Through the waves of transformation — from the rise of the web, to the shift to cloud, to the revolution of Generative AI — GoodData evolved once more, giving birth to <strong className="text-primary">Intelligence Layer</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <h4 className="font-bold text-white mb-2">Rise of the Web</h4>
                    <p className="text-sm text-muted-foreground">Connected data</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                    <Rocket className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h4 className="font-bold text-white mb-2">Shift to Cloud</h4>
                    <p className="text-sm text-muted-foreground">Scalable platforms</p>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
                    <Brain className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-white mb-2">Generative AI</h4>
                    <p className="text-sm text-primary font-bold">Intelligent systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Today */}
            <div className="relative pl-8 md:pl-16 pb-16 border-l-2 border-primary/30">
              <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-green-500 ring-4 ring-green-500/20"></div>
              
              <div className="glass-card p-8 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-green-400">Today</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
                </div>
                
                <h2 className="font-outfit font-bold text-3xl text-white mb-4">The Pioneering Spirit Lives On</h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Today, <strong className="text-primary">Intelligence Layer</strong> carries forward that same pioneering spirit. It empowers Product Leaders to build AI-driven data products that don't just report information — they <strong className="text-white">think, act, and reason</strong>.
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  These are intelligent systems molded to the nuances of each industry and every customer, delivered in a fraction of the time it once took.
                </p>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mt-6">
                  <h3 className="font-outfit font-bold text-xl text-white mb-3">The Natural Evolution</h3>
                  <p className="text-white leading-relaxed">
                    From its roots in data to its future in intelligence, Intelligence Layer stands as the natural evolution of Roman Stanek's vision — a platform born to help organizations build the future of smart, adaptive, and human-centered technology.
                  </p>
                </div>
              </div>
            </div>

            {/* January 1, 2026: The Transition */}
            <div className="relative pl-8 md:pl-16">
              <div className="absolute left-0 top-0 w-6 h-6 -ml-[13px] rounded-full bg-primary ring-8 ring-primary/20 animate-pulse"></div>
              
              <div className="glass-card p-10 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <span className="text-4xl font-bold text-primary">January 1, 2026</span>
                </div>
                
                <h2 className="font-outfit font-bold text-4xl text-white mb-6">
                  Moving Beyond Dashboards to Intelligence
                </h2>
                
                <p className="text-xl text-white mb-6 leading-relaxed">
                  On January 1, 2026, GoodData officially transitions to an <strong className="text-primary">AI-first Go-To-Market strategy</strong>. This marks the culmination of years of evolution — from static reports to interactive dashboards to intelligent, reasoning systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3 text-lg">Why Now?</h4>
                    <p className="text-muted-foreground">
                      The market has reached an inflection point. Enterprises are no longer asking "Should we adopt AI?" but "How do we make AI work with our data?" GoodData is uniquely positioned to answer that question.
                    </p>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3 text-lg">The Strategic Shift</h4>
                    <p className="text-white">
                      We're not abandoning dashboards — we're <strong>transcending</strong> them. Every dashboard becomes an API. Every metric becomes AI-consumable. Every insight becomes actionable intelligence.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
                  <p className="text-2xl font-bold text-white mb-4">
                    This is not a pivot. This is the plan.
                  </p>
                  <p className="text-lg text-primary font-bold">
                    GoodBridge is how we get there.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <h2 className="font-outfit font-bold text-4xl text-white mb-6">
                Join Us on This Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of the next chapter in intelligent systems. Build the future with Intelligence Layer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/solution" 
                  className="px-8 py-4 rounded-xl bg-primary hover:bg-primary/80 text-white font-bold transition-all shadow-lg shadow-primary/20"
                >
                  Explore the Solution
                </a>
                <a 
                  href="/methodology" 
                  className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 transition-all"
                >
                  See the Methodology
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
