import React from 'react';

import { render } from '@testing-library/react';

import TodoContainer from './TodoContainer';

jest.mock('react-redux');

describe('TodoContainer', () => {
  it('render', () => {
    const { queryByText } = render(<TodoContainer />);

  })
});

