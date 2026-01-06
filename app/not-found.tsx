import { Container, Section, Heading1, Body } from '@/components/foundation';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Section spacing="lg">
        <Container size="sm">
          <div className="text-center">
            <Heading1 className="mb-4">404</Heading1>
            <Body className="mb-8 text-xl">
              Page not found. The page you're looking for doesn't exist.
            </Body>
            <Link 
              href="/"
              className="inline-block px-6 py-3 bg-maroon-500 text-ivory rounded-md font-medium hover:bg-maroon-600 transition-colors duration-base"
            >
              Return Home
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
