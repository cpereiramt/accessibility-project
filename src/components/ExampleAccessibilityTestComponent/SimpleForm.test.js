import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import SimpleForm from '.';

describe('The <SimpleForm/> component', () => {
  
  it('should not fail any accessibility tests', async () => {
    const { container } = render(<SimpleForm />);
    expect(await axe(container)).toHaveNoViolations();
  });
  
});