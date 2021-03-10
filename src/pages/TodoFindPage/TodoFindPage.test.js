import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import TodoFindPage from './TodoFindPage';

jest.mock('react-redux');

const mockPush = jest.fn();

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

    // close를 누를 떄 todo 페이지로 이동 하는 테스트
    // it('when clicking close button, occurs handle event', () => {
    //     renderTodoFindPage();

    //     fireEvent.click(screen.getByRole('button', {
    //         name: /Close/i
    //     }));

    //     expect(mockPush).toBeCalledWith('/todo')
        
    // })

    //Todo : submit시 dispatch가 1번 호출 되도록 하는 테스트 코드 작성
    // it('when clicking add button, occurs dispatch', () => {
        //     renderTodoFindPage();

        // const buttonNode = screen.getByRole('button', {
        //     name: /ADD/i
        // })

        // fireEvent.submit(screen.getByRole('button'));
        

        // expect(dispatch).toBeCalled();
        // expect(mockPush).toBeCalledWith('/todo')
    // })
});
