import { Container, Section, Heading2, Body } from '@/components/foundation';

export default function CollectionPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <Section spacing="lg">
        <Container>
          <Heading2 className="mb-4">Collection: {params.slug}</Heading2>
          <Body>This is a placeholder for the collection page. Products will be displayed here in Phase 2.</Body>
        </Container>
      </Section>
    </main>
  );
}
