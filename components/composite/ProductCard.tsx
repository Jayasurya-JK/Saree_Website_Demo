'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/lib/types';
import { useWishlistStore } from '@/store/wishlistStore';
import { Badge } from '@/components/primitives';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, removeItem, isInWishlist } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const isNewArrival = product.attributes.some(
    (attr) => attr.name === 'New Arrival' && attr.value === 'true'
  );
  
  const isHandloom = product.attributes.some(
    (attr) => attr.name === 'Handloom' && attr.value === 'true'
  );

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-ivory rounded-lg overflow-hidden transition-shadow duration-base hover:shadow-lg">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-warmBeige">
          <Image
            src={product.images[0]?.src || '/placeholder.jpg'}
            alt={product.images[0]?.alt || product.name}
            fill
            className={cn(
              'object-cover transition-transform duration-slow',
              isHovered && 'scale-105'
            )}
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={cn(
              'absolute top-4 right-4 p-2 rounded-full transition-all duration-base',
              inWishlist
                ? 'bg-maroon-500 text-ivory'
                : 'bg-ivory/90 text-text-primary hover:bg-ivory'
            )}
            aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart
              className={cn(
                'w-5 h-5 transition-transform duration-base',
                inWishlist && 'fill-current animate-scale-in'
              )}
            />
          </button>

          {/* Badges */}
          {(isNewArrival || isHandloom) && (
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {isNewArrival && (
                <Badge variant="primary">New Arrival</Badge>
              )}
              {isHandloom && (
                <Badge variant="secondary">Handloom</Badge>
              )}
            </div>
          )}

          {/* Quick View Button - Desktop Only */}
          {isHovered && (
            <div className="hidden desktop:block absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-maroon-900/60 to-transparent animate-slide-up">
              <button className="w-full py-2 bg-ivory text-maroon-500 rounded-md font-medium hover:bg-warmBeige transition-colors">
                Quick View
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-xl font-serif text-text-primary mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-maroon-500">
            {formatCurrency(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}
