import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './main/Home';
import { NoMatch } from './main/NoMatch';

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
