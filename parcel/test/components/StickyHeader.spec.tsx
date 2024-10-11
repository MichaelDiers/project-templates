import { render } from '@testing-library/react';
import React from 'react';
import { StickyHeader } from '../../src/components/StickyHeader';

describe('StickyHeader tests', function appTests() {
  this.timeout(5000);

  it('can render StickHeader', async () => {
    render(<StickyHeader><h1>StickyHeader</h1></StickyHeader>);
  });
});
