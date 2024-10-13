import { render } from '@testing-library/react';
import React from 'react';
import { Main } from '../../src/components/Main';

describe('Main tests', function appTests() {
  this.timeout(5000);

  it('can render Main', async () => {
    render(<Main><h1>header</h1></Main>);
  });
});
