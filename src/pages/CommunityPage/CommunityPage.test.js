import React from 'react';

import { render } from '@testing-library/react';

import CommunityPage from './CommunityPage';

describe('CommunityPage', () => {

    it('CommunityPage를 그려준다', () => {
        const { container } = render(<CommunityPage />)

        expect(container).toHaveTextContent('Community')
    })
})
