import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './page-parts/Layout';
import { Home } from './page-parts/Home';
import { NoMatch } from './page-parts/NoMatch';

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
