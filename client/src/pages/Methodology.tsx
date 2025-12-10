import Layout from "@/components/Layout";
import { Calendar, CheckSquare, Rocket } from "lucide-react";

export default function Methodology() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              The 12-Week <br />
              <span className="text-primary">Modernization Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              How we take a customer from "Legacy Stuck" to "AI Ready" in one quarter.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2"></div>

            <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-20 md:pl-0">
                        <h3 className="text-2xl font-bold text-white mb-2">Weeks 1-4: Discovery & Design</h3>
                        <p className="text-muted-foreground">
                            Map the existing data landscape. Identify key metrics. Design the semantic model.
                        </p>
                    </div>
                    
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_var(--color-primary)]">
                        <span className="font-bold text-white">01</span>
                    </div>

                    <div className="md:w-1/2 md:pl-12 pl-20">
                        <div className="glass-card p-6 rounded-xl border-l-4 border-primary">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <CheckSquare className="w-4 h-4 text-primary" />
                                    <span>Audit existing BI reports</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <CheckSquare className="w-4 h-4 text-primary" />
                                    <span>Define "Gold Standard" metrics</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <CheckSquare className="w-4 h-4 text-primary" />
                                    <span>Connect to Data Warehouse</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Phase 2 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-20 md:pl-0 md:order-1 order-2">
                        <div className="glass-card p-6 rounded-xl border-r-4 border-accent md:border-l-0 border-l-4">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-white/80 md:justify-end">
                                    <span>Build Semantic Model (LDM)</span>
                                    <CheckSquare className="w-4 h-4 text-accent" />
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80 md:justify-end">
                                    <span>Create Dashboards & Visuals</span>
                                    <CheckSquare className="w-4 h-4 text-accent" />
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80 md:justify-end">
                                    <span>Set up User Governance</span>
                                    <CheckSquare className="w-4 h-4 text-accent" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-accent flex items-center justify-center z-10 shadow-[0_0_20px_var(--color-accent)] md:order-2 order-1">
                        <span className="font-bold text-white">02</span>
                    </div>

                    <div className="md:w-1/2 md:pl-12 pl-20 md:order-3 order-3">
                        <h3 className="text-2xl font-bold text-white mb-2">Weeks 5-8: Implementation</h3>
                        <p className="text-muted-foreground">
                            Build the semantic layer. Create the initial set of dashboards. Validate data accuracy.
                        </p>
                    </div>
                </div>

                {/* Phase 3 */}
                <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className="md:w-1/2 md:text-right md:pr-12 pl-20 md:pl-0">
                        <h3 className="text-2xl font-bold text-white mb-2">Weeks 9-12: Launch & AI Enablement</h3>
                        <p className="text-muted-foreground">
                            Roll out to users. Connect AI agents via API. Train the team.
                        </p>
                    </div>
                    
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_20px_var(--color-purple-500)]">
                        <span className="font-bold text-white">03</span>
                    </div>

                    <div className="md:w-1/2 md:pl-12 pl-20">
                        <div className="glass-card p-6 rounded-xl border-l-4 border-purple-500">
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <Rocket className="w-4 h-4 text-purple-500" />
                                    <span>Go Live</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <Rocket className="w-4 h-4 text-purple-500" />
                                    <span>Enable "Ask Data" (GenAI)</span>
                                </li>
                                <li className="flex items-center gap-2 text-sm text-white/80">
                                    <Rocket className="w-4 h-4 text-purple-500" />
                                    <span>Handover & Support</span>
                                </li>
                            </ul>
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
