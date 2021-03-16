import React from 'react';

import { render } from '@testing-library/react';

import Day from './Day';

describe('Day', () => {
  it('현재 날짜를 고쳐준다', () => {
    const { queryByText } = render(<Day />);

    expect(queryByText(/2021/)).not.toBeNull();
  });
});
