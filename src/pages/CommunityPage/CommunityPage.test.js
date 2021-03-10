import React from 'react';

import { render } from '@testing-library/react';

import CommunityPage from './CommunityPage';

describe('CommunityPage', () => {

    it('renders CommunityPage', () => {
        const { container } = render(<CommunityPage />)

        expect(container).toHaveTextContent('Community')
    })
})
