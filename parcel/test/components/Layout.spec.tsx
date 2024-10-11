import { render } from '@testing-library/react';
import React from 'react';
import { Layout } from '../../src/components/Layout';

describe('Layout tests', function appTests() {
  this.timeout(5000);

  it('can render Layout', async () => {
    render(<Layout />);
  });
});
