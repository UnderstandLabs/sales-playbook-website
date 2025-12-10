import { useAuth } from "@/_core/hooks/useAuth";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { trpc } from "@/lib/trpc";
import { Check, X, Clock, Shield, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Admin() {
  const { user, isAuthenticated, loading } = useAuth();
  const { data: users, refetch } = trpc.admin.users.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === 'admin',
  });
  const updateApproval = trpc.admin.updateApproval.useMutation({
    onSuccess: () => {
      toast.success("User access updated");
      refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!isAuthenticated || user?.role !== 'admin') {
    return (
      <Layout>
        <section className="py-24">
          <div className="container text-center">
            <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">Access Denied</h1>
            <p className="text-muted-foreground">You do not have permission to view this page.</p>
          </div>
        </section>
      </Layout>
    );
  }

  const getStatusBadge = (approved: number) => {
    if (approved === 1) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
          <Check className="w-4 h-4" /> Approved
        </span>
      );
    } else if (approved === -1) {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm">
          <X className="w-4 h-4" /> Denied
        </span>
      );
    } else {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
          <Clock className="w-4 h-4" /> Pending
        </span>
      );
    }
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-outfit text-4xl md:text-5xl font-bold text-white">
                User Management
              </h1>
              <Link href="/admin/assessments">
                <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 gap-2">
                  <BarChart3 className="w-4 h-4" />
                  View Assessments
                </Button>
              </Link>
            </div>
            <p className="text-lg text-muted-foreground">
              Manage access to the sales playbook for GoodData team members.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">
                {users?.filter(u => u.approved === 1).length || 0}
              </div>
              <div className="text-sm text-muted-foreground">Approved Users</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {users?.filter(u => u.approved === 0).length || 0}
              </div>
              <div className="text-sm text-muted-foreground">Pending Approval</div>
            </div>
            <div className="glass-card p-6 rounded-2xl">
              <div className="text-3xl font-bold text-white mb-2">
                {users?.length || 0}
              </div>
              <div className="text-sm text-muted-foreground">Total Users</div>
            </div>
          </div>

          {/* Users Table */}
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-white font-semibold">Name</th>
                    <th className="text-left p-6 text-white font-semibold">Email</th>
                    <th className="text-left p-6 text-white font-semibold">Role</th>
                    <th className="text-left p-6 text-white font-semibold">Status</th>
                    <th className="text-left p-6 text-white font-semibold">Last Login</th>
                    <th className="text-left p-6 text-white font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((u) => (
                    <tr key={u.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-6 text-white">{u.name || 'N/A'}</td>
                      <td className="p-6 text-muted-foreground">{u.email || 'N/A'}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          u.role === 'admin' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-white/10 text-white'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="p-6">{getStatusBadge(u.approved)}</td>
                      <td className="p-6 text-muted-foreground">
                        {new Date(u.lastSignedIn).toLocaleDateString()}
                      </td>
                      <td className="p-6">
                        <div className="flex gap-2">
                          {u.approved !== 1 && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-green-500/30 hover:bg-green-500/20 text-green-400"
                              onClick={() => updateApproval.mutate({ userId: u.id, approved: 1 })}
                              disabled={updateApproval.isPending}
                            >
                              <Check className="w-4 h-4 mr-1" /> Approve
                            </Button>
                          )}
                          {u.approved !== -1 && u.role !== 'admin' && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-red-500/30 hover:bg-red-500/20 text-red-400"
                              onClick={() => updateApproval.mutate({ userId: u.id, approved: -1 })}
                              disabled={updateApproval.isPending}
                            >
                              <X className="w-4 h-4 mr-1" /> Deny
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
