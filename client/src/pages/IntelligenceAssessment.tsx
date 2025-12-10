import Layout from "@/components/Layout";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { generateAssessmentPDF } from "@/lib/generateAssessmentPDF";
import { 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  TrendingUp, 
  Download,
  ArrowRight,
  ArrowLeft,
  BarChart3
} from "lucide-react";

// Question data structure
const questions = [
  {
    id: 1,
    category: "Semantic Layer Maturity",
    question: "Do you maintain a semantic layer or business glossary that provides consistent definitions for metrics and data across your organization?",
    description: "Ensures a single analytical 'source of truth' for all teams",
    options: [
      { value: 10, label: "Yes, fully implemented and actively maintained" },
      { value: 7, label: "Partially - we have some definitions but not comprehensive" },
      { value: 3, label: "Minimal - only basic documentation exists" },
      { value: 0, label: "No, we don't have a semantic layer or glossary" }
    ]
  },
  {
    id: 2,
    category: "Metric Standardization",
    question: "Are your key metrics and KPIs standardized and uniformly defined across different departments/reports, or do teams often use their own calculations?",
    description: "Consistent metric definitions prevent 'multiple versions of truth'",
    options: [
      { value: 10, label: "Fully standardized - all teams use the same definitions" },
      { value: 7, label: "Mostly standardized with some exceptions" },
      { value: 3, label: "Partially - significant variations exist across teams" },
      { value: 0, label: "Not standardized - teams use their own calculations" }
    ]
  },
  {
    id: 3,
    category: "Data Consistency & Integration",
    question: "Is your analytical data consolidated into a unified repository (data warehouse/lake) accessible enterprise-wide, or is it siloed across multiple systems and tools?",
    description: "Unified data integration enables consistent analytics",
    options: [
      { value: 10, label: "Fully consolidated in a unified data warehouse/lake" },
      { value: 7, label: "Mostly consolidated with some remaining silos" },
      { value: 3, label: "Partially integrated - significant silos remain" },
      { value: 0, label: "Highly siloed across multiple disconnected systems" }
    ]
  },
  {
    id: 4,
    category: "Data Consistency & Integration",
    question: "How reliable and up-to-date is your data pipeline? (For example, do you have automated data quality checks and timely updates, or do you frequently encounter data errors and delays in reporting?)",
    description: "Data quality and freshness are critical for trust",
    options: [
      { value: 10, label: "Highly reliable with automated quality checks and real-time updates" },
      { value: 7, label: "Generally reliable with occasional delays" },
      { value: 3, label: "Moderate reliability - frequent quality issues or delays" },
      { value: 0, label: "Unreliable - significant data errors and delays are common" }
    ]
  },
  {
    id: 5,
    category: "Data Lineage & Governance",
    question: "Can you easily trace your metrics and reports back to their source data (full data lineage) to verify accuracy and context?",
    description: "Data lineage enables trust and compliance",
    options: [
      { value: 10, label: "Yes, full data lineage is documented and accessible" },
      { value: 7, label: "Partial lineage for critical metrics" },
      { value: 3, label: "Limited lineage - difficult to trace most metrics" },
      { value: 0, label: "No data lineage tracking" }
    ]
  },
  {
    id: 6,
    category: "Data Lineage & Governance",
    question: "Do you have robust data governance in place – e.g. clear ownership of data, role-based access controls, compliance policies – to ensure data is secure and used properly?",
    description: "Governance ensures data security and proper usage",
    options: [
      { value: 10, label: "Comprehensive governance with clear ownership and controls" },
      { value: 7, label: "Good governance for most critical data" },
      { value: 3, label: "Basic governance - many gaps exist" },
      { value: 0, label: "No formal data governance" }
    ]
  },
  {
    id: 7,
    category: "Analytics & AI Utilization",
    question: "Are you currently leveraging AI or advanced analytics (such as predictive models, AI-driven insights, or natural language query assistants) in your BI/analytics processes?",
    description: "AI usage indicates decision intelligence maturity",
    options: [
      { value: 10, label: "Extensively - AI is integrated throughout our analytics" },
      { value: 7, label: "Moderately - we use AI in some areas" },
      { value: 3, label: "Minimally - only experimental AI pilots" },
      { value: 0, label: "Not at all - no AI in our analytics" }
    ]
  },
  {
    id: 8,
    category: "AI Governance & Responsibility",
    question: "Have you established any governance or ethical guidelines for AI initiatives (for example, processes to monitor AI model performance, check for bias, or ensure AI recommendations are explainable and within policy)?",
    description: "AI governance ensures responsible and trustworthy AI",
    options: [
      { value: 10, label: "Comprehensive AI governance framework in place" },
      { value: 7, label: "Basic AI governance for key initiatives" },
      { value: 3, label: "Minimal AI governance - mostly ad-hoc" },
      { value: 0, label: "No AI governance established" }
    ]
  },
  {
    id: 9,
    category: "Embedded Analytics",
    question: "Do you embed or share analytics insights (dashboards, reports, AI-driven recommendations) within your products or with external partners/clients as part of your offerings, or is analytics used only internally?",
    description: "Embedded analytics can monetize data and add customer value",
    options: [
      { value: 10, label: "Extensively embedded in products/partner portals" },
      { value: 7, label: "Some embedded analytics for key partners" },
      { value: 3, label: "Minimal external sharing" },
      { value: 0, label: "Analytics used only internally" }
    ]
  },
  {
    id: 10,
    category: "Architecture & Scalability",
    question: "Is your analytics infrastructure built on a modern, scalable architecture (cloud-based, modular, able to handle large data and real-time needs), or are you relying on legacy BI tools and spreadsheets that might limit new AI capabilities?",
    description: "Modern architecture enables AI scalability",
    options: [
      { value: 10, label: "Modern, cloud-based, highly scalable architecture" },
      { value: 7, label: "Mostly modern with some legacy components" },
      { value: 3, label: "Mixed - significant legacy infrastructure" },
      { value: 0, label: "Primarily legacy tools and spreadsheets" }
    ]
  },
  {
    id: 11,
    category: "Analytics & AI Utilization",
    question: "How well are data insights integrated into decision-making in your organization? (For example, do business users have easy self-service access – possibly with AI assistance – to get answers, or do they struggle to obtain timely insights and default to gut feeling?)",
    description: "Data-driven culture indicates analytics adoption",
    options: [
      { value: 10, label: "Fully integrated - data drives all major decisions" },
      { value: 7, label: "Well integrated for most decisions" },
      { value: 3, label: "Partially integrated - often rely on gut feeling" },
      { value: 0, label: "Minimal integration - decisions rarely data-driven" }
    ]
  },
  {
    id: 12,
    category: "Analytics & AI Utilization",
    question: "Do non-technical users have self-service tools or AI assistants (e.g. conversational analytics) to explore data on their own, or are they dependent on specialists for most analysis requests?",
    description: "Self-service enables faster insights and reduces bottlenecks",
    options: [
      { value: 10, label: "Excellent self-service - users are highly autonomous" },
      { value: 7, label: "Good self-service for common queries" },
      { value: 3, label: "Limited self-service - heavy specialist dependency" },
      { value: 0, label: "No self-service - all requests go through specialists" }
    ]
  }
];

