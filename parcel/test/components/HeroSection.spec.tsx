import { render } from '@testing-library/react';
import React from 'react';
import { HeroSection } from '../../src/components/HeroSection';

describe('HeroSection tests', function appTests() {
  this.timeout(5000);

  it('can render HeroSection', async () => {
    render(<HeroSection />);
  });
});
