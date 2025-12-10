import { useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Search, Home, FileText, Video, Presentation, BookOpen, Image, Sparkles, MessageSquare, DollarSign, Target } from 'lucide-react';
import { Input } from '@/components/ui/input';

type Pillar = 'all' | 'decision-intelligence' | 'embedded-intelligence' | 'ai-modernization' | 'ai-architecture';
type ResourceType = 'all' | 'video' | 'presentation' | 'battle-card' | 'ebook' | 'infographic' | 'playbook-selector' | 'discovery-script';

interface Resource {
  id: string;
  title: string;
  description: string;
  pillar: Pillar[];
  type: ResourceType;
  link: string;
  thumbnail?: string;
}

const resources: Resource[] = [
  {
    id: 'playbook-selector',
    title: 'Playbook Selector',
    description: 'Answer 3 quick questions to get a personalized playbook recommendation with talk tracks.',
    pillar: ['all'],
    type: 'playbook-selector',
    link: '/playbook-selector',
  },
  {
    id: 'make-your-data-work',
    title: 'Make Your Data Work for You',
    description: 'From dashboards to decisions: See how active intelligence shifts from "you work with data" to "data works for you".',
    pillar: ['decision-intelligence'],
    type: 'infographic',
    link: '/infographics',
  },
  {
    id: 'dashboards-to-intelligence',
    title: 'From Dashboards to Decisions',
    description: 'Visual guide showing the dashboard era limits and the AI-powered platform solution.',
    pillar: ['decision-intelligence'],
    type: 'infographic',
    link: '/infographics',
  },
  {
    id: 'ai-modernization-deck',
    title: 'AI Modernization Deck',
    description: 'Comprehensive overview of AI modernization benefits and implementation strategies.',
    pillar: ['ai-modernization'],
    type: 'presentation',
    link: '/presentations',
  },
  {
    id: 'ai-mod-video',
    title: 'AI Modernization Explainer',
    description: 'Transform legacy BI into AI-ready architecture with governed semantics.',
    pillar: ['ai-modernization'],
    type: 'video',
    link: '/videos',
  },
  {
    id: 'decision-intelligence-demo',
    title: 'Decision Intelligence Demo',
    description: 'See how banks are moving past static BI dashboards and embracing AI-powered intelligence systems.',
    pillar: ['decision-intelligence'],
    type: 'video',
    link: '/videos',
  },
  {
    id: 'mic-video',
    title: 'MIC - Powered By AI Cloud',
    description: 'Mastercard Intelligence Center: Self-service platform for real-time portfolio insights and cardholder behavior.',
    pillar: ['embedded-intelligence'],
    type: 'video',
    link: '/videos',
  },
  {
    id: 'ai-mod-ebook',
    title: 'We Watched AI Tackle a Nightmare BI Project',
    description: 'See how AI-powered migration accelerates complex DAX transformations from weeks to days.',
    pillar: ['ai-modernization'],
    type: 'ebook',
    link: '/ebooks',
  },
  {
    id: 'ai-mod-infographic',
    title: 'From Complex DAX to AI-Ready Analytics',
    description: 'Visual guide showing the challenge of legacy BI and the AI-powered solution.',
    pillar: ['ai-modernization'],
    type: 'infographic',
    link: '/infographics',
  },
];

const pillarConfig = {
  'all': { label: 'All', color: 'from-pink-500 to-cyan-500' },
  'decision-intelligence': { label: 'Decision Intelligence', color: 'from-purple-500 to-purple-600' },
  'embedded-intelligence': { label: 'Embedded Intelligence', color: 'from-pink-500 to-pink-600' },
  'ai-modernization': { label: 'AI Modernization', color: 'from-cyan-500 to-cyan-600' },
  'ai-architecture': { label: 'AI Architecture', color: 'from-blue-500 to-blue-600' },
};

const typeConfig = {
  'all': { label: 'All', icon: null },
  'video': { label: 'Videos', icon: Video },
  'presentation': { label: 'Presentations', icon: Presentation },
  'battle-card': { label: 'Battle Cards', icon: FileText },
  'ebook': { label: 'eBooks', icon: BookOpen },
  'infographic': { label: 'Infographics', icon: Image },
  'playbook-selector': { label: 'Playbook Selector', icon: Sparkles },
  'discovery-script': { label: 'Discovery Scripts', icon: MessageSquare },
};

