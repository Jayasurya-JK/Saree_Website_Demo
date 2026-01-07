import React from 'react';
import { Header, Footer, MobileMenu, CartDrawer } from '@/components/composite';

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <MobileMenu />
      <CartDrawer />
    </>
  );
}
