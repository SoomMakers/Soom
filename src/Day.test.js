import React from 'react';

import { render } from '@testing-library/react';

import Day from './Day';

describe('Day', () => {

    it('renders current date', () => {

        const { queryByText } = render((<Day />));

        expect(queryByText(/2021/)).not.toBeNull();
    });
});
