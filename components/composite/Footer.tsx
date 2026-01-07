'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';
import { Input } from '@/components/primitives';
import { Button } from '@/components/primitives';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const shopLinks = [
    { label: 'Silk Sarees', href: '/collections/silk' },
    { label: 'Cotton Sarees', href: '/collections/cotton' },
    { label: 'Handloom Sarees', href: '/collections/handloom' },
    { label: 'Festive Sarees', href: '/collections/festive' },
    { label: 'New Arrivals', href: '/collections/new-arrivals' },
  ];

  const aboutLinks = [
    { label: 'Our Story', href: '/our-story' },
    { label: 'Craft & Artisans', href: '/craft' },
    { label: 'Care Guide', href: '/care-guide' },
    { label: 'Sustainability', href: '/sustainability' },
  ];

  const supportLinks = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'FAQs', href: '/faq' },
  ];

  return (
    <footer className="bg-warmBeige text-text-secondary">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 tablet:py-12">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-8">
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-maroon-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">About</h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-maroon-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-maroon-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Connect</h3>
            <p className="text-sm mb-4">
              Stay updated with our latest collections
            </p>
            
            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </div>
              {subscribed && (
                <p className="text-sm text-deepGreen-500 mt-2">
                  Thank you for subscribing!
                </p>
              )}
            </form>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-maroon-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-maroon-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col tablet:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © 2026 Saree Boutique. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-deepGreen-500">✓</span> 100% Authentic
              </span>
              <span className="flex items-center gap-2">
                <span className="text-deepGreen-500">✓</span> Secure Checkout
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