export default function IntelligenceAssessment() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'questions' | 'prospect' | 'results'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [prospectInfo, setProspectInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    industry: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const createAssessment = trpc.assessments.create.useMutation();

  useEffect(() => {
    document.title = "AI Readiness for Data | GoodData Playbook";
  }, []);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Move to prospect form instead of results
      setCurrentStep('prospect');
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = async () => {
    if (!prospectInfo.name || !prospectInfo.email || !prospectInfo.company) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSaving(true);

    try {
      const answersData = questions.map(q => ({
        questionId: q.id,
        questionCategory: q.category,
        answerValue: answers[q.id] || 0,
        answerText: q.options.find(opt => opt.value === answers[q.id])?.label || ''
      }));

      await createAssessment.mutateAsync({
        prospectName: prospectInfo.name,
        prospectEmail: prospectInfo.email,
        prospectCompany: prospectInfo.company,
        prospectRole: prospectInfo.role || undefined,
        prospectIndustry: prospectInfo.industry || undefined,
        totalScore,
        readinessLevel: readiness.level,
        recommendedPlay: recommendedPlays[0]?.name || 'Decision Intelligence',
        secondaryPlay: recommendedPlays[1]?.name,
        categoryScores,
        answers: answersData
      });

      toast.success('Assessment saved successfully!');
      setCurrentStep('results');
      setShowResults(true);
    } catch (error) {
      console.error('Failed to save assessment:', error);
      toast.error('Failed to save assessment. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Calculate category scores
  const categoryScores = {
    "Semantic Layer Maturity": answers[1] || 0,
    "Metric Standardization": answers[2] || 0,
    "Data Consistency & Integration": ((answers[3] || 0) + (answers[4] || 0)) / 2,
    "Data Lineage & Governance": ((answers[5] || 0) + (answers[6] || 0)) / 2,
    "AI Governance & Responsibility": answers[8] || 0,
    "Analytics & AI Utilization": ((answers[7] || 0) + (answers[11] || 0) + (answers[12] || 0)) / 3,
    "Embedded Analytics": answers[9] || 0,
    "Architecture & Scalability": answers[10] || 0
  };

  // Determine readiness level
  const getReadinessLevel = (score: number) => {
    if (score >= 81) return { level: "AI-Ready", color: "text-green-400", bgColor: "bg-green-500/20", description: "Strong foundation - well positioned for AI" };
    if (score >= 61) return { level: "Good Foundation", color: "text-cyan-400", bgColor: "bg-cyan-500/20", description: "Solid fundamentals - moderate refinements needed" };
    if (score >= 31) return { level: "Moderate Gaps", color: "text-yellow-400", bgColor: "bg-yellow-500/20", description: "Some foundation - several improvements required" };
    return { level: "Critical Risk", color: "text-red-400", bgColor: "bg-red-500/20", description: "Significant gaps - far from AI-ready" };
  };

  // Recommend plays based on scores
  const getRecommendedPlays = () => {
    const plays = [];
    
    if (totalScore <= 30) {
      plays.push({
        name: "AI Modernization",
        reason: "Your assessment reveals critical gaps across multiple areas. A comprehensive AI Modernization initiative is needed to rebuild your data foundation, integrate siloed systems, and establish the governance required for AI readiness.",
        priority: "Critical"
      });
    }
    
    if (totalScore >= 31 && totalScore <= 60 && (categoryScores["Semantic Layer Maturity"] < 5 || categoryScores["Metric Standardization"] < 5)) {
      plays.push({
        name: "Decision Intelligence",
        reason: "You have a decent data foundation but lack semantic consistency and metric standardization. Decision Intelligence will establish a governed semantic layer and AI-assisted analytics to ensure everyone uses consistent, trustworthy metrics.",
        priority: "High"
      });
    }
    
    if (totalScore >= 45 && totalScore <= 80 && categoryScores["Architecture & Scalability"] < 6) {
      plays.push({
        name: "AI Architecture",
        reason: "Your data environment is functional but not built for AI at scale. AI Architecture will design a unified, scalable, AI-ready infrastructure with a governed semantic layer and AI catalog to support trustworthy AI-driven analytics.",
        priority: "High"
      });
    }
    
    if (totalScore >= 70 && categoryScores["Embedded Analytics"] < 5) {
      plays.push({
        name: "Embedded Intelligence",
        reason: "You have a strong internal data capability but aren't leveraging it externally. Embedded Intelligence will help you monetize your data by embedding analytics into your products or customer portals as a competitive differentiator.",
        priority: "Opportunity"
      });
    }

    // Default recommendation if no specific plays matched
    if (plays.length === 0) {
      if (totalScore < 61) {
        plays.push({
          name: "Decision Intelligence",
          reason: "Based on your overall readiness score, we recommend starting with Decision Intelligence to establish a governed semantic foundation and improve data-driven decision-making across your organization.",
          priority: "Recommended"
        });
      } else {
        plays.push({
          name: "AI Architecture",
          reason: "With your good foundation, focus on AI Architecture to ensure your infrastructure can scale and support advanced AI capabilities enterprise-wide.",
          priority: "Recommended"
        });
      }
    }

    return plays;
  };

  const readiness = getReadinessLevel(totalScore);
  const recommendedPlays = getRecommendedPlays();

  return (
    <Layout>
      {/* Intro Screen */}
      {currentStep === 'intro' && (
        <section className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <Target className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-purple-400">AI Readiness Assessment</span>
              </div>
              
              <h1 className="font-outfit font-bold text-5xl md:text-6xl text-white mb-6">
                Intelligence Layer <span className="text-gradient from-purple-400 to-cyan-400">Assessment</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Discover your organization's AI readiness and identify critical gaps in your data architecture. 
                This 12-question assessment takes 5 minutes and provides personalized recommendations.
              </p>
            </div>

            <Card className="glass-card p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-outfit font-bold text-white">What You'll Learn:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Your overall AI Readiness Score (0-100)",
                    "Gap analysis across 8 key categories",
                    "Specific weaknesses in your data architecture",
                    "Tailored GoodData play recommendations",
                    "Actionable next steps and resources",
                    "Downloadable PDF report"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button 
                  onClick={() => setCurrentStep('questions')}
                  className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-6 text-lg"
                >
                  Start Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Questions Screen */}
      {currentStep === 'questions' && (
        <section className="py-20">
          <div className="container max-w-4xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="glass-card p-8 mb-6">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                  <span className="text-xs font-medium text-purple-400">
                    {questions[currentQuestion].category}
                  </span>
                </div>
                
                <h2 className="text-2xl font-outfit font-bold text-white mb-3">
                  {questions[currentQuestion].question}
                </h2>
                
                <p className="text-muted-foreground">
                  {questions[currentQuestion].description}
                </p>
              </div>

              <RadioGroup
                value={answers[questions[currentQuestion].id]?.toString()}
                onValueChange={(value) => handleAnswer(questions[currentQuestion].id, parseInt(value))}
              >
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, i) => (
                    <div
                      key={i}
                      className={`flex items-start space-x-3 p-4 rounded-lg border transition-all cursor-pointer ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'border-purple-500 bg-purple-500/10'
                          : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                      }`}
                      onClick={() => handleAnswer(questions[currentQuestion].id, option.value)}
                    >
                      <RadioGroupItem value={option.value.toString()} id={`option-${i}`} className="mt-1" />
                      <Label htmlFor={`option-${i}`} className="flex-1 cursor-pointer text-foreground">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                onClick={prevQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <Button
                onClick={nextQuestion}
                disabled={!answers[questions[currentQuestion].id]}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 gap-2"
              >
                {currentQuestion === questions.length - 1 ? 'View Results' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Prospect Information Form */}
      {currentStep === 'prospect' && (
        <section className="py-20">
          <div className="container max-w-2xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Assessment Complete</span>
              </div>
              
              <h1 className="font-outfit font-bold text-4xl md:text-5xl text-white mb-4">
                Almost <span className="text-gradient from-purple-400 to-cyan-400">Done!</span>
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Please provide your information to receive your personalized AI readiness report.
              </p>
            </div>

            <Card className="glass-card p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Smith"
                    value={prospectInfo.name}
                    onChange={(e) => setProspectInfo(prev => ({ ...prev, name: e.target.value }))}
                    className="bg-background/50 border-white/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={prospectInfo.email}
                    onChange={(e) => setProspectInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-background/50 border-white/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Company Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Acme Corporation"
                    value={prospectInfo.company}
                    onChange={(e) => setProspectInfo(prev => ({ ...prev, company: e.target.value }))}
                    className="bg-background/50 border-white/10"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-foreground font-medium">
                    Job Title
                  </Label>
                  <Input
                    id="role"
                    type="text"
                    placeholder="VP of Data & Analytics"
                    value={prospectInfo.role}
                    onChange={(e) => setProspectInfo(prev => ({ ...prev, role: e.target.value }))}
                    className="bg-background/50 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-foreground font-medium">
                    Industry
                  </Label>
                  <Input
                    id="industry"
                    type="text"
                    placeholder="Financial Services"
                    value={prospectInfo.industry}
                    onChange={(e) => setProspectInfo(prev => ({ ...prev, industry: e.target.value }))}
                    className="bg-background/50 border-white/10"
                  />
                </div>

                <div className="pt-4 flex gap-4">
                  <Button
                    onClick={() => setCurrentStep('questions')}
                    variant="outline"
                    className="flex-1 gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Questions
                  </Button>
                  
                  <Button
                    onClick={calculateResults}
                    disabled={!prospectInfo.name || !prospectInfo.email || !prospectInfo.company || isSaving}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 gap-2"
                  >
                    {isSaving ? 'Saving...' : 'View My Results'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Results Screen */}
      {currentStep === 'results' && showResults && (
        <section className="py-20">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="font-outfit font-bold text-5xl text-white mb-4">
                Your AI Readiness <span className="text-gradient from-purple-400 to-cyan-400">Results</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Based on your responses, here's your comprehensive AI readiness assessment
              </p>
            </div>

            {/* Overall Score */}
            <Card className="glass-card p-8 mb-8">
              <div className="text-center">
                <h2 className="text-2xl font-outfit font-bold text-white mb-6">Overall AI Readiness Score</h2>
                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="relative w-48 h-48">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="12"
                        fill="none"
                        className="text-white/10"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={`${(totalScore / 120) * 553} 553`}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold text-white">{totalScore}</div>
                      <div className="text-sm text-muted-foreground">out of 120</div>
                    </div>
                  </div>
                  
                  <div className="text-left space-y-3">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${readiness.bgColor}`}>
                      <span className={`text-lg font-bold ${readiness.color}`}>{readiness.level}</span>
                    </div>
                    <p className="text-lg text-foreground max-w-md">
                      {readiness.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Gap Category Breakdown */}
            <Card className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-cyan-400" />
                Gap Category Breakdown
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(categoryScores).map(([category, score]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">{category}</span>
                      <span className="text-sm font-bold text-cyan-400">{score.toFixed(1)}/10</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all"
                        style={{ width: `${(score / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommended Plays */}
            <Card className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-purple-400" />
                Recommended GoodData Plays
              </h2>
              <div className="space-y-6">
                {recommendedPlays.map((play, i) => (
                  <div key={i} className="p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-white/10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{play.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        play.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        play.priority === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {play.priority}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{play.reason}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Next Steps */}
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-outfit font-bold text-white mb-6">Next Steps</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Download your personalized report</p>
                    <p className="text-sm text-muted-foreground">Save this assessment for future reference and share with stakeholders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Explore recommended plays</p>
                    <p className="text-sm text-muted-foreground">Review detailed play pages to understand how GoodData addresses your gaps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium">Schedule a consultation</p>
                    <p className="text-sm text-muted-foreground">Discuss your results with our team to create a tailored roadmap</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 gap-2"
                  onClick={async () => {
                    try {
                      await generateAssessmentPDF({
                        prospectName: prospectInfo.name,
                        prospectCompany: prospectInfo.company,
                        prospectEmail: prospectInfo.email,
                        prospectRole: prospectInfo.role,
                        totalScore,
                        readinessLevel: readiness.level,
                        recommendedPlay: recommendedPlays[0]?.name || 'Decision Intelligence',
                        secondaryPlay: recommendedPlays[1]?.name,
                        categoryScores,
                      });
                      toast.success('PDF report downloaded successfully!');
                    } catch (error) {
                      console.error('PDF generation error:', error);
                      toast.error('Failed to generate PDF report');
                    }
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF Report
                </Button>
                <Button variant="outline" onClick={() => {
                  setCurrentStep('intro');
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}>
                  Take Assessment Again
                </Button>
              </div>
            </Card>
          </div>
        </section>
      )}
    </Layout>
  );
}
