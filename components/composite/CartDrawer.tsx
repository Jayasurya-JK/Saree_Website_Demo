'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/primitives';

export function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, updateQuantity, removeItem, getTotal } = useCartStore();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeCart();
      }
    };

    if (isCartOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const total = getTotal();
  const isEmpty = items.length === 0;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-maroon-900/40 z-50 animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 bottom-0 w-full max-w-md',
          'bg-ivory shadow-2xl z-50',
          'flex flex-col',
          'animate-slide-left'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <h2 className="text-2xl font-serif text-text-primary">Your Cart</h2>
          <button
            onClick={closeCart}
            className="p-2 text-text-primary hover:text-maroon-500 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <p className="text-lg text-text-secondary mb-6">Your cart is empty</p>
            <Link href="/collections/silk" onClick={closeCart}>
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 rounded-lg hover:bg-warmBeige transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-24 h-32 flex-shrink-0 bg-warmBeige rounded-md overflow-hidden">
                      <Image
                        src={item.product.images[0]?.src || '/placeholder.jpg'}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-text-primary">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-text-tertiary hover:text-maroon-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-sm text-text-secondary mb-2">
                        {item.product.sareeAttributes?.fabric} •{' '}
                        {item.product.sareeAttributes?.weave}
                      </p>

                      <div className="mt-auto flex items-center justify-between">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2 border border-border-light rounded-md">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-warmBeige transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-warmBeige transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <p className="font-medium text-maroon-500">
                          {formatCurrency(item.subtotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer - Fixed */}
            <div className="border-t border-border-light p-6 bg-ivory">
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-text-primary">
                  Subtotal
                </span>
                <span className="text-2xl font-serif text-maroon-500">
                  {formatCurrency(total)}
                </span>
              </div>

              <div className="space-y-3">
                <Link href="/cart" onClick={closeCart} className="block">
                  <Button fullWidth>View Cart</Button>
                </Link>
                <Link href="/checkout" onClick={closeCart} className="block">
                  <Button variant="secondary" fullWidth>Checkout</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
