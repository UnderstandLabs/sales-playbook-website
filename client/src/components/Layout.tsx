import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SearchDialog from "@/components/SearchDialog";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Close Resources dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const { user } = useAuth();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/story" },
    { name: "Our Message", path: "/our-message" },
    { name: "Our Plays", path: "/four-pillars" },
    { name: "Positioning Intelligence", path: "/positioning-intelligence" },
  ];

  const industriesItems = [
    { name: "Banking & Financial Services", path: "/industries/banking" },
    { name: "Education", path: "/industries/education" },
    { name: "Healthcare & Life Sciences", path: "/industries/healthcare" },
    { name: "Retail & E-Commerce", path: "/industries/retail" },
    { name: "Manufacturing & Industrial", path: "/industries/manufacturing" },
    { name: "Public Safety & Law Enforcement", path: "/industries/public-safety" },
    { name: "Private Equity & Private Markets", path: "/industries/private-equity" },
  ];

  const resourcesItems = [
    { name: "Presentations", path: "/presentations" },
    { name: "Battle Cards", path: "/battle-cards" },
    { name: "Discovery Scripts", path: "/discovery-scripts" },
    { name: "Videos", path: "/videos" },
    { name: "eBooks", path: "/ebooks" },
    { name: "Infographics", path: "/infographics" },
    { name: "Email Sequence Builder", path: "/email-sequence-builder" },
    { name: "Pricing", path: "/pricing" },
  ];

  // Admin will be added at the end after Resources

  const isIndustriesActive = industriesItems.some(item => location === item.path);
  const isResourcesActive = resourcesItems.some(item => location === item.path);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel h-16">
        <div className="container h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                G
              </div>
              <span className="font-outfit font-bold text-xl tracking-tight hidden sm:block">
                GoodData <span className="text-primary font-light">Playbook</span>
              </span>
            </div>
          </Link>

          {/* Search Button - Moved to right of logo */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-muted-foreground hover:text-white hover:bg-white/5 ml-4"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline">Search</span>
            <kbd className="hidden lg:inline-block px-2 py-0.5 text-xs bg-white/10 border border-white/20 rounded">⌘K</kbd>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
                    location === item.path
                      ? "bg-white/10 text-white shadow-inner backdrop-blur-sm"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.name}
                </div>
              </Link>
            ))}

            {/* Industries Dropdown */}
            <div className="relative" ref={industriesRef}>
              <div className="flex items-center">
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-1",
                    isIndustriesActive
                      ? "bg-white/10 text-white shadow-inner backdrop-blur-sm"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  Industries
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isIndustriesOpen && "rotate-180")} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isIndustriesOpen && (
                <div className="absolute top-full mt-2 right-0 w-64 glass-card rounded-xl shadow-xl border border-white/10 overflow-hidden">
                  {industriesItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <div
                        onClick={() => setIsIndustriesOpen(false)}
                        className={cn(
                          "px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer border-b border-white/5 last:border-0",
                          location === item.path
                            ? "bg-primary/20 text-white"
                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <div className="flex items-center">
                <Link href="/resources">
                  <div
                    className={cn(
                      "px-4 py-2 rounded-l-full text-sm font-medium transition-all duration-200 cursor-pointer",
                      location === "/resources" || isResourcesActive
                        ? "bg-white/10 text-white shadow-inner backdrop-blur-sm"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    )}
                  >
                    Resources
                  </div>
                </Link>
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={cn(
                    "px-2 py-2 rounded-r-full text-sm font-medium transition-all duration-200 cursor-pointer",
                    location === "/resources" || isResourcesActive
                      ? "bg-white/10 text-white shadow-inner backdrop-blur-sm"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isResourcesOpen && "rotate-180")} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div className="absolute top-full mt-2 right-0 w-56 glass-card rounded-xl shadow-xl border border-white/10 overflow-hidden">
                  {resourcesItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <div
                        onClick={() => setIsResourcesOpen(false)}
                        className={cn(
                          "px-4 py-3 text-sm font-medium transition-all duration-200 cursor-pointer border-b border-white/5 last:border-0",
                          location === item.path
                            ? "bg-primary/20 text-white"
                            : "text-muted-foreground hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Admin Link (only for admin users) */}
            {user?.role === 'admin' && (
              <Link href="/admin">
                <div
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
                    location === "/admin"
                      ? "bg-white/10 text-white shadow-inner backdrop-blur-sm"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  )}
                >
                  Admin
                </div>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-muted-foreground hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 left-0 right-0 bottom-0 glass-panel overflow-y-auto">
            <nav className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer",
                      location === item.path
                        ? "bg-white/10 text-white"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    )}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}

              {/* Search in Mobile */}
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 text-muted-foreground hover:text-white hover:bg-white/5 flex items-center gap-2 mt-4"
              >
                <Search className="w-5 h-5" />
                Search
              </button>

              {/* Resources Section in Mobile */}
              <div className="mt-2">
                <Link href="/resources">
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 cursor-pointer mb-2",
                      location === "/resources"
                        ? "bg-white/10 text-white"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    )}
                  >
                    Resources Overview
                  </div>
                </Link>
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Industries
                </div>
                {industriesItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer",
                        location === item.path
                          ? "bg-white/10 text-white"
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}

                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-4">
                  Resource Categories
                </div>
                {resourcesItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <div
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer",
                        location === item.path
                          ? "bg-white/10 text-white"
                          : "text-muted-foreground hover:text-white hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Admin in Mobile (only for admin users) */}
              {user?.role === 'admin' && (
                <Link href="/admin">
                  <div
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 cursor-pointer mt-4",
                      location === "/admin"
                        ? "bg-white/10 text-white"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                    )}
                  >
                    Admin
                  </div>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="glass-panel py-8 mt-20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 GoodData. Internal Sales Playbook.
            </p>
            <div className="flex items-center gap-6">
              <a href="/story" className="text-sm text-muted-foreground hover:text-white transition-colors">
                About
              </a>
              <a href="/admin" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </div>
  );
}
