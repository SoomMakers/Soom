import React from 'react';

import { act, fireEvent, render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TodoFindPage from './TodoFindPage';

jest.mock('react-redux');

const mockPush = jest.fn(); //path

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory() {
        return { push: mockPush };
    },
}));

describe('TodoFindPage', () => {
    const dispatch = jest.fn();

    const missions = [
        {
            id: 1,
            title: '물론 씻은 뒤 분리배출하기',
        },
        {
            id: 2,
            title: '이면지 사용하기',
        },
        {
            id: 3,
            title: '친환경 상품 구매하기',
        },
        {
            id: 4,
            title: '에어컨 필터 청소하기',
        },
        {
            id: 5,
            title: '비닐봉투 대신 장바구니 사용하기',
        },
    ]

    function renderTodoFindPage() {
        return render((
            <MemoryRouter>
                <TodoFindPage />
            </MemoryRouter>
        ));
    }
    
    beforeEach(() => {
        jest.clearAllMocks();

        useDispatch.mockImplementation(() => dispatch);
        
        useSelector.mockImplementation((selector) => selector({
            missions
        }))
    })

    it('renders TodoFindPage', () => {
        renderTodoFindPage();

        expect(screen.getByText('Find')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /CLOSE/i })).toBeInTheDocument();
        expect(screen.getByText(/Choose What You Want To Do/i)).toBeInTheDocument();

        expect(screen.getByLabelText('물론 씻은 뒤 분리배출하기')).not.toBeNull();
        expect(screen.getByLabelText('이면지 사용하기')).not.toBeNull();
        expect(screen.getByLabelText('친환경 상품 구매하기')).not.toBeNull();
        expect(screen.getByLabelText('에어컨 필터 청소하기')).not.toBeNull();
        expect(screen.getByLabelText('비닐봉투 대신 장바구니 사용하기')).not.toBeNull();
    })
    
    describe('Add를 클릭 할 때', () => {
        it('dispatch를 호출한다', async () => {
            renderTodoFindPage();

            fireEvent.click(screen.getByLabelText(/비닐봉투 대신 장바구니 사용하기/));
            fireEvent.click(screen.getByLabelText(/에어컨 필터 청소하기/));

            await act(async () => {
                fireEvent.submit(screen.getByRole('button', {
                  name: /ADD/i,
                }));
              });

            expect(dispatch).toBeCalled();
        })
    })

});
