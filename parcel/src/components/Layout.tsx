import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { StickyHeader } from './StickyHeader';

export function Layout(): React.JSX.Element {
  return (
    <>
      <StickyHeader>
        <Outlet />
      </StickyHeader>
      <Footer />
    </>
  );
}
