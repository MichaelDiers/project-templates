import { render } from '@testing-library/react';
import React from 'react';
import { HeroLayout } from '../../src/components/HeroLayout';

describe('HeroLayout tests', function appTests() {
  this.timeout(5000);

  it('can render HeroLayout', async () => {
    render(<HeroLayout />);
  });
});
