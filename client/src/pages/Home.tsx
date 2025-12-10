import { useAuth } from "@/_core/hooks/useAuth";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BrainCircuit, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, loading } = useAuth();

  useEffect(() => {
    document.title = "Home | GoodData Playbook";
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login via App.tsx
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container relative z-10 flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground/80">Internal Sales Playbook 2025</span>
          </div>
          
          <h1 className="font-outfit font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-100">
            <span className="text-gradient block">GTM 2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-200">
            The AI Era Demands Readiness.
            <br className="hidden md:block" />
            Intelligence Requires a New Way to Work With Information.
            <br className="hidden md:block" />
            <span className="font-semibold text-white">Make Your Data Work for You</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both delay-300">
            <Link href="/story">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-[0_0_30px_-5px_var(--color-primary)] transition-all hover:scale-105">
                Start the Playbook <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 h-14 text-lg backdrop-blur-sm transition-all hover:scale-105">
                View Assets
              </Button>
            </Link>
          </div>
        </div>

        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
        </div>
      </section>

      {/* Learn Our Story Section */}
      <section className="py-24 bg-black/20 backdrop-blur-sm border-y border-white/5 relative">
        <div className="container">
          {/* Section Number */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <span className="font-outfit font-bold text-2xl text-gradient">01</span>
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
              Learn Our <span className="text-gradient">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From data analytics to intelligent systems — the evolution of a platform built to empower the future of AI-driven products.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* 2021: The Realization */}
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-primary">2021</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-3">The Realization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Roman Stanek envisioned a platform beyond static dashboards — one designed for <strong className="text-white">living data products</strong> that learn and evolve.
                </p>
              </div>

              {/* November 2022: The World Changed */}
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group border border-cyan-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-cyan-400">Nov 2022</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-3">The World Changed</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ChatGPT revealed the power of LLMs. Our <strong className="text-cyan-400">open, composable framework</strong> became the perfect bridge between data and intelligence.
                </p>
              </div>

              {/* 2026: The Future */}
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group border border-purple-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-purple-400">2026</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-3">Intelligence Layer Today</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The platform that transforms raw data into <strong className="text-purple-400">intelligent, AI-ready assets</strong> — powering the next generation of data products.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/story">
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all group">
                  Read the Full Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Message Teaser */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5"></div>
        <div className="container relative">
          {/* Section Number */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <span className="font-outfit font-bold text-2xl text-gradient">02</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-10 md:p-12 rounded-2xl border-2 border-primary/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Our Message</span>
                </div>
                
                <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-6">
                  Why We Are Evolving — And Why It Is <span className="text-gradient">Exactly the Right Moment</span>
                </h2>
                
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The AI Era didn't change our mission — it validated it. For five years, we've been building the foundation the market suddenly needs.
                  </p>
                  
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <p className="text-xl font-outfit font-bold text-white mb-3">
                      Our New Message Direction:
                    </p>
                    <p className="text-2xl md:text-3xl font-outfit font-bold text-gradient mb-3">
                      Make Your Data Work for You
                    </p>
                    <p className="text-muted-foreground">
                      This is not a pivot. This is the amplification of who we already are — and what we uniquely built. The old world forced people to work for their data. The AI Era requires the opposite.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Link href="/our-message">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_30px_-5px_var(--color-primary)] transition-all hover:scale-105 group">
                      Read Our Message
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Quick Navigation */}
      <section className="py-24 relative">
        <div className="container">
          {/* Section Number */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
              <span className="font-outfit font-bold text-2xl text-gradient">03</span>
            </div>
          </div>
          <div className="text-center mb-12">
            <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our <span className="text-gradient">Playbooks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right entry point based on your buyer persona and their primary pain point.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/decision-intelligence">
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BrainCircuit className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-2">Decision Intelligence</h3>
                <p className="text-sm text-muted-foreground mb-4">For Business Leaders</p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/embedded-intelligence">
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-2">Embedded Intelligence</h3>
                <p className="text-sm text-muted-foreground mb-4">For Product Leaders</p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ai-modernization">
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-2">AI Modernization</h3>
                <p className="text-sm text-muted-foreground mb-4">For Analytics & Data Teams</p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link href="/ai-architecture">
              <div className="glass-card p-6 hover:bg-white/5 transition-all duration-300 group cursor-pointer h-full">
                <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="font-outfit text-xl font-bold text-white mb-2">AI Architecture</h3>
                <p className="text-sm text-muted-foreground mb-4">For Architects & Engineering Leaders</p>
                <div className="flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>


    </Layout>
  );
}
