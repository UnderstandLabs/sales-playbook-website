import Layout from "@/components/Layout";
import { Check, X } from "lucide-react";

export default function Competition() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              Competitive Defense
            </h1>
            <p className="text-xl text-muted-foreground">
              How we win against the giants.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tableau / PowerBI Defense */}
            <div className="glass-card p-8 rounded-3xl border-t-4 border-t-orange-500">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Legacy BI</h3>
                    <span className="text-sm font-mono text-orange-400 bg-orange-400/10 px-3 py-1 rounded-full">Tableau / PowerBI</span>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">The Weakness</h4>
                        <p className="text-muted-foreground text-sm">
                            "Desktop-first" architecture. Business logic is locked in proprietary files (.twbx, .pbix). AI cannot read a chart image.
                        </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-primary mb-2">The GoodData Kill Shot</h4>
                        <p className="text-white/90 text-sm">
                            "Your AI agent can't open a Tableau workbook. GoodData exposes metrics as APIs. We make your data readable by machines, not just humans."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                            <div className="text-red-400 font-bold mb-1">Legacy</div>
                            <div className="text-xs text-muted-foreground">Closed, Proprietary</div>
                        </div>
                        <div className="text-center">
                            <div className="text-green-400 font-bold mb-1">GoodData</div>
                            <div className="text-xs text-muted-foreground">Open, API-First</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Databricks / Snowflake Defense */}
            <div className="glass-card p-8 rounded-3xl border-t-4 border-t-blue-500">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-white">Infrastructure</h3>
                    <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Snowflake / Databricks</span>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-2">The Weakness</h4>
                        <p className="text-muted-foreground text-sm">
                            Great at storage, bad at semantics. Raw tables lack business context. "Warehouse First" leads to AI hallucinations.
                        </p>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-lg font-bold text-primary mb-2">The GoodData Kill Shot</h4>
                        <p className="text-white/90 text-sm">
                            "We don't replace them—we complete them. We sit on top and provide the semantic governance they lack. We prevent the hallucinations."
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="text-center">
                            <div className="text-blue-400 font-bold mb-1">Infrastructure</div>
                            <div className="text-xs text-muted-foreground">Storage & Compute</div>
                        </div>
                        <div className="text-center">
                            <div className="text-green-400 font-bold mb-1">GoodData</div>
                            <div className="text-xs text-muted-foreground">AI Ready Architecture</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-20 glass-panel rounded-3xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-white/5 border-b border-white/10">
                            <th className="p-6 text-white font-bold">Capability</th>
                            <th className="p-6 text-orange-400 font-bold">Legacy BI</th>
                            <th className="p-6 text-blue-400 font-bold">Data Warehouse</th>
                            <th className="p-6 text-primary font-bold bg-primary/10">GoodData</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td className="p-6 text-white font-medium">Platform Scope</td>
                            <td className="p-6 text-muted-foreground"><X className="inline w-5 h-5 text-red-500 mr-2"/>Visuals Only</td>
                            <td className="p-6 text-muted-foreground"><X className="inline w-5 h-5 text-red-500 mr-2"/>Storage Only</td>
                            <td className="p-6 text-white bg-primary/5"><Check className="inline w-5 h-5 text-green-500 mr-2"/>AI Ready (Create → Trust → Experience)</td>
                        </tr>
                        <tr>
                            <td className="p-6 text-white font-medium">AI Readiness</td>
                            <td className="p-6 text-muted-foreground"><X className="inline w-5 h-5 text-red-500 mr-2"/>Low (Images)</td>
                            <td className="p-6 text-muted-foreground"><X className="inline w-5 h-5 text-red-500 mr-2"/>Medium (SQL gen)</td>
                            <td className="p-6 text-white bg-primary/5"><Check className="inline w-5 h-5 text-green-500 mr-2"/>High (Semantic API)</td>
                        </tr>
                        <tr>
                            <td className="p-6 text-white font-medium">Governance</td>
                            <td className="p-6 text-muted-foreground"><X className="inline w-5 h-5 text-red-500 mr-2"/>Siloed</td>
                            <td className="p-6 text-muted-foreground"><Check className="inline w-5 h-5 text-green-500 mr-2"/>Technical Only</td>
                            <td className="p-6 text-white bg-primary/5"><Check className="inline w-5 h-5 text-green-500 mr-2"/>Business & Technical</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
