import { Container, Section, Heading2, Body } from '@/components/foundation';

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <Section spacing="lg">
        <Container>
          <Heading2 className="mb-4">Product: {params.slug}</Heading2>
          <Body>This is a placeholder for the product detail page. Product information will be displayed here in Phase 2.</Body>
        </Container>
      </Section>
    </main>
  );
}
