import { useEffect, useState } from "react";

type User = {
  id: string;
  name: string;
  email?: string;
  approved: number;
} | null;

export function useAuth() {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ⚠️ DEMO ONLY:
    // Pretend the user is always logged in.
    setUser({
      id: "demo",
      name: "Demo User",
      email: "demo@example.com",
      approved: 1,
    });
    setLoading(false);
  }, []);

  return {
    user,
    loading,
    isAuthenticated: !!user,
    login: async () => {
      // no-op for now
    },
    logout: async () => {
      // no-op for now
      setUser(null);
    },
  };
}
