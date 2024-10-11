import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Nav } from '../../src/components/Nav';

describe('Nav tests', function appTests() {
  this.timeout(5000);

  it('can render Nav', async () => {
    render(<Nav />);
  });

  it('nav text should be "Nav"', async () => {
    render(<Nav />);
    const displayText = screen.queryByText('Nav');
    expect(displayText).not.be.null;
  });
});
