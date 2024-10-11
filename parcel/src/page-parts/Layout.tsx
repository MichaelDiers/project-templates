import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';

export function Layout(): React.JSX.Element {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
