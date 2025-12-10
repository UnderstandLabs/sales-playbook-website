import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, Heart, Activity, Users, Stethoscope, TrendingUp, Shield, Brain, CheckCircle2, DollarSign, FileText, Microscope } from "lucide-react";

export default function IndustryHealthcare() {
  useEffect(() => {
    document.title = "Healthcare Solutions | GoodData AI Modernization Sales Playbook";
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Healthcare & Life Sciences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for Patient-Centered, AI-Driven Healthcare
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-pink-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Healthcare
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The GoodData Intelligence Layer unifies clinical, operational, and financial data into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven clinical decisions and care coordination</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Population health management and risk stratification</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive patient outcomes and intervention recommendations</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Real-time quality metrics and compliance monitoring</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent KPIs across EHR, payer systems, and operational workflows</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">HIPAA-compliant, explainable AI for clinical and administrative use</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Healthcare organizations can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Reactive Reporting → Predictive Care → Autonomous Health Intelligence
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
              AI-Era Healthcare Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData equips healthcare organizations with an enterprise-ready intelligence foundation for their most critical AI initiatives.
            </p>
          </div>

          {/* Patient Care Optimization */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/30">
                <Stethoscope className="w-6 h-6 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Patient Care Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Deliver real-time clinical insights and AI-powered care recommendations at the point of care.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Predictive readmission risk scoring</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Clinical pathway optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Sepsis and deterioration early warning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">•</span>
                    <span className="text-foreground">Personalized treatment recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Population Health Management */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Population Health Management</h3>
                <p className="text-muted-foreground mb-4">
                  Identify high-risk cohorts, predict outcomes, and automate interventions across patient populations.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Chronic disease risk stratification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Care gap identification and closure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Social determinants of health analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Preventive care outreach automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Cycle Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Revenue Cycle Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize billing, reduce denials, and accelerate cash flow with AI-driven revenue cycle insights.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Denial prediction and prevention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Prior authorization automation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Coding accuracy and compliance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Payment variance analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Operations Excellence */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Activity className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Clinical Operations Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize resource utilization, staffing, and operational efficiency with real-time intelligence.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">OR scheduling optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Bed capacity forecasting</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Staff allocation and productivity</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Supply chain and inventory optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research & Clinical Trials */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                <Microscope className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Research & Clinical Trials</h3>
                <p className="text-muted-foreground mb-4">
                  Accelerate research insights and patient recruitment with unified real-world evidence.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Patient cohort identification</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Real-world evidence generation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Treatment effectiveness analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span className="text-foreground">Adverse event detection and reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare Organizations Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Healthcare Organizations Choose GoodData
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">HIPAA-Compliant & Explainable</h3>
                  <p className="text-foreground">
                    Built-in governance, audit trails, and explainability for clinical AI that meets regulatory requirements and builds clinician trust.
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
                    Unified clinical, financial, and operational semantics that ensure consistent KPIs across EHR, payer systems, and AI models.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Activity className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Clinical Intelligence</h3>
                  <p className="text-foreground">
                    Continuous monitoring, drift detection, and early-warning systems that enable proactive interventions at the point of care.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Rapid Time-to-Value</h3>
                  <p className="text-foreground">
                    Pre-built healthcare metrics and AI agents that deliver measurable outcomes in weeks, not quarters or years.
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
              Healthcare Organizations Are Not Choosing a BI Tool — They Are Choosing Their Clinical AI Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              GoodData consistently wins in healthcare because the alternatives lack the governance, real-time intelligence, 
              and AI-native architecture required for patient-centered, mission-critical decisioning.
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
                    <span>Define metrics but do not operationalize clinical intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No patient outcome monitoring, explanations, or care recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not suited for HIPAA explainability or clinical audit workflows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  End-to-end clinical intelligence: semantics + reasoning + governed, embedded AI experiences for patient care.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (EHR + Data Warehouse + BI + ML Tools)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires 8–12 tools stitched together across clinical and operational systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No single source of clinical KPI governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slowest time-to-value for patient care initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hard to meet HIPAA explainability and audit requirements</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies clinical data, semantics, reasoning, and AI experiences—with measurable patient outcomes delivered in weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Healthcare Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 bg-gradient-to-br from-red-500/10 via-purple-500/10 to-pink-500/10 border-2 border-red-500/30">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-outfit font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                The Healthcare Advantage
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Healthcare organizations choose GoodData because it delivers what legacy BI and fragmented data stacks cannot: 
                <span className="font-bold text-pink-400"> a governed, AI-native intelligence layer</span> that unifies clinical, 
                operational, and financial data into real-time, explainable insights that improve patient outcomes and operational excellence.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-bold text-white">
                  From Reactive Dashboards → Predictive Care → Autonomous Health Intelligence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
