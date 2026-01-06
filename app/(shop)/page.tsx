import { Container, Section, Heading1, Body } from '@/components/foundation';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Placeholder */}
      <Section spacing="xl" background="paperTexture">
        <Container size="lg">
          <div className="text-center max-w-3xl mx-auto">
            <Heading1 className="mb-6">
              Heritage in Soul. Modern in Execution.
            </Heading1>
            <Body className="text-lg mb-8">
              Discover handcrafted South Indian sarees that celebrate tradition with contemporary elegance.
            </Body>
            <div className="inline-block px-8 py-4 bg-maroon-500 text-ivory rounded-md font-medium">
              Coming Soon
            </div>
          </div>
        </Container>
      </Section>

      {/* Collections Preview - Placeholder */}
      <Section spacing="lg">
        <Container>
          <div className="text-center mb-12">
            <Heading1 className="text-4xl mb-4">Our Collections</Heading1>
            <Body>Phase 2: Collections will be featured here</Body>
          </div>
        </Container>
      </Section>
    </main>
  );
}
