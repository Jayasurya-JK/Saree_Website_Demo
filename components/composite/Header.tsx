'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, Heart, ShoppingBag, ChevronDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  
  const { openCart, openMobileMenu } = useUIStore();
  const cartItemCount = useCartStore((state) => state.getItemCount());
  const wishlistCount = useWishlistStore((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    { name: 'Silk Sarees', href: '/collections/silk' },
    { name: 'Cotton Sarees', href: '/collections/cotton' },
    { name: 'Handloom Sarees', href: '/collections/handloom' },
    { name: 'Festive Sarees', href: '/collections/festive' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-ivory border-b border-border-light',
        'transition-all duration-base',
        isScrolled ? 'py-4 shadow-md' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif tracking-wide text-maroon-500 hover:text-maroon-600 transition-colors"
          >
            SAREE BOUTIQUE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden desktop:flex items-center space-x-8">
            {/* Collections Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-base font-medium text-text-primary hover:text-maroon-500 transition-colors"
                aria-expanded={isCollectionsOpen}
                aria-haspopup="true"
              >
                <span>Collections</span>
                <ChevronDown
                  className={cn(
                    'w-4 h-4 transition-transform duration-base',
                    isCollectionsOpen && 'rotate-180'
                  )}
                />
              </button>

              {/* Dropdown Menu */}
              {isCollectionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-ivory border border-border-light rounded-lg shadow-lg py-2 animate-fade-in">
                  {collections.map((collection) => (
                    <Link
                      key={collection.href}
                      href={collection.href}
                      className="block px-4 py-2 text-sm text-text-primary hover:bg-maroon-50 hover:text-maroon-500 transition-colors"
                    >
                      {collection.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/craft"
              className="text-base font-medium text-text-primary hover:text-maroon-500 transition-colors"
            >
              Craft
            </Link>

            <Link
              href="/our-story"
              className="text-base font-medium text-text-primary hover:text-maroon-500 transition-colors"
            >
              Our Story
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon - Hidden on mobile */}
            <button
              className="hidden tablet:block p-2 text-text-primary hover:text-maroon-500 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Icon - Hidden on mobile */}
            <Link
              href="/wishlist"
              className="hidden tablet:block relative p-2 text-text-primary hover:text-maroon-500 transition-colors"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon-500 text-ivory text-xs font-medium rounded-full flex items-center justify-center animate-scale-in">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={openCart}
              className="relative p-2 text-text-primary hover:text-maroon-500 transition-colors"
              aria-label={`Shopping cart (${cartItemCount} items)`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon-500 text-ivory text-xs font-medium rounded-full flex items-center justify-center animate-scale-in">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={openMobileMenu}
              className="desktop:hidden p-2 text-text-primary hover:text-maroon-500 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
