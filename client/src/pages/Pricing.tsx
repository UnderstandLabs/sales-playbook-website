import { Link } from "wouter";
import { ArrowLeft, Layers, Zap, Users, Bot, Cloud, Coins } from "lucide-react";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background/95">
      {/* Back Navigation */}
      <div className="container pt-24 pb-8">
        <Link href="/resources">
          <button className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container pb-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            GoodData Pricing Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding How to Sell and Position the Intelligence Layer, Workspaces, and AI Agents
          </p>
          <div className="inline-block px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-medium">
            Internal Sales Training Document
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-cyan-400 flex items-center gap-3">
            <Layers className="w-8 h-8" />
            Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This page explains how GoodData structures and positions pricing for the Intelligence Layer, Workspaces, and AI Agents.
            It is designed to help Sales communicate our value, differentiate our offer, and structure deals correctly across Cloud, CN, and BYOT customers.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Customers get full-featured AI with the Intelligence Layer</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Workspaces are the commercial unit of deployment</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Decision Intelligence = per use case, higher value</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Embedded Intelligence = per customer workspace, scalable</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Agents = priced separately per agent</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">Cloud vs. CN = where compute runs</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
              <p className="text-foreground">BYOT = who pays for LLM tokens</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Layer Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass-panel p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-purple-400 flex items-center gap-3">
              <Layers className="w-8 h-8" />
              1. The Intelligence Layer (Platform Foundation)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Intelligence Layer is the foundation for all AI capabilities within GoodData.
              It is purchased via a Platform Fee and includes every out-of-the-box AI feature we ship.
            </p>

            {/* AI Lake */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">1.1 AI Lake</h3>
              <p className="text-muted-foreground">The AI execution environment that powers all compute:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>AI sandbox and function runtime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Model / LLM operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Vector retrieval and embedding workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Performance scaling and scheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Supports Cloud, CN, and BYOT configurations</span>
                </li>
              </ul>
            </div>

            {/* AI Hub */}
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300">1.2 AI Hub</h3>
              <p className="text-muted-foreground">The intelligence governance and orchestration control plane:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Analytics Catalog & semantic governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>AI Memory & contextualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>RAG + vector indexing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Workflow orchestration engine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Observability, monitoring, debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>MCP tools, connectors, and automation framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>Lineage, security, and compliance services</span>
                </li>
              </ul>
            </div>

            {/* AI Apps */}
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-pink-300">1.3 AI Apps</h3>
              <p className="text-muted-foreground">Prebuilt intelligence experiences and tools:</p>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Analytical intelligence apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Semantic quality & modeling tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Embedded intelligence components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Assistant interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Operational governance apps</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What Customers Get with the Intelligence Layer</h3>
              <p className="text-foreground mb-4">Every out-of-the-box AI feature, including:</p>
              <div className="grid md:grid-cols-2 gap-3 text-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>The AI Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Reasoning and analytical features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Intelligence apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Catalog intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Contextual memory</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Governance and observability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Orchestration and workflow services</span>
                </div>
              </div>
              <p className="text-white font-semibold mt-4">No feature gating. No partial AI. Full access.</p>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
              <p className="text-yellow-300 font-medium">⚠️ The Intelligence Layer is required for any AI deployment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Fee Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-green-400 flex items-center gap-3">
            <Coins className="w-8 h-8" />
            2. Platform Fee
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The Platform Fee licenses the entire Intelligence Layer.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Why we require it:</h3>
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Establishes a consistent, enterprise-grade AI foundation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Ensures customers are AI-ready before enabling workspaces or agents</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Covers shared orchestration, runtime, governance, and intelligence services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                <span>Provides predictable and scalable economics</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <p className="text-green-300 font-medium">✓ Every AI deal includes the Platform Fee.</p>
          </div>
        </div>
      </section>

      {/* Workspaces Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass-panel p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-blue-400 flex items-center gap-3">
              <Users className="w-8 h-8" />
              3. Workspaces — The Core Pricing Unit
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Workspaces represent how customers deploy intelligence.
              They determine where AI runs, what problem it solves, and how value is delivered.
            </p>
            <p className="text-foreground">
              GoodData uses two workspace types, each with a distinct pricing strategy.
            </p>

            {/* Customer Workspaces */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-blue-300">3.1 Customer Workspaces</h3>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Used for:</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Embedded Intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>AI Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>AI Modernization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Multi-tenant SaaS applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Internal environments</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Characteristics:</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Priced per workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Unlimited end users per workspace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Customers may deploy many workspaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Workspace = tenant, customer, environment, or segmentation unit</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-600/20 border border-blue-500/40 rounded-lg p-4">
                <p className="text-blue-200 font-medium">Embedded Intelligence = many workspaces, lower individual value.</p>
              </div>
            </div>

            {/* Decision Intelligence Workspaces */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-purple-300">3.2 Decision Intelligence Workspaces</h3>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Used for:</h4>
                <p className="text-muted-foreground">Business-wide or departmental strategic use cases</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-purple-400">•</span>
                    <span>Revenue Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-purple-400">•</span>
                    <span>Fraud & Risk Insight</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-purple-400">•</span>
                    <span>Supply Chain Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-purple-400">•</span>
                    <span>Marketing Attribution</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="text-purple-400">•</span>
                    <span>Operational Efficiency Intelligence</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Characteristics:</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Priced per use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Unlimited internal users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Higher per-workspace value</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Includes Intelligence Layer + use-case workflows + AI components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>Represents a cross-functional decisioning system</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-600/20 border border-purple-500/40 rounded-lg p-4">
                <p className="text-purple-200 font-medium">Decision Intelligence = fewer workspaces, higher value.</p>
              </div>
            </div>

            {/* Internal Pricing Logic */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-red-300">Internal Pricing Logic (Not Presented to Customers)</h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">1.</span>
                  <span>We internally evaluate how many users would access a DI workspace (e.g., 50).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">2.</span>
                  <span>We map that number to the equivalent value of multiple Embedded Intelligence workspaces.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">3.</span>
                  <span>We price the DI workspace accordingly.</span>
                </li>
              </ul>
              
              <div className="bg-red-600/20 border border-red-500/40 rounded-lg p-4 space-y-2">
                <p className="text-white font-semibold">External message:</p>
                <p className="text-red-200">"One use case. One workspace. Unlimited users."</p>
                <p className="text-red-300 text-sm mt-2">⚠️ We never expose the internal equivalency logic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-orange-400 flex items-center gap-3">
            <Bot className="w-8 h-8" />
            4. AI Agents (Sold Separately)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Agents are modular, specialized intelligence units that run on top of the Intelligence Layer.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Examples include:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Reasoning agents</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Summarization/explanation agents</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Forecasting & simulation agents</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Anomaly detection / KDA agents</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Recommendation agents</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <span className="text-orange-400">•</span>
                <span>Domain-specific or customer-built agents</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-lg font-semibold text-orange-300">Out-of-the-box agents</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Included with the Intelligence Layer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Baseline intelligence (assistant, semantic intelligence, etc.)</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-lg font-semibold text-orange-300">Additional agents</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>GoodData-built advanced agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Customer-created custom agents</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Priced per agent</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">Key Sales Message</h3>
            <p className="text-foreground text-lg">
              "Customers receive all out-of-the-box AI capabilities with the Intelligence Layer. Additional agents beyond those default capabilities are priced per agent."
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Levers Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-8">
          <h2 className="text-3xl font-outfit font-bold text-cyan-400 flex items-center gap-3">
            <Zap className="w-8 h-8" />
            5. Pricing Levers
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            GoodData's pricing operates through five distinct levers. All deals use these levers in some combination.
          </p>

          <div className="space-y-6">
            {/* Lever 1 */}
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-300 mb-3">5.1 Lever 1 — Platform Fee</h3>
              <p className="text-foreground">
                Grants access to the Intelligence Layer<br />
                (AI Lake + AI Hub + AI Apps)
              </p>
            </div>

            {/* Lever 2 */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-blue-300">5.2 Lever 2 — Customer Workspaces</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Used for Embedded Intelligence, Modernization, Architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Unlimited end users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Workspace = tenant/environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Many workspaces, scalable horizontally</span>
                </li>
              </ul>
            </div>

            {/* Lever 3 */}
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-pink-300">5.3 Lever 3 — Decision Intelligence Workspaces</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Used for DI use cases</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Unlimited internal users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>High-value workspaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">•</span>
                  <span>Internally priced equivalent to multiple EI workspaces</span>
                </li>
              </ul>
            </div>

            {/* Lever 4 */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-orange-300">5.4 Lever 4 — AI Agents (Add-On)</h3>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Any agent beyond the out-of-the-box set</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Priced per agent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Applies in both EI and DI contexts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span>Major expansion driver for AI maturity</span>
                </li>
              </ul>
            </div>

            {/* Lever 5 */}
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 space-y-4">
              <h3 className="text-xl font-semibold text-cyan-300">5.5 Lever 5 — Execution and Token Model</h3>
              <p className="text-foreground">Customers choose two independent execution levers:</p>
              
              <div className="space-y-4">
                <div className="bg-cyan-600/20 border border-cyan-500/40 rounded-lg p-4 space-y-3">
                  <h4 className="text-lg font-semibold text-cyan-200">Execution Model (Cloud or CN)</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <Cloud className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span><strong>Cloud:</strong> GoodData runs compute and operations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Cloud className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span><strong>CN:</strong> Customer runs compute within their own infra</span>
                    </li>
                  </ul>
                  <p className="text-cyan-200 text-sm">Workspace and Agent pricing levers remain identical. Only execution responsibility changes.</p>
                </div>

                <div className="bg-cyan-600/20 border border-cyan-500/40 rounded-lg p-4 space-y-3">
                  <h4 className="text-lg font-semibold text-cyan-200">Token Model (BYOT or GD Tokens)</h4>
                  <ul className="space-y-2 text-foreground">
                    <li className="flex items-start gap-2">
                      <Coins className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span><strong>BYOT (Bring Your Own Token):</strong> Customer supplies LLM tokens; execution pricing adjusts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Coins className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                      <span><strong>GD Tokens:</strong> GoodData provides tokens; customer gets predictable operations</span>
                    </li>
                  </ul>
                  <p className="text-cyan-200 text-sm">BYOT works in both Cloud and CN deployments</p>
                </div>
              </div>

              <div className="bg-cyan-700/30 border border-cyan-500/50 rounded-lg p-4">
                <p className="text-white font-semibold mb-2">Key Distinction:</p>
                <p className="text-cyan-100">Cloud vs. CN = who runs compute</p>
                <p className="text-cyan-100">BYOT vs. GD Tokens = who pays for tokens</p>
                <p className="text-cyan-200 text-sm mt-2">These are independent levers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Pricing Lever Table */}
      <section className="container pb-16">
        <div className="max-w-6xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-yellow-400">6. Unified Pricing Lever Table (Internal Only)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left p-4 text-yellow-300 font-semibold">Lever</th>
                  <th className="text-left p-4 text-yellow-300 font-semibold">Type</th>
                  <th className="text-left p-4 text-yellow-300 font-semibold">Description</th>
                  <th className="text-left p-4 text-yellow-300 font-semibold">Customer Gets</th>
                  <th className="text-left p-4 text-yellow-300 font-semibold">Sales Notes</th>
                </tr>
              </thead>
              <tbody className="text-foreground">
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Platform Fee</td>
                  <td className="p-4">Platform</td>
                  <td className="p-4">Licenses the full Intelligence Layer</td>
                  <td className="p-4">All out-of-the-box AI features</td>
                  <td className="p-4">Required in all AI deals</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Customer Workspaces</td>
                  <td className="p-4">Workspace</td>
                  <td className="p-4">Embedded Intelligence & Architecture</td>
                  <td className="p-4">Unlimited end users</td>
                  <td className="p-4">Many workspaces; scalable</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Decision Intelligence Workspaces</td>
                  <td className="p-4">Workspace</td>
                  <td className="p-4">Business use cases</td>
                  <td className="p-4">Unlimited internal users</td>
                  <td className="p-4">High-value workspaces aligned to outcomes</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">AI Agents</td>
                  <td className="p-4">Value Add</td>
                  <td className="p-4">Advanced or custom agents</td>
                  <td className="p-4">Specialized intelligence</td>
                  <td className="p-4">Priced per agent</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4 font-medium">Execution Model (Cloud / CN)</td>
                  <td className="p-4">Execution</td>
                  <td className="p-4">Determines who runs compute</td>
                  <td className="p-4">Same levers; compute shifts</td>
                  <td className="p-4">Cloud = GD executes; CN = customer executes</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Token Model (BYOT / GD Tokens)</td>
                  <td className="p-4">Token</td>
                  <td className="p-4">Determines who pays for LLM tokens</td>
                  <td className="p-4">BYOT = customer tokens; GD Tokens = included</td>
                  <td className="p-4">Works with both Cloud and CN</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Scenarios */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass-panel p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-outfit font-bold text-amber-400 flex items-center gap-3">
              <Coins className="w-8 h-8" />
              7. Real-World Pricing Scenarios
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Use these examples to pattern-match your deals and understand typical configurations.
              Each scenario shows the play, customer profile, configuration, and key pricing considerations.
            </p>
          </div>

          {/* Scenario 1: SaaS Company - Embedded Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-pink-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm font-semibold">
                Embedded Intelligence
              </div>
              <h3 className="text-2xl font-bold text-white">Scenario 1: Multi-Tenant SaaS Platform</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-pink-400 mb-2">CUSTOMER PROFILE</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• B2B SaaS company with 500 customers</li>
                  <li>• Embedding analytics into their product</li>
                  <li>• Revenue driver for premium tiers</li>
                  <li>• Cloud deployment preferred</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-pink-400 mb-2">CONFIGURATION</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• <strong>500 Customer Workspaces</strong> (1 per customer)</li>
                  <li>• <strong>Intelligence Layer</strong> (Platform Fee)</li>
                  <li>• <strong>Cloud execution</strong> (GoodData manages)</li>
                  <li>• <strong>GD Tokens</strong> (predictable ops)</li>
                </ul>
              </div>
            </div>

            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-pink-400 mb-3">KEY PRICING CONSIDERATIONS</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">→</span>
                  <span><strong>Per-workspace pricing</strong> scales with customer growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">→</span>
                  <span><strong>Unlimited end users</strong> per workspace = no user-based upsell friction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">→</span>
                  <span><strong>Cloud + GD Tokens</strong> = fully managed, predictable monthly cost</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1">→</span>
                  <span><strong>Position as:</strong> "Embedded intelligence that scales with your business—no surprises"</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scenario 2: Enterprise Bank - Decision Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold">
                Decision Intelligence
              </div>
              <h3 className="text-2xl font-bold text-white">Scenario 2: Enterprise Bank with Strategic Use Cases</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">CUSTOMER PROFILE</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• Global bank with 15,000 employees</li>
                  <li>• Needs cross-functional decisioning systems</li>
                  <li>• High-value strategic initiatives</li>
                  <li>• CN deployment for security/compliance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-purple-400 mb-2">CONFIGURATION</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• <strong>3 DI Workspaces</strong> (Fraud Detection, Revenue Intelligence, Risk Management)</li>
                  <li>• <strong>Intelligence Layer</strong> (Platform Fee)</li>
                  <li>• <strong>CN execution</strong> (customer infra)</li>
                  <li>• <strong>BYOT</strong> (customer LLM tokens)</li>
                  <li>• <strong>5 AI Agents</strong> (2 Fraud, 2 Revenue, 1 Risk)</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-purple-400 mb-3">KEY PRICING CONSIDERATIONS</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Per-use-case pricing</strong> = higher value per workspace (vs. 500 EI workspaces)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Unlimited internal users</strong> = entire fraud/revenue/risk teams can access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>CN + BYOT</strong> = customer controls compute and tokens (security/compliance win)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>AI Agents priced separately</strong> = upsell opportunity as use cases mature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong>Position as:</strong> "Strategic intelligence systems that drive measurable business outcomes"</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scenario 3: Retail Chain - Hybrid Model */}
          <div className="glass-panel p-8 border-l-4 border-cyan-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">
                Hybrid: DI + EI
              </div>
              <h3 className="text-2xl font-bold text-white">Scenario 3: Retail Chain with Internal + Partner Analytics</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">CUSTOMER PROFILE</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• National retail chain with 200 stores</li>
                  <li>• Needs internal supply chain intelligence</li>
                  <li>• Also embeds analytics for 50 vendor partners</li>
                  <li>• Cloud deployment for speed</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-cyan-400 mb-2">CONFIGURATION</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• <strong>2 DI Workspaces</strong> (Supply Chain Intelligence, Marketing Attribution)</li>
                  <li>• <strong>50 Customer Workspaces</strong> (1 per vendor partner)</li>
                  <li>• <strong>Intelligence Layer</strong> (Platform Fee)</li>
                  <li>• <strong>Cloud execution</strong> (GoodData manages)</li>
                  <li>• <strong>GD Tokens</strong> (predictable ops)</li>
                  <li>• <strong>3 AI Agents</strong> (Supply Chain automation)</li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-cyan-400 mb-3">KEY PRICING CONSIDERATIONS</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Hybrid model</strong> = DI for internal strategic use + EI for external partner portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>DI workspaces</strong> = higher value, unlimited internal users across supply chain team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>EI workspaces</strong> = scalable partner analytics, unlimited users per vendor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Cloud + GD Tokens</strong> = fully managed for fast deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">→</span>
                  <span><strong>Position as:</strong> "One platform for internal intelligence and partner collaboration"</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scenario 4: Tech Company - AI Modernization */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold">
                AI Modernization
              </div>
              <h3 className="text-2xl font-bold text-white">Scenario 4: Tech Company Migrating from Legacy BI</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">CUSTOMER PROFILE</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• SaaS company with 2,000 employees</li>
                  <li>• Migrating from Tableau/Power BI</li>
                  <li>• Needs AI-ready semantic foundation</li>
                  <li>• CN deployment for control</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-blue-400 mb-2">CONFIGURATION</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• <strong>15 Customer Workspaces</strong> (departments: Sales, Marketing, Product, Finance, etc.)</li>
                  <li>• <strong>Intelligence Layer</strong> (Platform Fee)</li>
                  <li>• <strong>CN execution</strong> (customer infra)</li>
                  <li>• <strong>BYOT</strong> (customer LLM tokens)</li>
                  <li>• <strong>0 AI Agents initially</strong> (phase 2 upsell)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-blue-400 mb-3">KEY PRICING CONSIDERATIONS</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Departmental workspaces</strong> = one per team/use case (not multi-tenant like EI)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Unlimited users per workspace</strong> = entire departments can access without user fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>CN + BYOT</strong> = customer controls infrastructure and token costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>AI Agents = phase 2 upsell</strong> once semantic foundation is proven</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">→</span>
                  <span><strong>Position as:</strong> "Modernize from dashboards to AI-ready architecture—no user-based pricing trap"</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Scenario 5: Healthcare Provider - AI Architecture */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-sm font-semibold">
                AI Architecture
              </div>
              <h3 className="text-2xl font-bold text-white">Scenario 5: Healthcare System Building AI-Native Platform</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">CUSTOMER PROFILE</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• Large healthcare provider network</li>
                  <li>• Building unified intelligence layer for AI agents</li>
                  <li>• Needs production-grade governance</li>
                  <li>• CN deployment for HIPAA compliance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-green-400 mb-2">CONFIGURATION</h4>
                <ul className="space-y-1 text-foreground">
                  <li>• <strong>5 DI Workspaces</strong> (Patient Outcomes, Operations, Revenue Cycle, Clinical Intelligence, Population Health)</li>
                  <li>• <strong>Intelligence Layer</strong> (Platform Fee)</li>
                  <li>• <strong>CN execution</strong> (customer infra)</li>
                  <li>• <strong>BYOT</strong> (customer LLM tokens)</li>
                  <li>• <strong>12 AI Agents</strong> (distributed across use cases)</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-green-400 mb-3">KEY PRICING CONSIDERATIONS</h4>
              <ul className="space-y-2 text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span><strong>AI-native architecture</strong> = Intelligence Layer as foundation for agents and reasoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span><strong>5 strategic use cases</strong> = high-value DI workspaces with unlimited clinical/ops users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span><strong>12 AI Agents</strong> = significant agent deployment (priced per agent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span><strong>CN + BYOT</strong> = full control for HIPAA/security compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">→</span>
                  <span><strong>Position as:</strong> "Production-grade AI platform that unifies intelligence, governance, and automation"</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="glass-panel p-8 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border-2 border-amber-500/30">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">🎯 Pattern-Matching Guide</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-amber-400 mb-3">WHEN TO USE DI WORKSPACES</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Strategic cross-functional use cases</li>
                  <li>• High-value business outcomes</li>
                  <li>• Unlimited internal users needed</li>
                  <li>• Fewer workspaces, higher value each</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-400 mb-3">WHEN TO USE EI WORKSPACES</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• Multi-tenant SaaS applications</li>
                  <li>• Embedded analytics for customers/partners</li>
                  <li>• Scalable per-customer deployment</li>
                  <li>• Many workspaces, lower value each</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-400 mb-3">CLOUD VS. CN</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• <strong>Cloud:</strong> Speed, simplicity, fully managed</li>
                  <li>• <strong>CN:</strong> Control, compliance, customer infra</li>
                  <li>• Pricing remains the same—only execution changes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-amber-400 mb-3">BYOT VS. GD TOKENS</h4>
                <ul className="space-y-2 text-foreground">
                  <li>• <strong>BYOT:</strong> Customer supplies LLM tokens</li>
                  <li>• <strong>GD Tokens:</strong> Predictable monthly cost</li>
                  <li>• Independent of Cloud/CN choice</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Positioning Summary */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-green-400">8. Sales Positioning Summary</h2>
          <p className="text-foreground text-lg leading-relaxed">
            Your external message must remain simple, consistent, and customer-friendly:
          </p>
          
          <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-8">
            <p className="text-white text-lg leading-relaxed">
              "GoodData provides a full-featured AI platform through the Intelligence Layer. Customers deploy intelligence using workspaces—per use case for Decision Intelligence and per tenant or environment for Embedded Intelligence. All workspaces include unlimited users. Customers can add custom or advanced agents at any time, priced per agent. Deployment (Cloud or CN) and token responsibility (BYOT or GoodData-supplied) provide flexibility without changing the core pricing structure."
            </p>
          </div>
        </div>
      </section>

      {/* What NOT to Share */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6 border-2 border-red-500/50">
          <h2 className="text-3xl font-outfit font-bold text-red-400">9. What Sales Should NEVER Share Externally</h2>
          
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-1">✗</span>
              <span>Internal logic for pricing Decision Intelligence workspaces</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-1">✗</span>
              <span>Workspace equivalency calculations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-1">✗</span>
              <span>User-based internal mapping</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-1">✗</span>
              <span>How execution responsibility affects cost structure</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl mt-1">✗</span>
              <span>The internal relationship between agents and AI functions</span>
            </li>
          </ul>

          <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-6 mt-6">
            <p className="text-red-200 font-semibold text-lg">⚠️ These remain internal-only.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
