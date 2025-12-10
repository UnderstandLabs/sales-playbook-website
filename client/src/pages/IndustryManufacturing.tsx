import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Factory, Wrench, TrendingUp, Shield, Zap, Brain, CheckCircle2, Gauge, Cog, AlertTriangle, Leaf, BarChart3 } from "lucide-react";

export default function IndustryManufacturing() {
  useEffect(() => {
    document.title = "Manufacturing Solutions | GoodData AI Modernization Sales Playbook";
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-500/20 border border-slate-500/30 text-slate-300 text-sm font-medium mb-4">
            <Factory className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-slate-400 via-zinc-400 to-gray-400 bg-clip-text text-transparent">
            Manufacturing & Industrial
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for Operational Excellence and AI-Driven Manufacturing
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-slate-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Manufacturing
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The GoodData Intelligence Layer unifies production, quality, and operational data into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven predictive maintenance and asset optimization</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Real-time production monitoring and OEE optimization</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive quality control and defect prevention</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Supply chain visibility and demand-driven planning</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent KPIs across MES, ERP, and IoT systems</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Energy optimization and sustainability tracking</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-500/20 to-zinc-500/20 border border-slate-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Manufacturers can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
                Reactive Dashboards → Predictive Intelligence → Autonomous Operations
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
              AI-Era Manufacturing Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData equips manufacturers with an enterprise-ready intelligence foundation for their most critical AI initiatives.
            </p>
          </div>

          {/* Predictive Maintenance */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                <Wrench className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Predictive Maintenance & Asset Health</h3>
                <p className="text-muted-foreground mb-4">
                  Predict equipment failures, optimize maintenance schedules, and maximize asset uptime with AI-powered insights.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Failure prediction and remaining useful life (RUL)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Condition-based maintenance scheduling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Anomaly detection and early warning alerts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Spare parts optimization and inventory planning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Production Optimization */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Gauge className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Production Optimization & OEE</h3>
                <p className="text-muted-foreground mb-4">
                  Maximize throughput, minimize downtime, and optimize Overall Equipment Effectiveness (OEE) in real time.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Real-time OEE monitoring and root cause analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Production scheduling and capacity planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Bottleneck identification and throughput optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Changeover time reduction and setup optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Control */}
          <div className="glass-panel p-8 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Quality Control & Defect Prevention</h3>
                <p className="text-muted-foreground mb-4">
                  Predict quality issues, reduce defects, and ensure consistent product excellence with AI-driven quality intelligence.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Defect prediction and prevention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Automated visual inspection and anomaly detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Process parameter optimization for quality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Root cause analysis and corrective action tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supply Chain Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Supply Chain Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize material flow, reduce inventory costs, and improve supplier performance with end-to-end visibility.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Demand forecasting and material requirements planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Supplier quality and delivery performance monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Inventory optimization and safety stock calculation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Supply chain risk detection and mitigation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy & Sustainability */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <Leaf className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Energy Optimization & Sustainability</h3>
                <p className="text-muted-foreground mb-4">
                  Reduce energy consumption, lower carbon footprint, and achieve sustainability goals with intelligent monitoring.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Energy consumption forecasting and optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Carbon emissions tracking and reduction planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Waste reduction and circular economy initiatives</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">ESG reporting and compliance monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manufacturing Organizations Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Manufacturing Organizations Choose GoodData
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Operational Intelligence</h3>
                  <p className="text-foreground">
                    Continuous monitoring of production, quality, and equipment health that enables instant responses to operational changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AI-Native Semantic Layer</h3>
                  <p className="text-foreground">
                    Unified production, quality, and asset semantics that ensure consistent metrics across MES, ERP, and IoT platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Cog className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">IoT & Edge Integration</h3>
                  <p className="text-foreground">
                    Seamless integration with industrial IoT sensors, PLCs, and edge devices for real-time data collection and analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rapid Time-to-Value</h3>
                  <p className="text-foreground">
                    Pre-built manufacturing metrics and AI agents that deliver measurable operational improvements in weeks, not quarters.
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
              Manufacturers Are Not Choosing a BI Tool — They Are Choosing Their Operational AI Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              GoodData consistently wins in manufacturing because the alternatives lack the real-time intelligence, 
              IoT integration, and AI-native architecture required for Industry 4.0 transformation.
            </p>
          </div>

          {/* BI-Only Tools */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">BI-Only Tools (Power BI, Looker, Tableau, Qlik)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Built for dashboarding, not real-time AI or decision automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Semantic layers are fragmented, static, or bolt-ons—not AI-ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Require heavy engineering to scale, govern, or embed at the product level</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  A modern, AI-native platform with a unified semantic layer, real-time insight generation, and lower operational overhead—designed for governed Decision Intelligence and Embedded Intelligence at scale.
                </p>
              </div>
            </div>
          </div>

          {/* dbt / Cube / Transform */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">dbt / Cube / Transform (Stand-Alone Semantic Layers)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Define metrics but do not operationalize manufacturing intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No predictive maintenance, quality predictions, or OEE optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not suited for real-time IoT or production workflows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  End-to-end manufacturing intelligence: semantics + reasoning + governed, embedded AI experiences for production operations.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (MES + ERP + IoT Platform + BI + ML Tools)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires 8–15 tools stitched together across production, quality, and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No single source of OEE or quality KPI governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slowest time-to-value for operational improvement initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hard to maintain consistency across plants and production lines</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies production data, operational semantics, reasoning, and AI experiences—with measurable efficiency gains delivered in weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Manufacturing Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 bg-gradient-to-br from-slate-500/10 via-zinc-500/10 to-gray-500/10 border-2 border-slate-500/30">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-outfit font-bold bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
                The Manufacturing Advantage
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Manufacturers choose GoodData because it delivers what legacy BI and fragmented industrial stacks cannot: 
                <span className="font-bold text-slate-400"> a governed, AI-native intelligence layer</span> that unifies production, 
                quality, and asset data into real-time, actionable insights that drive operational excellence and competitive advantage.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-bold text-white">
                  From Reactive Dashboards → Predictive Intelligence → Autonomous Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
