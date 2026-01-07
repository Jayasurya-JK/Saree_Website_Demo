import { Container, Section, Heading1, Body } from '@/components/foundation';

export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <Section spacing="lg" background="warmBeige">
        <Container size="md">
          <Heading1 className="mb-6 text-center">Our Story</Heading1>
          <Body className="text-center mb-12">
            This is a placeholder for the Our Story page. Content about the brand heritage and journey will be added in Phase 2.
          </Body>
        </Container>
      </Section>
    </main>
  );
}
