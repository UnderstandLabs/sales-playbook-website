import Layout from "@/components/Layout";
import { Download, FileText, Presentation, Video } from "lucide-react";
import { useEffect } from "react";

export default function Resources() {
  useEffect(() => {
    document.title = "Resources | GoodData Playbook";
  }, []);

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
              Sales Assets
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to close the deal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Asset 1 */}
            <div className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
                        <Presentation className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">PPTX</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">First Call Deck</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    The standard 12-slide pitch deck focusing on the "Dashboard Barrier" narrative.
                </p>
                <a href="/assets/first_call_deck.pptx" download className="w-full py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Download PPTX
                </a>
            </div>

            {/* Asset 2 */}
            <div className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-green-500/20 text-green-400">
                        <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">PDF</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">One-Pager: CIO</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    Executive summary tailored for the CIO persona. Focuses on governance and security.
                </p>
                <a href="/assets/cio_one_pager.pdf" download className="w-full py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Download PDF
                </a>
            </div>

            {/* Asset 3 */}
            <div className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
                        <Video className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">MP4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Explainer Video</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    Unlocking AI: From Debt to Data - Understanding the modernization journey.
                </p>
                <a href="/explainer-video.mp4" download className="w-full py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Download MP4
                </a>
            </div>
            
             {/* Asset 4 */}
             <div className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-orange-500/20 text-orange-400">
                        <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground border border-white/10 px-2 py-1 rounded">PDF</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Discovery Script</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    List of 20+ questions to uncover the "Dashboard Trap" and qualify the opportunity.
                </p>
                <a href="/assets/discovery_script.pdf" download className="w-full py-2 rounded-lg bg-white/5 hover:bg-primary hover:text-white text-sm font-medium transition-all flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" /> Download Script
                </a>
            </div>

            {/* Asset 5: eBook */}
            <div className="glass-card p-6 rounded-2xl group hover:bg-white/10 transition-colors cursor-pointer border border-primary/30 shadow-[0_0_30px_-10px_var(--color-primary)]">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        <FileText className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-primary border border-primary/30 px-2 py-1 rounded bg-primary/10">EBOOK</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">The Complete Playbook</h3>
                <p className="text-sm text-muted-foreground mb-6">
                    "Break the Dashboard Barrier" - The full strategy guide in a single, branded PDF.
                </p>
                <a href="/assets/gooddata_playbook_ebook.pdf" download className="w-full py-2 rounded-lg bg-primary hover:bg-primary/80 text-white text-sm font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                    <Download className="w-4 h-4" /> Download eBook
                </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
