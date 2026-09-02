import type { ReactElement } from 'react';
import {
  CallToActionSection,
  HeroSection,
  ProblemSection,
  TechStackSection,
  WorkflowSection,
} from '~/components';

export default function HomePage(): ReactElement {
  return (
    <main data-testid="home-wrapper">
      <HeroSection />
      <ProblemSection />
      <TechStackSection />
      <WorkflowSection />
      <CallToActionSection />
    </main>
  );
}
