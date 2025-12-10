import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";
import Methodology from "./pages/Methodology";
import Competition from "./pages/Competition";
import Resources from "./pages/Resources";
import Admin from "./pages/Admin";
import AdminAssessments from "./pages/AdminAssessments";
import Story from "./pages/Story";
import FourPillars from "./pages/FourPillars";
import AIModernization from "./pages/AIModernization";
import DecisionIntelligence from "./pages/DecisionIntelligence";
import EmbeddedIntelligence from "./pages/EmbeddedIntelligence";
import AIArchitecture from "./pages/AIArchitecture";
import OurMessage from "./pages/OurMessage";
import PlaybookSelector from "./pages/PlaybookSelector";
import Presentations from "./pages/Presentations";
import ResourcesOverview from "./pages/ResourcesOverview";
import BattleCards from "./pages/BattleCards";
import DiscoveryScripts from "./pages/DiscoveryScripts";
import Videos from "./pages/Videos";
import Ebooks from "./pages/Ebooks";
import Infographics from "./pages/Infographics";
import EmailSequenceBuilder from "./pages/EmailSequenceBuilder";
import Pricing from "./pages/Pricing";
import IndustryBanking from "./pages/IndustryBanking";
import IndustryEducation from "./pages/IndustryEducation";
import IndustryHealthcare from "./pages/IndustryHealthcare";
import IndustryRetail from "./pages/IndustryRetail";
import IndustryManufacturing from "./pages/IndustryManufacturing";
import IndustryPublicSafety from "./pages/IndustryPublicSafety";
import IndustryPrivateEquity from "./pages/IndustryPrivateEquity";
import PositioningIntelligence from "./pages/PositioningIntelligence";
import IntelligenceAssessment from "./pages/IntelligenceAssessment";
import ProtectedRoute from "./components/ProtectedRoute";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/story">
        <ProtectedRoute>
          <Story />
        </ProtectedRoute>
      </Route>
      <Route path="/our-message">
        <ProtectedRoute>
          <OurMessage />
        </ProtectedRoute>
      </Route>
      <Route path="/four-pillars">
        <ProtectedRoute>
          <FourPillars />
        </ProtectedRoute>
      </Route>
      <Route path="/ai-modernization">
        <ProtectedRoute>
          <AIModernization />
        </ProtectedRoute>
      </Route>
      <Route path="/decision-intelligence">
        <ProtectedRoute>
          <DecisionIntelligence />
        </ProtectedRoute>
      </Route>
      <Route path="/embedded-intelligence">
        <ProtectedRoute>
          <EmbeddedIntelligence />
        </ProtectedRoute>
      </Route>
      <Route path="/ai-architecture">
        <ProtectedRoute>
          <AIArchitecture />
        </ProtectedRoute>
      </Route>
      <Route path="/resources">
        <ProtectedRoute>
          <ResourcesOverview />
        </ProtectedRoute>
      </Route>
      <Route path="/playbook-selector">
        <ProtectedRoute>
          <PlaybookSelector />
        </ProtectedRoute>
      </Route>
      <Route path="/presentations">
        <ProtectedRoute>
          <Presentations />
        </ProtectedRoute>
      </Route>
      <Route path="/battle-cards">
        <ProtectedRoute>
          <BattleCards />
        </ProtectedRoute>
      </Route>
      <Route path="/discovery-scripts">
        <ProtectedRoute>
          <DiscoveryScripts />
        </ProtectedRoute>
      </Route>
      <Route path="/videos">
        <ProtectedRoute>
          <Videos />
        </ProtectedRoute>
      </Route>
      <Route path="/ebooks">
        <ProtectedRoute>
          <Ebooks />
        </ProtectedRoute>
      </Route>
      <Route path="/infographics">
        <ProtectedRoute>
          <Infographics />
        </ProtectedRoute>
      </Route>
      <Route path="/email-sequence-builder">
        <ProtectedRoute>
          <EmailSequenceBuilder />
        </ProtectedRoute>
      </Route>
      <Route path="/pricing">
        <ProtectedRoute>
          <Pricing />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/banking">
        <ProtectedRoute>
          <IndustryBanking />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/education">
        <ProtectedRoute>
          <IndustryEducation />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/healthcare">
        <ProtectedRoute>
          <IndustryHealthcare />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/retail">
        <ProtectedRoute>
          <IndustryRetail />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/manufacturing">
        <ProtectedRoute>
          <IndustryManufacturing />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/public-safety">
        <ProtectedRoute>
          <IndustryPublicSafety />
        </ProtectedRoute>
      </Route>
      <Route path="/industries/private-equity">
        <ProtectedRoute>
          <IndustryPrivateEquity />
        </ProtectedRoute>
      </Route>
      <Route path="/positioning-intelligence">
        <ProtectedRoute>
          <PositioningIntelligence />
        </ProtectedRoute>
      </Route>
      <Route path="/intelligence-assessment">
        <ProtectedRoute>
          <IntelligenceAssessment />
        </ProtectedRoute>
      </Route>
      <Route path="/">
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Route>
      <Route path="/problem">
        <ProtectedRoute>
          <Problem />
        </ProtectedRoute>
      </Route>
      <Route path="/solution">
        <ProtectedRoute>
          <Solution />
        </ProtectedRoute>
      </Route>
      <Route path="/methodology">
        <ProtectedRoute>
          <Methodology />
        </ProtectedRoute>
      </Route>
      <Route path="/competition">
        <ProtectedRoute>
          <Competition />
        </ProtectedRoute>
      </Route>
      <Route path="/resources">
        <ProtectedRoute>
          <Resources />
        </ProtectedRoute>
      </Route>
      <Route path="/admin">
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      </Route>
      <Route path="/admin/assessments">
        <ProtectedRoute>
          <AdminAssessments />
        </ProtectedRoute>
      </Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
