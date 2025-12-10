import { useAuth } from "@/_core/hooks/useAuth";
import { ReactNode } from "react";
import { Redirect } from "wouter";
import { ShieldX } from "lucide-react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading, user } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  // Check if user is approved
  if (user && user.approved !== 1) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F0518] via-[#1C0D3F] to-[#0F0518]">
        <div className="glass-card p-12 rounded-3xl max-w-md w-full mx-4 border border-white/10 shadow-2xl text-center">
          <ShieldX className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="font-outfit text-2xl font-bold text-white mb-4">
            Access Pending
          </h1>
          <p className="text-muted-foreground mb-2">
            Your account is awaiting approval from an administrator.
          </p>
          <p className="text-sm text-muted-foreground">
            Email: {user.email}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
