import { render } from '@testing-library/react';
import React from 'react';
import { Nav } from '../../src/components/Nav';

describe('Nav tests', function appTests() {
  this.timeout(5000);

  it('can render Nav', async () => {
    render(<Nav />);
  });
});
