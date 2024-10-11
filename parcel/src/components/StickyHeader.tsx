// see https://www.smashingmagazine.com/2024/09/sticky-headers-full-height-elements-tricky-combination/

import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';

export function StickyHeader({
  children,
}: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <>
      <div className='above-the-fold-spacer' />
      <Header className='header' />
      <HeroSection />
      <main className='main'>
        {children}
      </main>
    </>
  );
}
