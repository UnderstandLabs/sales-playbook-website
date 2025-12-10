import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, TrendingUp, Brain, CheckCircle2, Zap, FileText, BarChart3, Users, Cog, Eye } from "lucide-react";

export default function IndustryPrivateEquity() {
  useEffect(() => {
    document.title = "Private Equity Solutions | GoodData AI Modernization Sales Playbook";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Back Navigation */}
      <div className="container pt-24 pb-8">
        <Link href="/">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Private Equity & Private Markets
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for AI-Era Private Markets and Fund Operations
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-emerald-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Private Equity
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Private equity operations rely on massive volumes of unstructured documents, irregular reporting formats, and labor-intensive data workflows. 
            The GoodData Intelligence Layer, integrated with Databricks Lakehouse or Snowflake, unifies private equity documents, capital activity, 
            valuations, and investor data into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Automated extraction, validation, and transformation</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-powered decision intelligence and natural-language exploration</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive and prescriptive insight generation</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Early warning, anomaly detection, and performance deviation monitoring</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent, auditable KPIs across accounting, reporting, and client-facing workflows</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Full auditability and lineage from source to statement</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Private equity firms can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Manual Pipelines → Unified Intelligence → Autonomous Fund & Portfolio Decisions
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              AI-Era Private Equity Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData delivers a modern intelligence layer tailored to the complexities of private markets.
            </p>
          </div>

          {/* Fund Operations Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-emerald-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30">
                <FileText className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Fund Operations Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminate fragmented data pipelines and accelerate core operational workflows with automated document processing.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span className="text-foreground">Automated document ingestion and extraction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span className="text-foreground">Data validation, reconciliation, and transformation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span className="text-foreground">Seamless integration with accounting and reporting systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span className="text-foreground">Full auditability and lineage from source to statement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Performance Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-teal-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-teal-500/20 border border-teal-500/30">
                <BarChart3 className="w-6 h-6 text-teal-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Portfolio Performance Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Gain real-time insight into fund KPIs, IRR, MOIC, NAV progression, fee dynamics, and cash flows.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-foreground">Variance and drift detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-foreground">Peer and benchmark comparisons</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-foreground">Forecasting and stress testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    <span className="text-foreground">Automated alerts for performance deviations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investor & Allocation Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <Users className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Investor & Allocation Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Provide allocators and client teams with transparent, self-service visibility into commitments, exposure, and returns.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Capital account summaries</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Exposure analysis across managers, geographies, and vintages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Distribution pacing and commitment utilization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Scenario modeling for capital calls and liquidity needs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Efficiency Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Cog className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Operational Efficiency Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Reduce error-prone manual work and improve scalability across fund administration and client service.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Automated anomaly detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Work-in-progress queue reduction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Workflow optimization and exception routing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Resource visibility across teams and processes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive & Client-Facing Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <Eye className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Executive & Client-Facing Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Deliver a premium interactive experience for internal executives and external LPs with governed portals.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Role-based, governed intelligence portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Embedded dashboards and natural-language Q&A</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Automated reporting and narrative generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Secure, multi-tenant analytics experiences</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Private Equity Leaders Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Private Equity Leaders Choose GoodData
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Brain className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Unified Data & Semantic Foundation</h3>
                  <p className="text-foreground">
                    All extracted, validated, and enriched private equity data is mapped into a governed semantic layer that ensures consistent KPIs across accounting, reporting, analytics, and client portals.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time, Governed Intelligence</h3>
                  <p className="text-foreground">
                    With end-to-end lineage from document to final metric, firms gain transparency, compliance readiness, and auditability across all fund operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Native AI Reasoning & Automated Insights</h3>
                  <p className="text-foreground">
                    AI-driven explanations, anomaly detection, proactive recommendations, and natural-language fund intelligence—with every answer grounded in governed data.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Cog className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Open & Composable Architecture</h3>
                  <p className="text-foreground">
                    Seamlessly integrates with Databricks Lakehouse, Snowflake, fund accounting systems, and existing operational workflows to accelerate modernization.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Accelerates Modernization Already Underway</h3>
                  <p className="text-foreground">
                    Instead of stitching together fragmented point solutions, firms deploy a unified fund intelligence platform in weeks, not quarters.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Users className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Force Multiplier for Operations & Client Service</h3>
                  <p className="text-foreground">
                    Eliminates manual data wrangling and enables teams to focus on higher-value analysis, client engagement, and oversight activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Competitive Positioning
            </h2>
            <p className="text-lg text-white font-semibold">
              Private Equity Is Not Choosing Another Document Tool — It Is Choosing Its AI Operating Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              Legacy dashboards, OCR tools, reporting portals, and point-solution analytics platforms cannot deliver the semantic consistency, 
              real-time intelligence, or governed AI required in the private equity data lifecycle.
            </p>
          </div>

          {/* Traditional BI Tools */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">Traditional BI Tools (Tableau, Power BI, Looker)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Built for visualization, not for ingesting or governing private equity structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No automated validation, lineage, or workflow orchestration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not designed for unstructured document-to-ledger processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Cannot support predictive workflows, anomaly detection, or natural-language fund intelligence</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  A governed semantic layer + AI-native reasoning engine that transforms raw documents and transactional data into operational intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Automation & OCR Tools */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation & OCR Tools</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Improve extraction but do not eliminate manual validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Do not unify data across accounting, reporting, and client portals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No consistent KPI framework or downstream auditability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Still leave gaps requiring email, spreadsheets, and manual oversight</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  Automated extraction flows directly into the Lakehouse + GoodData semantic model, enabling fully governed, end-to-end intelligence and reporting.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Lakehouse + BI Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Lakehouse + BI Stack</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires custom pipelines and dozens of integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No consistent metric governance across teams and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Cannot easily operationalize AI copilots or automated insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slow, costly, and difficult to maintain at scale</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One unified intelligence layer on top of Databricks or Snowflake—delivering AI-powered fund intelligence far faster and at lower operational risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Private Equity Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-2 border-emerald-500/30">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-outfit font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                The Private Equity Advantage
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Private equity firms choose GoodData because it delivers what legacy BI and fragmented document tools cannot: 
                <span className="font-bold text-emerald-400"> a governed, AI-native intelligence layer</span> that unifies fund operations, 
                portfolio data, and investor reporting into real-time, actionable insights that accelerate reporting cycles, improve accuracy, 
                and enable autonomous decision intelligence for AI-era private markets.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-bold text-white">
                  From Manual Pipelines → Unified Intelligence → Autonomous Fund & Portfolio Decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
