import { useState, useEffect, useMemo } from "react";
import { Search, FileText, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";

interface SearchResult {
  title: string;
  path: string;
  excerpt: string;
  category: string;
}

// Define searchable content from all pages
const searchableContent: SearchResult[] = [
  // Home
  { title: "From Dashboards to Intelligence", path: "/", excerpt: "The AI Era Demands Readiness. Intelligence Requires a New Way to Work With Information. Make Your Data Work for You", category: "Home" },
  
  // Our Story
  { title: "Our Story - The Vision", path: "/story", excerpt: "Roman Stanek's vision for living data products and how ChatGPT revealed the platform's perfect positioning", category: "Our Story" },
  { title: "Our Story - 2021 Realization", path: "/story", excerpt: "The realization that data products need to be living, breathing, and intelligent", category: "Our Story" },
  { title: "Our Story - Intelligence Layer Today", path: "/story", excerpt: "The platform that transforms data into intelligent assets", category: "Our Story" },
  
  // Our Message
  { title: "Our Message - Make Your Data Work for You", path: "/our-message", excerpt: "Why we are evolving our message and why it's exactly the right moment. This is not a pivot - it's an amplification.", category: "Our Message" },
  { title: "Our Message - Dashboard Limitations", path: "/our-message", excerpt: "Dashboards are hitting their limits. They are static, backward-looking, and require people to do the interpretation.", category: "Our Message" },
  { title: "Our Message - AI Readiness", path: "/our-message", excerpt: "Everyone wants AI, but almost no one is AI-ready. The problem is foundation.", category: "Our Message" },
  { title: "Our Message - Intelligence Layer", path: "/our-message", excerpt: "GoodData's Intelligence Layer with AI Lake, AI Hub, and AI Apps", category: "Our Message" },
  
  // Our Plays
  { title: "Our Plays Overview", path: "/four-pillars", excerpt: "Explore our four playbooks: Decision Intelligence, Embedded Intelligence, AI Modernization, and AI Architecture", category: "Our Plays" },
  { title: "Pillar Selection Matrix", path: "/four-pillars", excerpt: "Qualification table mapping customer pain points to recommended pillars, buyer personas, and industry fit", category: "Our Plays" },
  
  // Decision Intelligence
  { title: "Decision Intelligence - For Business Leaders", path: "/decision-intelligence", excerpt: "Transform from reactive dashboards to proactive intelligence. AI-powered insights that explain, recommend, and act.", category: "Decision Intelligence" },
  { title: "Decision Intelligence - Performance Copilot", path: "/decision-intelligence", excerpt: "AI agent that monitors KPIs, explains changes, and recommends actions automatically", category: "Decision Intelligence" },
  { title: "Decision Intelligence - Revenue Intelligence", path: "/decision-intelligence", excerpt: "Predict pipeline risks, optimize pricing, and automate forecasting with AI", category: "Decision Intelligence" },
  { title: "Decision Intelligence - Campaign", path: "/decision-intelligence", excerpt: "Identify the Trap, Pitch the Bridge, Close with Trust - the three-step campaign for business leaders", category: "Decision Intelligence" },
  { title: "Decision Intelligence - 45-Day Prototype", path: "/decision-intelligence", excerpt: "Rapid proof-of-concept delivering one AI-powered use case in 45 days", category: "Decision Intelligence" },
  
  // Embedded Intelligence
  { title: "Embedded Intelligence - For Product Leaders", path: "/embedded-intelligence", excerpt: "Turn analytics into a product feature. Embed AI-powered insights directly into your customer-facing applications.", category: "Embedded Intelligence" },
  { title: "Embedded Intelligence - Multi-Tenant Architecture", path: "/embedded-intelligence", excerpt: "Native multi-tenancy with row-level security, white-labeling, and per-customer customization", category: "Embedded Intelligence" },
  { title: "Embedded Intelligence - Competitive Positioning", path: "/embedded-intelligence", excerpt: "GoodData vs ThoughtSpot, Tableau, Looker, Metabase, and DIY stacks - comprehensive comparison", category: "Embedded Intelligence" },
  { title: "Embedded Intelligence - Mastercard MIC", path: "/embedded-intelligence", excerpt: "Proof of execution: Mastercard's Multi-Channel Insights platform powered by GoodData", category: "Embedded Intelligence" },
  { title: "Embedded Intelligence - Zartico", path: "/embedded-intelligence", excerpt: "SaaS analytics platform for destination marketing organizations", category: "Embedded Intelligence" },
  
  // AI Modernization
  { title: "AI Modernization - For Analytics & Data Teams", path: "/ai-modernization", excerpt: "Modernize your analytics stack for the AI era. Replace fragmented pipelines with governed semantic layer.", category: "AI Modernization" },
  { title: "AI Modernization - Semantic Layer", path: "/ai-modernization", excerpt: "Centralized business logic layer that ensures consistent metrics across all tools and AI agents", category: "AI Modernization" },
  { title: "AI Modernization - Analytics as Code", path: "/ai-modernization", excerpt: "Version-controlled, testable, and scalable analytics using modern software engineering practices", category: "AI Modernization" },
  
  // AI Architecture
  { title: "AI Architecture - For Platform & Data Leaders", path: "/ai-architecture", excerpt: "Unified, AI-native intelligence platform that replaces fragmented stacks and accelerates time-to-value.", category: "AI Architecture" },
  { title: "AI Architecture - DIY vs Point Solutions", path: "/ai-architecture", excerpt: "Why DIY lakehouse assemblies and semantic-only point solutions fail to deliver intelligence", category: "AI Architecture" },
  { title: "AI Architecture - Intelligence Layer", path: "/ai-architecture", excerpt: "Complete platform fusing semantic modeling, reasoning, governance, and AI-powered apps", category: "AI Architecture" },
  { title: "AI Architecture - AI Reasoning Governance", path: "/ai-architecture", excerpt: "Govern and orchestrate AI reasoning with lineage, validation, and observability", category: "AI Architecture" },
  { title: "AI Architecture - Decision Automation", path: "/ai-architecture", excerpt: "Embed agents, assistants, and actions directly into user workflows for decision automation", category: "AI Architecture" },
  { title: "AI Architecture - Competitive Comparison", path: "/ai-architecture", excerpt: "Semantic Layer Tools vs DIY Lakehouse vs GoodData Intelligence Layer - complete capabilities matrix", category: "AI Architecture" },
  
  // Resources
  { title: "Sales Resources", path: "/resources", excerpt: "Battle cards, competitive positioning, demo scripts, and sales enablement materials", category: "Resources" },
  
  // Competitive Intelligence
  { title: "vs ThoughtSpot", path: "/embedded-intelligence", excerpt: "ThoughtSpot comparison: search-first BI vs embeddable intelligence platform", category: "Competitive" },
  { title: "vs Tableau", path: "/embedded-intelligence", excerpt: "Tableau comparison: visualization tool vs complete analytics platform", category: "Competitive" },
  { title: "vs Looker", path: "/embedded-intelligence", excerpt: "Looker comparison: modeling layer vs full-stack intelligence", category: "Competitive" },
  { title: "vs Cube/dbt", path: "/ai-architecture", excerpt: "Semantic layer point solutions vs complete Intelligence Layer", category: "Competitive" },
  { title: "vs DIY Stack", path: "/ai-architecture", excerpt: "DIY lakehouse assembly vs integrated AI-native platform", category: "Competitive" },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [, setLocation] = useLocation();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return searchableContent
      .filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.excerpt.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 10); // Limit to 10 results
  }, [query]);

  const handleResultClick = (path: string) => {
    setLocation(path);
    onOpenChange(false);
    setQuery("");
  };

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4 pb-0">
          <DialogTitle className="sr-only">Search Playbook</DialogTitle>
        </DialogHeader>
        
        <div className="relative">
          <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search playbook content..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 border-b rounded-none pl-12 pr-12 h-14 text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-4 h-5 w-5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="max-h-96 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for topics like "decision intelligence", "semantic layer", or "competitive"</p>
            </div>
          )}

          {results.length > 0 && (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={index}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full px-4 py-3 hover:bg-accent transition-colors text-left border-b border-border last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-sm truncate">{result.title}</h3>
                        <span className="text-xs text-muted-foreground px-2 py-0.5 bg-muted rounded-full flex-shrink-0">
                          {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{result.excerpt}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {!query && (
            <div className="p-8 text-center text-muted-foreground">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p className="font-medium mb-2">Search the Playbook</p>
              <p className="text-sm">Find content across all pages including competitive intel, use cases, and sales guidance</p>
            </div>
          )}
        </div>

        <div className="border-t border-border px-4 py-3 bg-muted/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">↑</kbd>
                <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">↵</kbd>
                <span>Select</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-2 py-1 bg-background border border-border rounded text-xs">ESC</kbd>
              <span>Close</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
