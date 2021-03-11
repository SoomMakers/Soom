import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByPlaceholderText, getByText } = render((
    <Input
      value="none"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('none')).not.toBeNull();

  fireEvent.change(getByPlaceholderText('please write your task'), {
    target: { value: 'recycle food waste' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('Add'));

  expect(handleClick).toBeCalled();
});
