import ReactDOMClient from 'react-dom/client';
import { expect } from 'chai';
import { act } from '@testing-library/react';
import jsdomGlobal from 'jsdom-global';
import React from 'react';
import { App } from '../src/App';

describe('App tests', function appTests() {
  this.timeout(5000);

  before(function before() {
    this.jsdom = jsdomGlobal();
  });

  after(function after() {
    this.jsdom();
  });

  it('can render App and "Hello World!" is displayed', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    await act(async () => {
      ReactDOMClient.createRoot(container).render(<App />);
    });

    const h1 = container.querySelector('h1');
    expect(h1).not.be.null;
    expect(h1!.textContent).to.equal('Hello World!');
  });
});
