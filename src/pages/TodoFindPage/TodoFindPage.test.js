import React from 'react';

import { render } from '@testing-library/react';

import TodoFindPage from './TodoFindPage';

describe('TodoFindPage', () => {
    it('renders', () => {
        const { queryByText } = render(<TodoFindPage />);

        expect(queryByText('🔍')).not.toBeNull();
    })
});
