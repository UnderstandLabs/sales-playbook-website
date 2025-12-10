import { Link } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ShoppingCart, Package, TrendingUp, Users, Zap, Brain, CheckCircle2, DollarSign, Truck, Store, Tag } from "lucide-react";

export default function IndustryRetail() {
  useEffect(() => {
    document.title = "Retail Solutions | GoodData AI Modernization Sales Playbook";
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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-4">
            <ShoppingCart className="w-4 h-4" />
            Industry Solutions
          </div>
          <h1 className="text-5xl md:text-6xl font-outfit font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Retail & E-Commerce
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Intelligence Layer Purpose-Built for Customer-Centric, AI-Driven Retail
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 space-y-6">
          <h2 className="text-3xl font-outfit font-bold text-amber-400 flex items-center gap-3">
            <Brain className="w-8 h-8" />
            The Intelligence Layer for Retail
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            The GoodData Intelligence Layer unifies customer, inventory, and operational data into a governed semantic foundation that powers:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">AI-driven demand forecasting and inventory optimization</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Personalized customer experiences and recommendations</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Predictive supply chain and logistics intelligence</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Real-time pricing and promotion optimization</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Consistent KPIs across online, in-store, and marketplace channels</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
              <p className="text-foreground">Omnichannel customer journey analytics and attribution</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-xl p-8 mt-8">
            <p className="text-xl font-semibold text-white text-center">
              Retailers can finally move from:<br />
              <span className="text-2xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Historical Reports → Predictive Insights → Autonomous Commerce
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
              AI-Era Retail Use Cases
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              GoodData equips retailers with an enterprise-ready intelligence foundation for their most critical AI initiatives.
            </p>
          </div>

          {/* Inventory Optimization */}
          <div className="glass-panel p-8 border-l-4 border-orange-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/20 border border-orange-500/30">
                <Package className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Inventory Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Predict demand, optimize stock levels, and reduce waste with AI-powered inventory intelligence.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Demand forecasting by SKU, location, and channel</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Automated replenishment recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Stockout and overstock prevention</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span className="text-foreground">Seasonal trend and promotion impact analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-purple-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Customer Intelligence & Personalization</h3>
                <p className="text-muted-foreground mb-4">
                  Understand customer behavior, predict churn, and deliver personalized experiences at scale.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Customer lifetime value prediction</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Churn risk identification and retention campaigns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Next-best-action and product recommendations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-foreground">Segment-based personalization and targeting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Supply Chain Intelligence */}
          <div className="glass-panel p-8 border-l-4 border-blue-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Supply Chain Intelligence</h3>
                <p className="text-muted-foreground mb-4">
                  Optimize logistics, reduce costs, and improve delivery performance with end-to-end visibility.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Supplier performance monitoring and risk detection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Delivery time prediction and route optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Warehouse efficiency and labor optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span className="text-foreground">Returns forecasting and reverse logistics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Omnichannel Operations */}
          <div className="glass-panel p-8 border-l-4 border-green-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-green-500/20 border border-green-500/30">
                <Store className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Omnichannel Operations</h3>
                <p className="text-muted-foreground mb-4">
                  Unify online and offline experiences with consistent insights across all customer touchpoints.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Cross-channel customer journey analytics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Buy-online-pickup-in-store (BOPIS) optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Store performance and foot traffic analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">•</span>
                    <span className="text-foreground">Channel attribution and marketing ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & Promotions */}
          <div className="glass-panel p-8 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30">
                <Tag className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Pricing & Promotions Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Maximize margins and revenue with AI-driven dynamic pricing and promotion strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Competitive price monitoring and optimization</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Promotion effectiveness and cannibalization analysis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Markdown optimization and clearance planning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">•</span>
                    <span className="text-foreground">Price elasticity and demand sensitivity modeling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Retail Organizations Choose GoodData */}
      <section className="container pb-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-outfit font-bold text-white">
              Why Retail Organizations Choose GoodData
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-Time Commerce Intelligence</h3>
                  <p className="text-foreground">
                    Continuous monitoring of inventory, customer behavior, and market conditions that enable instant responses to demand shifts.
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
                    Unified customer, product, and operational semantics that ensure consistent metrics across e-commerce, POS, and marketplace platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6">
              <div className="flex items-start gap-3 mb-3">
                <Store className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Omnichannel Unification</h3>
                  <p className="text-foreground">
                    Single source of truth for customer journeys that span web, mobile, in-store, and social commerce touchpoints.
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
                    Pre-built retail metrics and AI agents that deliver measurable revenue impact in weeks, not months or years.
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
              Retailers Are Not Choosing a BI Tool — They Are Choosing Their Commerce AI Foundation
            </p>
            <p className="text-lg text-muted-foreground">
              GoodData consistently wins in retail because the alternatives lack the real-time intelligence, 
              omnichannel unification, and AI-native architecture required for customer-centric commerce.
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
                    <span>Define metrics but do not operationalize commerce intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No demand forecasting, customer predictions, or pricing recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Not suited for real-time inventory or omnichannel workflows</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  End-to-end commerce intelligence: semantics + reasoning + governed, embedded AI experiences for retail operations.
                </p>
              </div>
            </div>
          </div>

          {/* DIY Stack */}
          <div className="glass-panel p-8 border-l-4 border-red-500">
            <h3 className="text-2xl font-bold text-white mb-4">DIY Stack (E-Commerce Platform + Data Warehouse + BI + ML Tools)</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-red-400 mb-3">LIMITATIONS</h4>
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Requires 10+ tools stitched together across commerce, marketing, and operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>No single source of customer or product KPI governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Slowest time-to-value for revenue-generating initiatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">✗</span>
                    <span>Hard to maintain consistency across online and offline channels</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">GOODDATA ADVANTAGE</h4>
                <p className="text-foreground">
                  One platform that unifies customer data, commerce semantics, reasoning, and AI experiences—with measurable revenue impact delivered in weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Retail Advantage */}
      <section className="container pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel p-12 bg-gradient-to-br from-orange-500/10 via-amber-500/10 to-yellow-500/10 border-2 border-orange-500/30">
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-outfit font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                The Retail Advantage
              </h2>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Retailers choose GoodData because it delivers what legacy BI and fragmented commerce stacks cannot: 
                <span className="font-bold text-amber-400"> a governed, AI-native intelligence layer</span> that unifies customer, 
                inventory, and operational data into real-time, actionable insights that drive revenue growth and customer loyalty.
              </p>
              <div className="pt-6">
                <p className="text-2xl font-bold text-white">
                  From Historical Reports → Predictive Insights → Autonomous Commerce
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
