import { HeroSection } from '@/components/sections/HeroSection';
import { NetworkGrid } from '@/components/sections/NetworkGrid';
import { TerminalSection } from '@/components/sections/TerminalSection';
import { AIChatPanel } from '@/components/sections/AIChatPanel';
import { ProjectsShowcase } from '@/components/sections/ProjectsShowcase';
import { EducationPreview } from '@/components/sections/EducationPreview';
import { CommunityPreview } from '@/components/sections/CommunityPreview';
import { StatsBar } from '@/components/sections/StatsBar';

export function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <StatsBar />
      <EducationPreview />
      <ProjectsShowcase />
      <NetworkGrid />
      <CommunityPreview />
      <TerminalSection />
      <AIChatPanel />
    </div>
  );
}
