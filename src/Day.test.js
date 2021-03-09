import React from 'react';

import { render } from '@testing-library/react';

import Day from './Day';

describe('Day', () => {
    const date = new Date();

    it('renders current date', () => {
        const year = date.getFullYear();

        const { queryByText } = render((<Day />));

        expect(queryByText(year)).not.toBeNull();
    });
});
