import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Target,
  Filter,
  Download,
  Eye,
  CheckCircle2,
  AlertCircle,
  Clock
} from "lucide-react";
import { toast } from "sonner";

export default function AdminAssessments() {
  const { user } = useAuth();
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null);
  const [filters, setFilters] = useState({
    status: '',
    play: '',
    minScore: '',
    maxScore: ''
  });

  const { data: assessments, isLoading, refetch } = trpc.assessments.list.useQuery({
    status: filters.status || undefined,
    play: filters.play || undefined,
    minScore: filters.minScore ? parseInt(filters.minScore) : undefined,
    maxScore: filters.maxScore ? parseInt(filters.maxScore) : undefined,
    sortBy: 'createdAt',
    sortOrder: 'desc'
  });

  const { data: stats } = trpc.assessments.stats.useQuery();
  const { data: detailedAssessment } = trpc.assessments.getById.useQuery(
    { id: selectedAssessment?.id },
    { enabled: !!selectedAssessment }
  );
  const updateStatus = trpc.assessments.updateStatus.useMutation({
    onSuccess: () => {
      toast.success('Assessment updated successfully');
      refetch();
      setSelectedAssessment(null);
    },
    onError: () => {
      toast.error('Failed to update assessment');
    }
  });

  useEffect(() => {
    document.title = "Assessment Results | Admin";
  }, []);

  if (!user || user.role !== 'admin') {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Access Denied</h1>
          <p className="text-muted-foreground">You must be an admin to view this page.</p>
        </div>
      </Layout>
    );
  }

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      new: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      contacted: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      qualified: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      demo_scheduled: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      closed_won: 'bg-green-500/20 text-green-400 border-green-500/30',
      closed_lost: 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    return colors[status] || colors.new;
  };

  const getReadinessColor = (level: string) => {
    const colors: Record<string, string> = {
      'AI-Ready': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Good Foundation': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Moderate Gaps': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Critical Risk': 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    return colors[level] || colors['Moderate Gaps'];
  };

  const handleUpdateStatus = (assessmentId: number, updates: any) => {
    updateStatus.mutate({ id: assessmentId, ...updates });
  };

  return (
    <Layout>
      <div className="container py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-outfit font-bold text-4xl text-white mb-2">
            Assessment <span className="text-gradient from-purple-400 to-cyan-400">Pipeline</span>
          </h1>
          <p className="text-muted-foreground">
            Track and manage AI Readiness for Data assessment results
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Assessments</p>
                  <p className="text-3xl font-bold text-white">{stats.totalAssessments}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                  <p className="text-3xl font-bold text-white">{Math.round(stats.averageScore)}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">AI-Ready</p>
                  <p className="text-3xl font-bold text-white">{stats.byReadinessLevel['AI-Ready'] || 0}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Critical Risk</p>
                  <p className="text-3xl font-bold text-white">{stats.byReadinessLevel['Critical Risk'] || 0}</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Filters */}
        <Card className="glass-card p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-purple-400" />
            <h3 className="font-semibold text-white">Filters</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Follow-Up Status</Label>
              <Select value={filters.status} onValueChange={(value) => setFilters(prev => ({ ...prev, status: value }))}>
                <SelectTrigger className="bg-background/50 border-white/10">
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="qualified">Qualified</SelectItem>
                  <SelectItem value="demo_scheduled">Demo Scheduled</SelectItem>
                  <SelectItem value="closed_won">Closed Won</SelectItem>
                  <SelectItem value="closed_lost">Closed Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Recommended Play</Label>
              <Select value={filters.play} onValueChange={(value) => setFilters(prev => ({ ...prev, play: value }))}>
                <SelectTrigger className="bg-background/50 border-white/10">
                  <SelectValue placeholder="All plays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all_plays">All plays</SelectItem>
                  <SelectItem value="AI Modernization">AI Modernization</SelectItem>
                  <SelectItem value="Decision Intelligence">Decision Intelligence</SelectItem>
                  <SelectItem value="AI Architecture">AI Architecture</SelectItem>
                  <SelectItem value="Embedded Intelligence">Embedded Intelligence</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Min Score</Label>
              <Input
                type="number"
                placeholder="0"
                value={filters.minScore}
                onChange={(e) => setFilters(prev => ({ ...prev, minScore: e.target.value }))}
                className="bg-background/50 border-white/10"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm text-muted-foreground">Max Score</Label>
              <Input
                type="number"
                placeholder="120"
                value={filters.maxScore}
                onChange={(e) => setFilters(prev => ({ ...prev, maxScore: e.target.value }))}
                className="bg-background/50 border-white/10"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilters({ status: '', play: '', minScore: '', maxScore: '' })}
            >
              Clear Filters
            </Button>
          </div>
        </Card>

        {/* Assessments Table */}
        <Card className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-white/10">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Prospect</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Company</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Score</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Readiness</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Recommended Play</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="text-center p-8 text-muted-foreground">
                      Loading assessments...
                    </td>
                  </tr>
                ) : assessments && assessments.length > 0 ? (
                  assessments.map((assessment: any) => (
                    <tr key={assessment.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-white font-medium">{assessment.prospectName}</p>
                          <p className="text-sm text-muted-foreground">{assessment.prospectEmail}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="text-white">{assessment.prospectCompany}</p>
                          {assessment.prospectRole && (
                            <p className="text-sm text-muted-foreground">{assessment.prospectRole}</p>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="text-2xl font-bold text-white">{assessment.totalScore}</span>
                        <span className="text-sm text-muted-foreground">/120</span>
                      </td>
                      <td className="p-4">
                        <Badge className={`${getReadinessColor(assessment.readinessLevel)} border`}>
                          {assessment.readinessLevel}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <span className="text-white">{assessment.recommendedPlay}</span>
                      </td>
                      <td className="p-4">
                        <Badge className={`${getStatusColor(assessment.followUpStatus)} border`}>
                          {assessment.followUpStatus.replace('_', ' ')}
                        </Badge>
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {new Date(assessment.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelectedAssessment(assessment)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={8} className="text-center p-8 text-muted-foreground">
                      No assessments found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Assessment Detail Dialog */}
        <Dialog open={!!selectedAssessment} onOpenChange={() => setSelectedAssessment(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-white/10">
            <DialogHeader>
              <DialogTitle className="text-2xl font-outfit font-bold text-white">
                Assessment Details
              </DialogTitle>
              <DialogDescription>
                {selectedAssessment?.prospectName} - {selectedAssessment?.prospectCompany}
              </DialogDescription>
            </DialogHeader>

            {detailedAssessment && (
              <div className="space-y-6">
                {/* Prospect Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm text-muted-foreground">Email</Label>
                    <p className="text-white">{detailedAssessment.prospectEmail}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Role</Label>
                    <p className="text-white">{detailedAssessment.prospectRole || 'N/A'}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Industry</Label>
                    <p className="text-white">{detailedAssessment.prospectIndustry || 'N/A'}</p>
                  </div>
                  <div>
                    <Label className="text-sm text-muted-foreground">Assessment Date</Label>
                    <p className="text-white">{new Date(detailedAssessment.createdAt).toLocaleString()}</p>
                  </div>
                </div>

                {/* Scores */}
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Overall Score</Label>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-white">{detailedAssessment.totalScore}</span>
                    <Badge className={`${getReadinessColor(detailedAssessment.readinessLevel)} border text-base px-4 py-1`}>
                      {detailedAssessment.readinessLevel}
                    </Badge>
                  </div>
                </div>

                {/* Category Scores */}
                <div>
                  <Label className="text-sm text-muted-foreground mb-3 block">Category Breakdown</Label>
                  <div className="space-y-3">
                    {Object.entries(JSON.parse(detailedAssessment.categoryScores)).map(([category, score]: [string, any]) => (
                      <div key={category}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-white">{category}</span>
                          <span className="text-sm font-medium text-white">{Math.round(score)}/10</span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all"
                            style={{ width: `${(score / 10) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Plays */}
                <div>
                  <Label className="text-sm text-muted-foreground mb-2 block">Recommended Plays</Label>
                  <div className="space-y-2">
                    <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 border text-base px-4 py-1">
                      {detailedAssessment.recommendedPlay}
                    </Badge>
                    {detailedAssessment.secondaryPlay && (
                      <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30 border text-base px-4 py-1 ml-2">
                        {detailedAssessment.secondaryPlay}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Status Management */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <Label className="text-sm text-muted-foreground">Update Follow-Up Status</Label>
                  <div className="flex gap-2 flex-wrap">
                    {['new', 'contacted', 'qualified', 'demo_scheduled', 'closed_won', 'closed_lost'].map(status => (
                      <Button
                        key={status}
                        size="sm"
                        variant={detailedAssessment.followUpStatus === status ? 'default' : 'outline'}
                        onClick={() => handleUpdateStatus(detailedAssessment.id, { followUpStatus: status })}
                        className={detailedAssessment.followUpStatus === status ? 'bg-purple-500 hover:bg-purple-600' : ''}
                      >
                        {status.replace('_', ' ')}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm text-muted-foreground">Internal Notes</Label>
                  <textarea
                    id="notes"
                    className="w-full min-h-[100px] p-3 bg-background/50 border border-white/10 rounded-lg text-white resize-none"
                    placeholder="Add notes about this prospect..."
                    defaultValue={detailedAssessment.notes || ''}
                    onBlur={(e) => {
                      if (e.target.value !== detailedAssessment.notes) {
                        handleUpdateStatus(detailedAssessment.id, { notes: e.target.value });
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}
