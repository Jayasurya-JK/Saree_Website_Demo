import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Award, Star, Shield, ArrowRight } from 'lucide-react';
import { Container, Section, Heading1, Heading2, Heading3, Body } from '@/components/foundation';
import { Button, Badge } from '@/components/primitives';
import { ProductCard } from '@/components/composite';
import { mockCollections, mockFeaturedProducts } from '@/lib/mockData';
import { heroImage, craftImage } from '@/lib/placeholders';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium South Indian Sarees | Saree Boutique',
  description: 'Discover exquisite handloom silk and cotton sarees crafted by master artisans. Heritage in soul, modern in execution.',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] tablet:h-[90vh] flex items-center justify-center mt-20">
        <Image 
          src={heroImage}
          fill 
          className="object-cover" 
          alt="Elegant saree drape showcasing traditional craftsmanship"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/60 to-transparent" />
        <div className="relative z-10 text-center text-ivory px-4 max-w-4xl mx-auto">
          <Heading1 className="mb-6 text-ivory drop-shadow-lg">
            Rooted in Tradition. Woven for Today.
          </Heading1>
          <Body className="text-lg mb-8 text-ivory/90 max-w-2xl mx-auto">
            Discover exquisite handloom sarees crafted by master artisans across South India.
          </Body>
          <Link href="/collections/silk">
            <Button size="lg">Explore Collections</Button>
          </Link>
        </div>
      </section>

      {/* Collections Gateway Section */}
      <Section spacing="xl" background="ivory">
        <Container>
          <div className="text-center mb-12">
            <Heading2 className="mb-4">Discover Our Collections</Heading2>
            <Body className="text-lg max-w-2xl mx-auto">
              From luxurious silks to comfortable cottons, each collection celebrates the rich heritage of South Indian weaving traditions.
            </Body>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {mockCollections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative h-80 rounded-lg overflow-hidden"
              >
                <Image
                  src={collection.image}
                  fill
                  className="object-cover transition-transform duration-slow group-hover:scale-105"
                  alt={collection.name}
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-maroon-900/20 group-hover:from-maroon-900/90 transition-all duration-base" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-ivory">
                  <Heading3 className="text-ivory mb-2">{collection.name}</Heading3>
                  <Body className="text-ivory/90 mb-4">{collection.description}</Body>
                  <div className="flex items-center text-ivory font-medium group-hover:gap-2 transition-all duration-base">
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-base" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Craft & Heritage Section */}
      <Section spacing="xl" background="warmBeige">
        <Container>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 desktop:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={craftImage}
                fill
                className="object-cover"
                alt="Master artisan weaving traditional saree on handloom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="desktop:pr-12">
              <Badge variant="secondary" className="mb-4">Our Craft</Badge>
              <Heading2 className="mb-6">Every Thread Tells a Story</Heading2>
              <Body className="text-lg mb-6">
                For over 25 years, we&apos;ve worked with master weavers across South India to preserve traditional handloom techniques. Each saree is a testament to their skill, patience, and artistry.
              </Body>
              <Body className="text-lg mb-8">
                From the rhythmic clatter of wooden looms to the intricate interplay of warp and weft, every saree carries generations of knowledge and the unmistakable touch of human hands.
              </Body>
              <Link href="/craft">
                <Button variant="secondary">
                  Learn About Our Craft
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Products Section */}
      <Section spacing="xl" background="ivory">
        <Container>
          <div className="text-center mb-12">
            <Heading2 className="mb-4">New Arrivals</Heading2>
            <Body className="text-lg max-w-2xl mx-auto">
              Explore our latest collection of handpicked sarees, each chosen for its exceptional quality and timeless beauty.
            </Body>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="overflow-x-auto -mx-4 px-4 pb-4">
            <div className="flex gap-6 w-max">
              {mockFeaturedProducts.map((product, index) => (
                <div key={product.id} className="w-80 flex-shrink-0">
                  <ProductCard product={product} priority={index < 3} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/collections/silk">
              <Button variant="secondary">View All Collections</Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Trust & Legacy Section */}
      <Section spacing="lg" background="warmBeige">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
            {/* Trust Point 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-deepGreen-100 text-deepGreen-500 rounded-full mb-4">
                <Check className="w-8 h-8" />
              </div>
              <Heading3 className="text-xl mb-2">Authentic Handloom</Heading3>
              <Body className="text-sm">
                Certified handwoven sarees from master artisans
              </Body>
            </div>

            {/* Trust Point 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-maroon-100 text-maroon-500 rounded-full mb-4">
                <Award className="w-8 h-8" />
              </div>
              <Heading3 className="text-xl mb-2">25+ Years</Heading3>
              <Body className="text-sm">
                Trusted by generations of saree lovers
              </Body>
            </div>

            {/* Trust Point 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-softGold/20 text-maroon-500 rounded-full mb-4">
                <Star className="w-8 h-8" />
              </div>
              <Heading3 className="text-xl mb-2">Premium Quality</Heading3>
              <Body className="text-sm">
                Finest fabrics and natural dyes
              </Body>
            </div>

            {/* Trust Point 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-500 rounded-full mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <Heading3 className="text-xl mb-2">Secure Checkout</Heading3>
              <Body className="text-sm">
                Safe and easy payment options
              </Body>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
