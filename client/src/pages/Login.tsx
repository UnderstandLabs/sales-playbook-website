import { Button } from "@/components/ui/button";
import { getLoginUrl } from "@/const";
import { Lock, ShieldCheck } from "lucide-react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0518] via-[#1C0D3F] to-[#0F0518] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
      </div>

      <div className="relative z-10 glass-card p-12 rounded-3xl max-w-md w-full mx-4 border border-white/10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/20 mb-6">
            <Lock className="w-10 h-10 text-primary" />
          </div>
          <h1 className="font-outfit text-3xl font-bold text-white mb-2">
            Sales Playbook
          </h1>
          <p className="text-muted-foreground">
            Internal Resource - Authentication Required
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              Secure access to sales materials and resources
            </p>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <div className="text-primary text-sm font-medium">
              ℹ️ Access restricted to @gooddata.com or @hypergen.io email addresses
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.location.href = getLoginUrl()}
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-14 text-lg shadow-[0_0_30px_-5px_var(--color-primary)] transition-all hover:scale-105"
        >
          Sign In with Manus
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-6">
          This is an internal tool for authorized sales team members only.
        </p>
      </div>
    </div>
  );
}
