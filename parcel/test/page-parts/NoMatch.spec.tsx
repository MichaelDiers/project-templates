import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { NoMatch } from '../../src/page-parts/NoMatch';

describe('Footer tests', function appTests() {
  this.timeout(5000);

  it('can render NoMatch', async () => {
    render(<NoMatch />);
  });

  it('NoMatch text should be "Oooooops!"', async () => {
    render(<NoMatch />);
    const displayText = screen.queryByText('Oooooops!');
    expect(displayText).not.be.null;
  });
});
