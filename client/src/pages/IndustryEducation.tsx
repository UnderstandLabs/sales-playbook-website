import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, GraduationCap, TrendingUp, Shield, Zap, Users, BarChart3, DollarSign, Brain, CheckCircle2, Heart } from "lucide-react";

export default function IndustryEducation() {
  useEffect(() => {
    document.title = "Education Solutions | GoodData AI Modernization Sales Playbook";
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
            Education
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Turn Campus Data into Autonomous Decision Intelligence
          </p>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            The Intelligence Layer for AI-Powered Enrollment, Student Success, and Institutional Performance
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-pink-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Higher Education
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Higher education can no longer rely on dashboards and siloed reporting systems. To compete in the AI era, institutions must operationalize intelligence across enrollment, student success, financial aid, operations, and advancement — without rebuilding their entire stack.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            GoodData unifies academic, operational, financial, and engagement data into a living, governed intelligence layer that continuously monitors, analyzes, and optimizes institutional outcomes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven decisions and automation</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Natural-language querying for faculty, advisors, and administrators</p>
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
              <p className="text-foreground">Consistent KPIs across BI, AI models, and institutional workflows</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Institutions move from:<br />
              <span className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dashboards → Intelligence → Autonomous Academic & Operational Decisions
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
              AI-Era Education Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData provides the intelligence foundation required for modern institutional priorities.
            </p>
          </div>

          {/* Enrollment Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Enrollment Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Forecast enrollment demand, optimize recruiting strategies, and improve conversion across funnels, modalities, and campuses.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Pipeline monitoring and applied–admitted–yield modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Recruiting spend optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Program-level enrollment forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Demographic and geographic insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Success Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <GraduationCap className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Student Success Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Identify at-risk students early, personalize interventions, and improve retention and graduation outcomes.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Predictive student risk models</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Early-warning indicators</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Engagement and performance tracking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Intervention impact measurement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Aid Optimization */}
          <div className="glass-panel p-8 border-l-4 border-amber-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/30">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Financial Aid Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Balance merit and need-based strategies with institutional goals — maximizing yield, diversity, and retention.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-foreground">Aid allocation modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-foreground">Award optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-foreground">Yield prediction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span className="text-foreground">Compliance-friendly transparency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Performance Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Institutional Performance Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Unify academic, operational, and financial data for real-time performance management and informed leadership decision-making.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Governance and transparency</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">KPI drift and anomaly detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Academic program viability insights</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Operational performance monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advancement & Donor Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-rose-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30">
                <Heart className="w-6 h-6 text-rose-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Advancement & Donor Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Strengthen fundraising outcomes with predictive donor engagement insights.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span className="text-foreground">Donor segmentation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span className="text-foreground">Giving capacity modeling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span className="text-foreground">Campaign performance analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span className="text-foreground">Engagement pattern detection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Education Institutions Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Education Institutions Choose GoodData
            </h2>
            <p className="text-lg text-muted-foreground">
              The Intelligence Layer Purpose-Built for AI-Era Higher Education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* AI-Ready Semantic Foundation */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">AI-Ready Semantic Foundation</h3>
              </div>
              <p className="text-foreground">
                Provides consistent, governed KPIs across enrollment, advising, academic departments, finance, and advancement.
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
                Built for FERPA-sensitive environments requiring transparency, lineage, and auditability.
              </p>
            </div>

            {/* Native AI Reasoning & Automated Insights */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-pink-500/20 border border-pink-500/30">
                  <Brain className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Native AI Reasoning & Automated Insights</h3>
              </div>
              <p className="text-foreground">
                Delivers drift detection, anomaly explanations, automated narratives, and LLM-powered reasoning without custom engineering.
              </p>
            </div>

            {/* Open & Composable Architecture */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Open & Composable Architecture</h3>
              </div>
              <p className="text-foreground mb-3">
                Integrates across the entire campus ecosystem, including:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• SIS (Banner, Colleague, Peoplesoft)</li>
                <li>• LMS (Canvas, D2L, Blackboard)</li>
                <li>• CRM (Salesforce Education Cloud, Slate)</li>
                <li>• Edify, Snowflake, Databricks</li>
                <li>• Internal ML and LLM governance frameworks</li>
              </ul>
            </div>

            {/* Accelerates AI Already Underway */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Accelerates AI Already Underway</h3>
              </div>
              <p className="text-foreground">
                Deploy operational AI experiences in weeks — not semesters.
              </p>
            </div>

            {/* Force Multiplier for IR, IT, and Academic Units */}
            <div className="glass-panel p-6 space-y-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/30">
                  <Users className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Force Multiplier for IR, IT, and Academic Units</h3>
              </div>
              <p className="text-foreground">
                Eliminates technical debt while expanding the impact of institutional research and analytic teams.
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
              Higher Education Is Not Choosing Another Dashboard Tool — It Is Choosing Its AI Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              Most tools in higher education were built for reporting, not for AI-driven decision intelligence. They cannot deliver predictive insights, continuous monitoring, explainability, or autonomous actions.
            </p>
            <p className="text-lg text-white font-semibold">
              GoodData delivers the intelligence layer these systems lack.
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

          {/* Standalone Metric Layers */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">Standalone Metric Layers (dbt, Cube, Transform)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Define metrics, but deliver no intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No monitoring, explanations, or AI reasoning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No academic or operational user experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Require 5–10 additional tools to operationalize AI</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  A complete intelligence layer: semantics + reasoning + AI agents + embedded applications.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (Warehouse + BI + MLOps + LLMs)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>High engineering cost and slow timelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>KPI inconsistency across enrollment, success, and finance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No explainability or observability for AI recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not built for continuous institutional optimization</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies data, semantics, reasoning, and AI-driven decision workflows — rapidly and safely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Education Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30">
          <h2 className="text-3xl font-outfit font-bold text-purple-400">
            The Education Advantage
          </h2>
          <p className="text-xl text-white font-semibold">
            The Intelligence Layer That Makes Institutions AI-Ready
          </p>
          
          <p className="text-lg text-foreground">
            GoodData empowers institutions to:
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Improve enrollment strategy with predictive, data-driven insights</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Boost retention and graduation with timely, explainable interventions</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Optimize financial aid for yield and equity</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Strengthen institutional transparency and governance</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Increase advancement outcomes with targeted donor intelligence</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Elevate the impact of IR, advising, and academic units</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Turn campus data into autonomous decision intelligence</p>
            </div>
          </div>

          <div className="bg-purple-500/20 border border-purple-500/40 rounded-xl p-6 mt-6">
            <p className="text-purple-200 font-semibold text-lg text-center">
              🎓 GoodData is the Intelligence Layer for AI-Era Education.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
