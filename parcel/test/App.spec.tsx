import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { App } from '../src/App';

describe('App tests', function appTests() {
  this.timeout(5000);

  it('can render App and "Hello World!" is displayed', async () => {
    await render(<App />, { wrapper: HashRouter });
    const h1 = await screen.queryByText('Hello World!');
    expect(h1).not.be.null;
  });
});
