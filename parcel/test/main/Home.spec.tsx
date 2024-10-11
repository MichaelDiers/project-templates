import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Home } from '../../src/main/Home';

describe('Home tests', function appTests() {
  this.timeout(5000);

  it('can render Home', async () => {
    render(<Home />);
  });

  it('Home text should be "Hello World!"', async () => {
    render(<Home />);
    const displayText = screen.queryByText('Hello World!');
    expect(displayText).not.be.null;
  });
});
