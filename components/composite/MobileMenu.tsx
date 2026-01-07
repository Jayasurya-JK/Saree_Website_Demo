'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Heart, Search, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/store/uiStore';
import { useWishlistStore } from '@/store/wishlistStore';

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useUIStore();
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  if (!isMobileMenuOpen) return null;

  const collections = [
    { name: 'Silk Sarees', href: '/collections/silk' },
    { name: 'Cotton Sarees', href: '/collections/cotton' },
    { name: 'Handloom Sarees', href: '/collections/handloom' },
    { name: 'Festive Sarees', href: '/collections/festive' },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-maroon-900/40 z-50 animate-fade-in"
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-80 max-w-sm',
          'bg-ivory shadow-2xl z-50',
          'overflow-y-auto',
          'animate-slide-left'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <span className="text-xl font-serif tracking-wide text-maroon-500">
            SAREE BOUTIQUE
          </span>
          <button
            onClick={closeMobileMenu}
            className="p-2 text-text-primary hover:text-maroon-500 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          {/* Collections Accordion */}
          <div className="mb-2">
            <button
              onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
              className="flex items-center justify-between w-full py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
            >
              <span>Collections</span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 transition-transform duration-base',
                  isCollectionsOpen && 'rotate-180'
                )}
              />
            </button>
            {isCollectionsOpen && (
              <div className="pl-4 space-y-2 mb-2">
                {collections.map((collection) => (
                  <Link
                    key={collection.href}
                    href={collection.href}
                    onClick={handleLinkClick}
                    className="block py-2 text-base text-text-secondary hover:text-maroon-500 transition-colors"
                  >
                    {collection.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/craft"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
          >
            Craft
          </Link>

          <Link
            href="/our-story"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
          >
            Our Story
          </Link>

          <Link
            href="/care-guide"
            onClick={handleLinkClick}
            className="block py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
          >
            Care Guide
          </Link>

          {/* Divider */}
          <div className="my-4 border-t border-border-light" />

          {/* Wishlist Link */}
          <Link
            href="/wishlist"
            onClick={handleLinkClick}
            className="flex items-center justify-between py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Wishlist
            </span>
            {wishlistCount > 0 && (
              <span className="w-6 h-6 bg-maroon-500 text-ivory text-xs font-medium rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Search Link */}
          <Link
            href="/search"
            onClick={handleLinkClick}
            className="flex items-center gap-2 py-4 text-lg font-medium text-text-primary hover:text-maroon-500 transition-colors"
          >
            <Search className="w-5 h-5" />
            Search
          </Link>

          {/* Divider */}
          <div className="my-4 border-t border-border-light" />

          {/* Social Links */}
          <div className="flex space-x-6 pt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-maroon-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-maroon-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
