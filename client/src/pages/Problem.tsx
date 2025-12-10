import Layout from "@/components/Layout";
import { AlertTriangle, Code, Lock, TrendingDown, Zap, Clock, DollarSign, Users } from "lucide-react";

export default function Problem() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-sm font-medium text-red-300">Critical Blocker</span>
            </div>
            
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              Why Customers Can't Move to AI
              <span className="text-red-400"> (Yet)</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every enterprise is sitting on a gold mine of data—but it's locked inside aging systems. The irony? The data that runs the business today is the exact thing preventing them from moving into AI tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* The Fragmented Stack Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-8 text-center">
              The Fragmented Stack Trap
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-red-500">
                <Lock className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="font-outfit font-bold text-xl text-white mb-3">Legacy BI Platforms</h3>
                <p className="text-muted-foreground">
                  Decades of high-value data trapped in Power BI, Tableau, and Qlik. Business-critical metrics written in proprietary languages like DAX, M/Query, LookML, and MDX that AI cannot decode.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-orange-500">
                <Code className="w-10 h-10 text-orange-400 mb-4" />
                <h3 className="font-outfit font-bold text-xl text-white mb-3">Buried Custom Logic</h3>
                <p className="text-muted-foreground">
                  Custom SQL logic hidden in ETL jobs, spreadsheets, and duct-taped solutions scattered across the organization. "Smart people logic" that only one or two employees understand.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-yellow-500">
                <TrendingDown className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="font-outfit font-bold text-xl text-white mb-3">Duplicated Definitions</h3>
                <p className="text-muted-foreground">
                  The same metric defined differently across departments, dashboards, and files. Metrics that break every time data changes. No single source of truth.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-purple-500">
                <AlertTriangle className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="font-outfit font-bold text-xl text-white mb-3">Undocumented Dependencies</h3>
                <p className="text-muted-foreground">
                  Nested DAX, 300-line SQL transformations, hidden filters and joins. A single point of failure with no documentation. Break one thing, and the entire reporting stack collapses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Blocker Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl border border-red-500/20 bg-red-500/5">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
                  <Zap className="w-8 h-8 text-red-400" />
                </div>
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-4">
                  The Real Blocker: Technical Debt in Business Logic
                </h2>
                <p className="text-lg text-muted-foreground italic">
                  This is the part Sales MUST understand.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-xl font-bold text-white mb-3">
                    Technical debt isn't about old tools. It's about old logic.
                  </p>
                  <p className="text-muted-foreground">
                    Companies have 5–20 years of hard-coded business rules: nested DAX, 300-line SQL transformations, hidden filters and joins, and metrics that break every time data changes. This logic is duplicated across departments, dashboards, and files.
                  </p>
                </div>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-lg font-bold text-red-300 mb-3">
                    Why this matters for AI:
                  </p>
                  <p className="text-white">
                    AI CANNOT read these dashboards or decode the hidden logic. If the logic stays trapped, AI can't answer even basic business questions reliably.
                  </p>
                  <p className="text-red-400 font-bold mt-4 text-xl">
                    This is the #1 blocker to enterprise AI adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-12 text-center">
              What They Think vs. What They Actually Have
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What They Think */}
              <div className="glass-card p-8 rounded-2xl border border-green-500/30 bg-green-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-outfit font-bold text-2xl text-green-300">What They Think</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                    <p className="text-white">Clean "Revenue" metric</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                    <p className="text-white">Simple formula</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
                    <p className="text-white">Easy for AI to use</p>
                  </div>
                  <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <code className="text-sm text-green-300 font-mono">
                      Revenue = SUM(Sales[Amount])
                    </code>
                  </div>
                </div>
              </div>

              {/* What They Actually Have */}
              <div className="glass-card p-8 rounded-2xl border border-red-500/30 bg-red-500/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-outfit font-bold text-2xl text-red-300">What They Actually Have</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">A 200-line DAX monster</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">Nested expressions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">Hidden filters</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">Multiple implicit joins</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">No documentation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
                    <p className="text-white">A single point of failure</p>
                  </div>
                  <div className="mt-6 p-4 bg-red-500/10 rounded-lg border border-red-500/20 max-h-32 overflow-hidden relative">
                    <code className="text-xs text-red-300 font-mono whitespace-pre-wrap">
{`Revenue = 
CALCULATE(
  SUM(Sales[Amount]),
  FILTER(
    ALL(Date),
    Date[Year] = YEAR(TODAY())
  ),
  FILTER(
    ALL(Product),
    Product[Category] <> "Returns"
  ),
  ...
  [180 more lines]`}
                    </code>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-red-900/80 to-transparent flex items-end justify-center pb-2">
                      <span className="text-xs text-red-300 font-mono">... and 180 more lines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl font-bold text-white">
                This is why companies can't get to AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Fixing Cost Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-8 text-center">
              Why Manual Fixing Is Impossible
            </h2>
            
            <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              To make this AI-ready, companies traditionally needed to rebuild logic manually, rewrite metrics, re-document code bases, rebuild data models, standardize definitions, clean lineage, and implement governance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="glass-card p-8 rounded-2xl text-center">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">6–18</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Months</div>
              </div>

              <div className="glass-card p-8 rounded-2xl text-center">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">$500K–$5M</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Investment</div>
              </div>

              <div className="glass-card p-8 rounded-2xl text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">Small Army</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">BI + Data Engineers</div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl border border-red-500/20 bg-red-500/5 text-center">
              <p className="text-2xl font-bold text-red-300">
                This is why AI projects stall before they even start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation Teaser Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">The Game Changed</span>
            </div>
            
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-6">
              Until AI Changed the Equation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-2xl border border-white/5">
                <h3 className="font-outfit font-bold text-xl text-white mb-4">The Old Way</h3>
                <p className="text-muted-foreground mb-4">
                  Weeks or months reconstructing logic by hand. Endless meetings with SMEs trying to decode formulas. High risk of breaking existing dashboards.
                </p>
                <p className="text-red-400 font-bold">Slow. Painful. Expensive.</p>
              </div>

              <div className="glass-card p-8 rounded-2xl border border-primary/30 bg-primary/5">
                <h3 className="font-outfit font-bold text-xl text-white mb-4">The New AI-Powered Way</h3>
                <p className="text-muted-foreground mb-4">
                  AI analyzes the legacy measure, breaks it apart, understands its logic, rewrites it into clean, atomic, governed metrics, documents everything, and creates semantic structure automatically.
                </p>
                <p className="text-primary font-bold text-xl">What used to take weeks → now takes minutes.</p>
              </div>
            </div>

            <div className="glass-card p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <p className="text-3xl font-bold text-white mb-4">
                One messy DAX measure becomes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">14 atomic metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">Clear definitions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">Human-readable docs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">Governed data model</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">Modern semantic layer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-white">AI-consumable logic</span>
                </div>
              </div>
              <p className="text-2xl font-bold text-primary mt-8">
                This is clarity from chaos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-primary/5">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-white mb-8 text-center">
                The Key Takeaway for Sales
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-xl font-bold text-white mb-2">
                    AI is not blocked by models or data.
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    AI is blocked by business logic.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground">
                  They already have the data. They already have AI tools. They already have executive pressure.
                </p>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-lg font-bold text-white mb-4">What they don't have:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white">Trusted definitions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white">Clean metrics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white">Governed logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white">A semantic layer</span>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                      <span className="text-white font-bold">An AI-ready foundation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center">
                  <p className="text-2xl font-bold text-white mb-4">
                    GoodData doesn't compete with BI tools.
                  </p>
                  <p className="text-xl text-primary font-bold">
                    We eliminate the logic bottleneck that makes those tools unfit for AI.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg text-muted-foreground italic mb-4">
                    And once that bottleneck is gone, customers can:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">Move to AI months faster</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">Eliminate 80% of manual migration work</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">Build governed, reusable logic</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">Ask AI real questions with real trust</span>
                    </div>
                    <div className="flex items-start gap-3 md:col-span-2">
                      <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-white">Modernize dashboards as a byproduct, not a project</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                  <p className="text-2xl font-bold text-primary mb-2">
                    This is the strategic wedge.
                  </p>
                  <p className="text-2xl font-bold text-white">
                    This is how we win the room.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
