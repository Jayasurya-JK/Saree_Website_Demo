import { Container, Section, Heading1, Body } from '@/components/foundation';

export default function CareGuidePage() {
  return (
    <main className="min-h-screen">
      <Section spacing="lg" background="warmBeige">
        <Container size="md">
          <Heading1 className="mb-6 text-center">Care Guide</Heading1>
          <Body className="text-center mb-12">
            This is a placeholder for the Care Guide page. Instructions for saree care and maintenance will be added in Phase 2.
          </Body>
        </Container>
      </Section>
    </main>
  );
}
