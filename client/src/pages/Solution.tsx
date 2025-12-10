import Layout from "@/components/Layout";
import { CheckCircle2, Database, Layers, Server } from "lucide-react";

export default function Solution() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-20">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              The Solution: <br />
              <span className="text-gradient">The AI Ready Architecture</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just store data—activate it. Build the structural foundation that makes your data work for you and your AI agents.
            </p>
          </div>

          {/* Architecture Diagram Representation */}
          <div className="relative mb-24">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch p-8">
                {/* Bottom Layer: Data Sources */}
                <div className="md:col-span-3 flex justify-center gap-8 pb-12 border-b border-white/10 relative">
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-background px-4 text-muted-foreground text-sm uppercase tracking-widest">Data Sources</div>
                    <div className="flex flex-col items-center gap-2 opacity-60">
                        <Database className="w-12 h-12 text-blue-400" />
                        <span className="text-xs font-mono">Snowflake</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-60">
                        <Server className="w-12 h-12 text-orange-400" />
                        <span className="text-xs font-mono">AWS Redshift</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 opacity-60">
                        <Database className="w-12 h-12 text-red-400" />
                        <span className="text-xs font-mono">Databricks</span>
                    </div>
                </div>

                {/* Middle Layer: The Platform Stack */}
                <div className="md:col-span-3 py-12 flex flex-col gap-6">
                    {/* Layer 3: Experience */}
                    <div className="glass-card w-full p-6 border-l-4 border-l-purple-400 relative overflow-hidden">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-purple-500/20 rounded-xl text-purple-400">
                                <span className="text-2xl">✨</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">3. Experience Layer</h3>
                                <p className="text-muted-foreground text-sm">Dashboards, Embedded Analytics, AI Agents, and Custom Apps.</p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 2: Trust & Logic (Hero) */}
                    <div className="glass-card w-full p-8 border-primary/50 shadow-[0_0_50px_-20px_var(--color-primary)] relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x"></div>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4">
                                    THE CORE
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">2. Logic & Trust Engine</h3>
                                <p className="text-muted-foreground mb-4">
                                    The semantic heart. Defines metrics once, governs access, and ensures consistency across all experiences.
                                </p>
                                <ul className="grid grid-cols-2 gap-2">
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Metrics Store</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-white">
                                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                                        <span>Governance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <Layers className="w-32 h-32 text-white/10" />
                            </div>
                        </div>
                    </div>

                    {/* Layer 1: Creation */}
                    <div className="glass-card w-full p-6 border-l-4 border-l-blue-400 relative overflow-hidden">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400">
                                <span className="text-2xl">🛠️</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">1. Creation Layer</h3>
                                <p className="text-muted-foreground text-sm">Connect to any data source (Snowflake, Databricks, SQL) and build the data model.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Top Layer: Consumers */}
                <div className="md:col-span-3 flex justify-center gap-16 pt-12 border-t border-white/10 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-4 text-muted-foreground text-sm uppercase tracking-widest">Consumers</div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            <span className="text-3xl">📊</span>
                        </div>
                        <h4 className="font-bold text-white">Dashboards</h4>
                    </div>
                    
                    <div className="text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/50 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-3xl">🤖</span>
                        </div>
                        <h4 className="font-bold text-white">AI Agents</h4>
                    </div>

                    <div className="text-center group">
                        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                            <span className="text-3xl">📱</span>
                        </div>
                        <h4 className="font-bold text-white">Apps</h4>
                    </div>
                </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">For the CIO</h3>
                <p className="text-muted-foreground">
                    "Stop rebuilding the warehouse. We connect to what you have. You get governance, security, and AI-readiness in weeks, not years."
                </p>
            </div>
            <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">For the Product Owner</h3>
                <p className="text-muted-foreground">
                    "Embed analytics directly into your product. Give your users natural language query capabilities powered by trusted data."
                </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
