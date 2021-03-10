import React from 'react';

import { render, screen } from '@testing-library/react';

import TodoFindPage from './TodoFindPage';

describe('TodoFindPage', () => {
    it('renders TodoFindPage', () => {
        render(<TodoFindPage />);

        expect(screen.queryByText('Find')).not.toBeNull();
    })
});