export default function ResourcesOverview() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPillar, setSelectedPillar] = useState<Pillar>('all');
  const [selectedType, setSelectedType] = useState<ResourceType>('all');

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      // Exclude Playbook Selector from grid (it's in the hero section)
      if (resource.type === 'playbook-selector') return false;
      
      // Search filter
      const matchesSearch = searchQuery === '' || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Pillar filter
      const matchesPillar = selectedPillar === 'all' || resource.pillar.includes(selectedPillar) || resource.pillar.includes('all');

      // Type filter
      const matchesType = selectedType === 'all' || resource.type === selectedType;

      return matchesSearch && matchesPillar && matchesType;
    });
  }, [searchQuery, selectedPillar, selectedType]);

  const getResourceIcon = (type: ResourceType) => {
    const Icon = typeConfig[type]?.icon;
    return Icon ? <Icon className="w-16 h-16 text-white/60" /> : <FileText className="w-16 h-16 text-white/60" />;
  };

  const getPillarBadgeColor = (pillar: Pillar) => {
    if (pillar === 'all') return 'bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border-pink-500/30';
    const colorClass = pillarConfig[pillar].color;
    return `bg-gradient-to-r ${colorClass}/20 border-${colorClass.split('-')[1]}-500/30`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] text-white">
      <div className="container py-12 px-4">
        {/* Back to Home */}
        <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Sales Resources
          </h1>
          <p className="text-xl text-white/70">
            Everything you need to close deals—organized by play, ready to use.
          </p>
        </div>

        {/* Hero Section - Playbook Selector, Email Sequence Builder, Pricing Framework & Intelligence Assessment */}
        <div className="mb-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Playbook Selector Card */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Most Powerful Tool
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Not Sure Which Play to Use?
            </h2>
            
            <p className="text-lg text-white/80 mb-6 max-w-3xl leading-relaxed">
              Answer 3 quick questions about your prospect and receive a personalized recommendation with customized talk tracks, discovery questions, value propositions, and objection responses—all in under 60 seconds.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Personalized in 60 seconds
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Customized talk tracks included
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Download as PDF for calls
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Based on buyer persona & pain points
              </div>
            </div>
            
            <Link href="/playbook-selector">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold rounded-xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all flex items-center gap-3 text-lg group">
                Launch Playbook Selector
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-yellow-400">⭐</span>
                <span><strong className="text-yellow-400">Most Popular Tool</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>📊</span>
                <span>Used <strong className="text-yellow-400">247 times</strong> this quarter</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>🎯</span>
                <span><strong className="text-yellow-400">95% confidence</strong> scoring</span>
              </div>
            </div>
            </div>
          </div>

          {/* Email Sequence Builder Card */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                SDR Essential
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Build Email Sequences
            </h2>
            
            <p className="text-lg text-white/80 mb-6 max-w-3xl leading-relaxed">
              Generate personalized outbound email sequences based on industry, play, and prospect details. Get 4 ready-to-send emails with industry-specific messaging, pain points, and GoodData value propositions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                5 industries covered
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                4-email cadence included
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Copy & paste ready
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Industry research built-in
              </div>
            </div>
            
            <Link href="/email-sequence-builder">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all flex items-center gap-3 text-lg group">
                Launch Email Builder
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>💼</span>
                <span><strong className="text-cyan-400">Perfect for SDRs</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>⚡</span>
                <span><strong className="text-cyan-400">Generate in seconds</strong></span>
              </div>
            </div>
            </div>
          </div>

          {/* Pricing Framework Card */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                Critical for Deal Structuring
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              Pricing Framework
            </h2>
            
            <p className="text-lg text-white/80 mb-6 max-w-3xl leading-relaxed">
              Master the complete GoodData pricing model: Intelligence Layer, Workspaces, AI Agents, and execution options (Cloud/CN/BYOT). Everything you need to structure and position deals correctly.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                5 pricing levers explained
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Cloud/CN/BYOT models
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                DI vs EI comparison
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Sales positioning scripts
              </div>
            </div>
            
            <Link href="/pricing">
              <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all flex items-center gap-3 text-lg group">
                View Pricing Framework
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>💰</span>
                <span><strong className="text-amber-400">Internal Sales Tool</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>📋</span>
                <span><strong className="text-amber-400">Complete framework</strong></span>
              </div>
            </div>
            </div>
          </div>

          {/* Intelligence Assessment Card */}
          <div className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm h-full flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                AI Readiness Diagnostic
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Readiness for Data
            </h2>
            
            <p className="text-lg text-white/80 mb-6 max-w-3xl leading-relaxed">
              12-question diagnostic that reveals your prospect's AI readiness score, identifies critical gaps, and recommends the perfect GoodData play. Takes 5 minutes, generates personalized PDF report.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                AI readiness score (0-100)
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                8 gap categories analyzed
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <span className="text-green-400 font-bold">✓</span>
                Tailored play recommendations
              </div>
            </div>
            
            <Link href="/intelligence-assessment">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all flex items-center gap-3 text-lg group">
                Take Assessment
                <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </Link>
            
            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>📊</span>
                <span><strong className="text-purple-400">Lead Qualifier</strong></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <span>⏱️</span>
                <span><strong className="text-cyan-400">5 minutes</strong></span>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 text-lg bg-white/5 border-white/10 rounded-2xl focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all"
            />
          </div>
        </div>

        {/* Filter by Play */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-white/60 mb-3">Filter by Play:</h3>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(pillarConfig) as Pillar[]).map((pillar) => (
              <button
                key={pillar}
                onClick={() => setSelectedPillar(pillar)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedPillar === pillar
                    ? `bg-gradient-to-r ${pillarConfig[pillar].color} text-white shadow-lg`
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {pillarConfig[pillar].label}
              </button>
            ))}
          </div>
        </div>

        {/* Filter by Type */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-white/60 mb-3">Filter by Type:</h3>
          <div className="flex flex-wrap gap-3">
            {(Object.keys(typeConfig) as ResourceType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedType === type
                    ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg shadow-pink-500/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {typeConfig[type].label}
              </button>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Link key={resource.id} href={resource.link}>
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                  {/* Thumbnail/Icon */}
                  <div className="mb-4 flex items-center justify-center h-32 bg-white/5 rounded-xl">
                    {getResourceIcon(resource.type)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.pillar.filter(p => p !== 'all').map((pillar) => (
                      <span
                        key={pillar}
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getPillarBadgeColor(pillar)}`}
                      >
                        {pillarConfig[pillar].label}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10">
                      {typeConfig[resource.type].label}
                    </span>
                  </div>

                  {/* View Button */}
                  <div className="flex items-center gap-2 text-pink-400 font-medium text-sm group-hover:gap-3 transition-all">
                    View Resource
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-white/40 text-lg mb-2">No resources found</div>
            <p className="text-white/30 text-sm">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
