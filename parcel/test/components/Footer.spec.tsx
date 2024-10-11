import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Footer } from '../../src/components/Footer';
import { ariaRoleMappings } from '../ariaRoleMappings';

describe('Footer tests', function appTests() {
  this.timeout(5000);

  it('can render Footer', async () => {
    render(<Footer />);
    const footer = screen.queryByRole(ariaRoleMappings.footer);
    expect(footer).not.be.null;
  });

  it('footer text should be "Footer"', async () => {
    render(<Footer />);
    const displayText = screen.queryByText('Footer');
    expect(displayText).not.be.null;
  });
});
