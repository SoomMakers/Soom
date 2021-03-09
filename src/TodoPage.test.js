import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import TodoPage from './TodoPage';

jest.mock('react-redux');

describe('TodoPage', () => {
  it('render', () => {
    const { queryByText } = render(<TodoPage />);

    expect(queryByText('추가')).toBeInTheDocument();
  })
});

