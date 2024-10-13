import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './main/Home';
import { NoMatch } from './main/NoMatch';
import { Test } from './main/Test';
import { HeroLayout } from './components/HeroLayout';

export function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<HeroLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route element={<Layout />}>
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
