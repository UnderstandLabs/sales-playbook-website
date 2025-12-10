import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Building2, TrendingUp, Shield, Zap, Users, BarChart3, DollarSign, Brain, CheckCircle2 } from "lucide-react";

export default function IndustryBanking() {
  useEffect(() => {
    document.title = "Banking Solutions | GoodData AI Modernization Sales Playbook";
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-4">
            <Building2 className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Banking & Financial Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for Regulated, AI-Driven Banking
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-cyan-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Banking
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The GoodData Intelligence Layer unifies financial, transactional, and behavioral data into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven decisions and automation</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Natural-language analysis for business and analyst teams</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive and prescriptive intelligence</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Drift, anomaly, and early-warning detection</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent KPIs across BI, AI models, and operational workflows</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Banks can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Dashboards → AI-Driven Decisions → Autonomous Operations
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
              AI-Era Banking Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData equips banks with an enterprise-ready intelligence foundation for their most critical AI initiatives.
            </p>
          </div>

          {/* Treasury & Liquidity Optimization */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Treasury & Liquidity Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Deliver real-time forecasting and explainable drivers for treasury and ALM teams.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Intraday liquidity forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Variance explanations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">FX exposure intelligence</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Scenario simulation and stress testing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Credit & Risk Management */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                <Shield className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Credit & Risk Management</h3>
                <p className="text-muted-foreground mb-4">
                  Strengthen risk visibility with continuous monitoring and transparent, explainable indicators.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Automated risk classification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Portfolio drift detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Early-warning signal generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Exposure and delinquency monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Intelligence & Personalization */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Customer Intelligence & Personalization</h3>
                <p className="text-muted-foreground mb-4">
                  Enable predictive, personalized engagement grounded in governed KPIs.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Predictive churn modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Next-best-action intelligence</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Behavioral segmentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">CLV optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Branch & Operations Performance */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Branch & Operations Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Improve efficiency, reduce cost, and deliver real-time operational insight.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Staffing and demand forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Drift and anomaly detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Branch throughput and profitability analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Operational health monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Analyst Productivity & Regulatory Alignment */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Analyst Productivity & Regulatory Alignment</h3>
                <p className="text-muted-foreground mb-4">
                  Give analysts and compliance teams a trusted AI workspace with governance built in.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Natural-language querying</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Automated insight and narrative generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">KPI governance and lineage</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Audit-ready explainability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Banks Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Banks Choose GoodData
            </h2>
            <p className="text-lg text-muted-foreground">
              The Intelligence Layer Purpose-Built for Regulated, AI-Driven Banking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI-Ready Semantics */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI-Ready Semantics</h3>
              </div>
              <p className="text-foreground">
                A unified semantic layer that provides consistent, governed KPIs across dashboards, AI models, and business workflows.
              </p>
            </div>

            {/* Real-Time, Governed Intelligence */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-500/20 border border-green-500/30">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Real-Time, Governed Intelligence</h3>
              </div>
              <p className="text-foreground">
                Built-in explainability, data lineage, and auditability—aligned with regulatory expectations.
              </p>
            </div>

            {/* Native Reasoning & Automated Insights */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Native Reasoning & Automated Insights</h3>
              </div>
              <p className="text-foreground">
                Drift detection, anomaly detection, automated variance explanations, and LLM reasoning without code.
              </p>
            </div>

            {/* Open & Composable Architecture */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                  <Building2 className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Open & Composable Architecture</h3>
              </div>
              <p className="text-foreground mb-3">
                Integrates seamlessly with banks' existing investments, including:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Snowflake Cortex</li>
                <li>• Databricks Mosaic AI</li>
                <li>• Internal ML teams</li>
                <li>• LLM governance frameworks</li>
                <li>• Core banking and data warehouses</li>
              </ul>
            </div>

            {/* Accelerates AI Already Underway */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-500/30">
                  <TrendingUp className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Accelerates AI Already Underway</h3>
              </div>
              <p className="text-foreground">
                Operational AI delivered in weeks—not the years required to rebuild data architecture.
              </p>
            </div>

            {/* Force Multiplier for Data & AI Teams */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Force Multiplier for Data & AI Teams</h3>
              </div>
              <p className="text-foreground">
                Banks avoid additional technical debt and instead amplify the impact of teams and tools they already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass-panel p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-red-400">
              Competitive Positioning
            </h2>
            <p className="text-xl text-white font-semibold">
              Banks Are Not Choosing a BI Tool — They Are Choosing Their AI Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              GoodData consistently wins in banking because the alternatives lack the governance, real-time intelligence, 
              and AI-native architecture required for regulated, mission-critical decisioning.
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
                    <span>Define metrics but do not operationalize intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No drift detection, reasoning, narratives, or experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not suited for regulated explainability or audit workflows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  End-to-end intelligence: semantics + reasoning + governed, embedded AI experiences.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (Snowflake + Databricks + BI + AI Tools)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires 6–10 tools stitched together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No single source of KPI governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slowest time-to-value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hard to meet regulatory explainability</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies data, semantics, reasoning, and AI experiences—with measurable value delivered in weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Banking Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30">
          <h2 className="text-3xl font-outfit font-bold text-blue-400">
            The Banking Advantage
          </h2>
          <p className="text-xl text-white font-semibold">
            The Intelligence Layer That Makes Banks AI-Ready
          </p>
          
          <p className="text-lg text-foreground">
            GoodData empowers banks to:
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Accelerate AI strategies</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Govern, scale, and operationalize AI safely</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Deliver measurable outcomes quickly</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Unify KPIs across risk, treasury, operations, and customer teams</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Turn data into decisions—and decisions into competitive advantage</p>
            </div>
          </div>

          <div className="bg-blue-500/20 border border-blue-500/40 rounded-xl p-6 mt-6">
            <p className="text-blue-200 font-semibold text-lg text-center">
              🏦 GoodData is the Intelligence Layer for AI-Era Banking.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
