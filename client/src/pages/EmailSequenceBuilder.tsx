import { useState } from 'react';
import { Link } from 'wouter';
import { Home, Mail, Copy, Check, Building2, Target, User, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { industryIntelligence } from '@/data/industryIntelligence';
import { gtm2026Messaging, playValueProps, emailMessagingTemplates } from '@/data/messagingFramework';

type Play = 'decision-intelligence' | 'embedded-intelligence' | 'ai-modernization' | 'ai-architecture';

interface ProspectDetails {
  role: string;
  companyName: string;
  companySize: string;
  specificPainPoints: string;
}

export default function EmailSequenceBuilder() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [selectedPlay, setSelectedPlay] = useState<Play | ''>('');
  const [prospectDetails, setProspectDetails] = useState<ProspectDetails>({
    role: '',
    companyName: '',
    companySize: '',
    specificPainPoints: '',
  });
  const [generatedEmails, setGeneratedEmails] = useState<Array<{ subject: string; body: string }>>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const industry = industryIntelligence.find((ind) => ind.id === selectedIndustry);
  const playData = industry && selectedPlay ? industry.playAngles[selectedPlay] : null;

  const handleGenerateSequence = () => {
    if (!industry || !selectedPlay || !prospectDetails.role || !prospectDetails.companyName) {
      return;
    }

    const playName = selectedPlay
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    const emails = [
      // Email 1: Problem-focused introduction with GTM 2026 messaging
      {
        subject: `${prospectDetails.companyName}: ${gtm2026Messaging.tagline}`,
        body: `Hi ${prospectDetails.role ? prospectDetails.role : '[First Name]'},

${emailMessagingTemplates.opening.trendFocused.replace('{industry}', industry.name)}

${gtm2026Messaging.marketProblems[0].description}

For ${prospectDetails.companyName}, this likely means:
• ${industry.painPoints[0]}
• ${industry.painPoints[1]}

${emailMessagingTemplates.transition.marketShift}

${playValueProps[selectedPlay].description}

Would you be open to a quick 15-minute conversation about how ${industry.name} leaders are addressing this?

Best regards,
[Your Name]
[Your Title]
GoodData`,
      },
      // Email 2: Value proposition with GTM 2026 solution messaging
      {
        subject: `Re: ${prospectDetails.companyName} — ${playValueProps[selectedPlay].tagline}`,
        body: `Hi ${prospectDetails.role ? prospectDetails.role : '[First Name]'},

Following up on my previous note. ${emailMessagingTemplates.solution.intro}

**${playValueProps[selectedPlay].persona}**: ${playValueProps[selectedPlay].title}

${playValueProps[selectedPlay].description}

**Key Benefits:**
• ${playValueProps[selectedPlay].benefits[0]}
• ${playValueProps[selectedPlay].benefits[1]}
• ${playValueProps[selectedPlay].benefits[2]}

**${industry.name} Use Case:** ${playData?.useCases[0] || 'Real-world application'}

${emailMessagingTemplates.solution.differentiation}

Would it make sense to explore how this could work for ${prospectDetails.companyName}?

Best,
[Your Name]`,
      },
      // Email 3: Proof and GTM 2026 validation
      {
        subject: `${industry.name}: ${gtm2026Messaging.narrative.problem}`,
        body: `Hi ${prospectDetails.role ? prospectDetails.role : '[First Name]'},

I know you're busy, so I'll keep this brief.

${gtm2026Messaging.coreMessage}

${emailMessagingTemplates.solution.proof}

**${industry.name} companies are using ${playName} to:**
• ${playData?.useCases[0] || 'Use case 1'}
• ${playData?.useCases[1] || 'Use case 2'}
• ${playData?.useCases[2] || 'Use case 3'}

I've attached a 1-page overview and a short demo video (< 4 min) that shows this in action.

Would you have 15 minutes this week or next to discuss how this could apply to ${prospectDetails.companyName}?

Best,
[Your Name]

P.S. - Here are the resources I mentioned:
• [Link to ${playName} presentation]
• [Link to ${industry.name} demo video]`,
      },
      // Email 4: Breakup email with GTM 2026 value statement
      {
        subject: `${prospectDetails.companyName}: Last note on ${gtm2026Messaging.tagline}`,
        body: `Hi ${prospectDetails.role ? prospectDetails.role : '[First Name]'},

I haven't heard back, so I'm assuming this isn't a priority right now—and that's totally fine.

Before I close your file, I wanted to leave you with one thought:

${gtm2026Messaging.valueStatement}

**For ${industry.name} leaders specifically:**
${playValueProps[selectedPlay].description}

We've built a complete playbook for ${playData?.useCases[0] || 'this scenario'} that might be helpful when timing is right.

If priorities change or you'd like to explore this in the future, feel free to reach out. Otherwise, I'll stop following up.

Best of luck with ${prospectDetails.companyName}'s ${industry.trends[0].toLowerCase()} initiatives!

[Your Name]

P.S. - ${emailMessagingTemplates.transition.opportunity}`,
      },
    ];

    setGeneratedEmails(emails);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20">
      {/* Back to Home */}
      <div className="container pt-8 pb-4">
        <Link href="/">
          <a className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <Home className="w-4 h-4" />
            Back to Home
          </a>
        </Link>
      </div>

      <section className="py-20">
        <div className="container max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20 mb-6">
              <Mail className="w-4 h-4 text-pink-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Email Sequence Builder
              </span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Build Personalized Outbound Sequences
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generate industry-specific email sequences powered by GoodData messaging and proven sales plays
            </p>
          </div>

          {/* Step 1: Industry Selection */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold">
                1
              </div>
              <h2 className="text-2xl font-bold text-white">Select Target Industry</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industryIntelligence.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind.id);
                    setSelectedPlay('');
                    setGeneratedEmails([]);
                  }}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedIndustry === ind.id
                      ? 'border-pink-500 bg-pink-500/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
                      <p className="text-sm text-gray-400 line-clamp-3">{ind.overview}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Industry Overview */}
            {industry && (
              <div className="mt-6 p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">Industry Intelligence: {industry.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-pink-400 mb-2">Key Pain Points</h4>
                    <ul className="space-y-2">
                      {industry.painPoints.slice(0, 3).map((pain, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-pink-400 mt-1">•</span>
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Current Trends</h4>
                    <ul className="space-y-2">
                      {industry.trends.slice(0, 3).map((trend, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{trend}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-medium text-purple-400 mb-2">Typical Decision Makers</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.decisionMakers.map((dm, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300"
                      >
                        {dm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Step 2: Play Selection */}
          {selectedIndustry && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold">
                  2
                </div>
                <h2 className="text-2xl font-bold text-white">Choose Your Play</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(industry!.playAngles).map(([playKey, playValue]) => {
                  const playName = playKey
                    .split('-')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');

                  return (
                    <button
                      key={playKey}
                      onClick={() => {
                        setSelectedPlay(playKey as Play);
                        setGeneratedEmails([]);
                      }}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${
                        selectedPlay === playKey
                          ? 'border-cyan-500 bg-cyan-500/10'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Target className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-white mb-2">{playName}</h3>
                          <p className="text-sm text-gray-400 mb-3">{playValue.angle}</p>
                          <div className="space-y-1">
                            {playValue.valueProps.slice(0, 2).map((vp, idx) => (
                              <p key={idx} className="text-xs text-gray-500 flex items-start gap-1">
                                <span className="text-cyan-400">✓</span>
                                <span>{vp}</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Prospect Details */}
          {selectedPlay && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold">
                  3
                </div>
                <h2 className="text-2xl font-bold text-white">Enter Prospect Details</h2>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Prospect Role / Title
                      </div>
                    </label>
                    <Input
                      value={prospectDetails.role}
                      onChange={(e) => setProspectDetails({ ...prospectDetails, role: e.target.value })}
                      placeholder="e.g., CTO, VP of Analytics"
                      className="bg-white/5 border-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        Company Name
                      </div>
                    </label>
                    <Input
                      value={prospectDetails.companyName}
                      onChange={(e) => setProspectDetails({ ...prospectDetails, companyName: e.target.value })}
                      placeholder="e.g., Acme Corp"
                      className="bg-white/5 border-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        Company Size
                      </div>
                    </label>
                    <Input
                      value={prospectDetails.companySize}
                      onChange={(e) => setProspectDetails({ ...prospectDetails, companySize: e.target.value })}
                      placeholder="e.g., 500-1000 employees"
                      className="bg-white/5 border-white/10"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Specific Pain Points (Optional)
                    </label>
                    <Input
                      value={prospectDetails.specificPainPoints}
                      onChange={(e) =>
                        setProspectDetails({ ...prospectDetails, specificPainPoints: e.target.value })
                      }
                      placeholder="e.g., struggling with real-time reporting"
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={handleGenerateSequence}
                    disabled={!prospectDetails.role || !prospectDetails.companyName}
                    className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-semibold py-6 text-lg"
                  >
                    Generate Email Sequence
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Generated Emails */}
          {generatedEmails.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-bold">
                  4
                </div>
                <h2 className="text-2xl font-bold text-white">Your Personalized Email Sequence</h2>
              </div>

              <div className="space-y-6">
                {generatedEmails.map((email, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300 mb-2">
                          Email {index + 1} {index === 0 ? '(Initial Outreach)' : index === 3 ? '(Breakup)' : '(Follow-up)'}
                        </span>
                        <h3 className="text-lg font-semibold text-white">Subject: {email.subject}</h3>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(`Subject: ${email.subject}\n\n${email.body}`, index)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>

                    <div className="p-4 rounded-lg bg-black/20 border border-white/5">
                      <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans">{email.body}</pre>
                    </div>

                    {index < generatedEmails.length - 1 && (
                      <p className="text-xs text-gray-500 mt-3">
                        💡 Suggested timing: Wait {index === 0 ? '3-4' : index === 1 ? '4-5' : '5-7'} business days before sending next email
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/10 to-cyan-500/10 border border-pink-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">📚 Recommended Resources to Attach</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>
                      <Link href="/presentations">
                        <a className="text-cyan-400 hover:underline">Presentations</a>
                      </Link>{' '}
                      - Share relevant pitch decks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>
                      <Link href="/videos">
                        <a className="text-cyan-400 hover:underline">Videos</a>
                      </Link>{' '}
                      - Include product demos and explainers
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>
                      <Link href="/battle-cards">
                        <a className="text-cyan-400 hover:underline">Battle Cards</a>
                      </Link>{' '}
                      - Attach competitive positioning guides
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
