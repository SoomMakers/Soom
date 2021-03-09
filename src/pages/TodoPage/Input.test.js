import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();

  const { getByDisplayValue, getByPlaceholderText, getByText } = render((
    <Input
      value="기존 할 일"
      onChange={handleChange}
      onClick={handleClick}
    />
  ));

  expect(getByDisplayValue('기존 할 일')).not.toBeNull();

  fireEvent.change(getByPlaceholderText('please write your task'), {
    target: { value: '무언가 하기' },
  });

  expect(handleChange).toBeCalled();

  fireEvent.click(getByText('Add'));

  expect(handleClick).toBeCalled();
});
