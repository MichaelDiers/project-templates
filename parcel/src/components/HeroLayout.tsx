import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { HeroSection } from './HeroSection';
import { Header } from './Header';
import { Main } from './Main';

export function HeroLayout(): React.JSX.Element {
  return (
    <>
      <div className='above-the-fold-spacer' />
      <Header />
      <section className='hero'>
        <HeroSection />
      </section>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
