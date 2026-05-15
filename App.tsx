import { Routes, Route } from 'react-router-dom';
import { GlassNavbar } from '@/components/layout/GlassNavbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatPanel } from '@/components/sections/AIChatPanel';
import { HomePage } from '@/pages/HomePage';
import { EducationPage } from '@/pages/EducationPage';
import { AIToolsPage } from '@/pages/AIToolsPage';
import { AstronomyPage } from '@/pages/AstronomyPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { CommunityPage } from '@/pages/CommunityPage';
import { LinksPage } from '@/pages/LinksPage';
import { ContactPage } from '@/pages/ContactPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { TerminalPage } from '@/pages/TerminalPage';
import { ProfilePage } from '@/pages/ProfilePage';

function App() {
  return (
    <div className="min-h-screen bg-void text-silver">
      <GlassNavbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/ai-tools" element={<AIToolsPage />} />
          <Route path="/astronomy" element={<AstronomyPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/terminal" element={<TerminalPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
      <Footer />
      <AIChatPanel />
    </div>
  );
}

export default App;
