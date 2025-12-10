import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Shield, TrendingUp, Brain, CheckCircle2, Zap, Eye, Search, AlertTriangle, Users, BarChart3 } from "lucide-react";

export default function IndustryPublicSafety() {
  useEffect(() => {
    document.title = "Public Safety Solutions | GoodData AI Modernization Sales Playbook";
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
            <Shield className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
            Public Safety & Law Enforcement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for AI-Driven Decision Intelligence and Community Safety
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-cyan-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Public Safety
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The GoodData Intelligence Layer unifies incident data, field activity, and investigative reports into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven operational readiness and resource optimization</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive risk forecasting and hotspot identification</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Investigative intelligence and case pattern recognition</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Real-time performance monitoring and accountability tracking</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent KPIs across dispatch, records, and intelligence systems</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Community transparency and public trust building</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Public safety agencies can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Static Dashboards → Predictive Intelligence → Autonomous Decision Agents
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
              AI-Era Public Safety Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData equips public safety agencies with an enterprise-ready intelligence foundation for their most critical AI initiatives.
            </p>
          </div>

          {/* Strategic Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <BarChart3 className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Strategic Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Identify long-term trends and resource needs for data-driven planning and strategic decision-making.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Crime trend analysis and pattern identification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Resource allocation and staffing optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Budget planning and cost-effectiveness analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Community impact assessment and outcome tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Operational Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor unit activity, response performance, and workload distribution in real time for optimal readiness.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Real-time field coverage and response time monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Workload balancing and shift optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Resource reallocation recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Performance metrics and efficiency tracking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investigative Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <Search className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Investigative Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Uncover related or similar cases through natural-language and semantic discovery to accelerate investigations.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Case narrative analysis and pattern linking</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Emerging pattern detection and trend surfacing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Related incident identification and clustering</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Natural language search across case files</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Forecast & Contextual Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-orange-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Risk Forecast & Contextual Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Predict activity hotspots, identify potential safety risks, and embed insights directly within operational systems.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Predictive hotspot mapping and risk forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Early warning alerts for command staff</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Embedded insights in dispatch and CAD systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Contextual intelligence for faster decision-making</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transparency Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Transparency Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Publish key metrics and trends to enhance public awareness, accountability, and community trust.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Public-facing dashboards and data portals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Community safety metrics and trend reporting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Accountability tracking and compliance monitoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Automated reporting for stakeholders and media</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Public Safety Agencies Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Public Safety Agencies Choose GoodData
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Execution Velocity</h3>
                  <p className="text-foreground">
                    Deliver AI-powered decision applications faster than traditional analytics or internal development cycles, with measurable impact in weeks.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Brain className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Autonomous Intelligence</h3>
                  <p className="text-foreground">
                    AI agents learn from operational outcomes to refine models, thresholds, and resource logic continuously without manual intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Eye className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Operational Visibility</h3>
                  <p className="text-foreground">
                    Monitor performance, readiness, and incident patterns across divisions and jurisdictions in real time with unified KPIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Strategic Optimization</h3>
                  <p className="text-foreground">
                    Empower leadership to align staffing, training, and resource deployment with evolving community needs and data-driven insights.
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
              Agencies Are Not Choosing a BI Tool — They Are Choosing Their Decision Intelligence Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              GoodData consistently wins in public safety because the alternatives lack the real-time intelligence, 
              autonomous agents, and AI-native architecture required for modern law enforcement operations.
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
                    <span>Define metrics but do not operationalize public safety intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No risk forecasting, investigative agents, or operational readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not suited for real-time incident response or field coordination</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  End-to-end public safety intelligence: semantics + reasoning + governed, embedded AI experiences for law enforcement operations.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (CAD + RMS + Analytics + ML Tools)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires 6–12 tools stitched together across dispatch, records, and intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No single source of incident or performance KPI governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slowest time-to-value for community safety initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hard to maintain consistency across precincts and jurisdictions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies incident data, operational semantics, reasoning, and AI experiences—with measurable safety improvements delivered in weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Public Safety Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-sky-500/10 border-2 border-blue-500/30">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-outfit font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                The Public Safety Advantage
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Public safety agencies choose GoodData because it delivers what legacy BI and fragmented CAD/RMS stacks cannot: 
                <span className="font-bold text-cyan-400"> a governed, AI-native intelligence layer</span> that unifies incident, 
                operational, and investigative data into real-time, actionable insights that enhance community safety and strengthen public trust.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-bold text-white">
                  From Static Dashboards → Predictive Intelligence → Autonomous Decision Agents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
