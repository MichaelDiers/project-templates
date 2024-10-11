import { expect } from 'chai';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Header } from '../../src/components/Header';
import { ariaRoleMappings } from '../ariaRoleMappings';

describe('Header tests', function appTests() {
  this.timeout(5000);

  it('can render Header', async () => {
    render(<Header />);
    const header = screen.queryByRole(ariaRoleMappings.header);
    expect(header).not.be.null;
  });

  it('header text should be "Header"', async () => {
    render(<Header />);
    const displayText = screen.queryByText('Header');
    expect(displayText).not.be.null;
  });
});
