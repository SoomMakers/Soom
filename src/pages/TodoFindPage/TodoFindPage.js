import React from 'react';

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router';

import { useForm } from "react-hook-form";

import { addMission } from '../../redux/actions'

export default function TodoFindPage() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const dispatch = useDispatch();

    function handleClickClose() {
        history.push('/todo')
    }
    
    const onSubmit = data => {
        dispatch(addMission(data));
        handleClickClose();
    }

    return (
        <div>
            <h1>Find</h1>
            <h2>Choose What You Want To Do</h2>
            <button
                type='button'
                onClick={handleClickClose}
            >
                ClOSE
            </button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="first-mission">
                    물론 씻은 뒤 분리배출하기
                </label>
                <input 
                    type="checkbox" 
                    id='first-mission'
                    name="tasks"
                    value='물론 씻은 뒤 분리배출하기'
                    ref={register}
                    defaultChecked
                />
                <br />
                
                <label htmlFor="second-mission">
                    이면지 사용하기
                </label>
                <input 
                    type="checkbox" 
                    id='second-mission'
                    name="tasks"
                    value='이면지 사용하기'
                    ref={register}
                />
                <br />
                
                <label htmlFor="third-mission">
                    친환경 상품 구매하기
                </label>
                <input 
                    type="checkbox" 
                    id='third-mission'
                    name="tasks"
                    value='친환경 상품 구매하기'
                    ref={register}
                />
                <br />
                
                <label htmlFor="fourth-mission">
                    에어컨 필터 청소하기
                </label>
                <input 
                    type="checkbox" 
                    id='fourth-mission'
                    name="tasks"
                    value='에어컨 필터 청소하기'
                    ref={register}
                />
                <br />
                
                <label htmlFor="fifth-mission">
                    비닐봉투 대신 장바구니 사용하기
                </label>
                <input 
                    type="checkbox" 
                    id='fifth-mission'
                    name="tasks"
                    value='비닐봉투 대신 장바구니 사용하기'
                    ref={register}
                />
                <br />
                
                <button type='submit'>ADD</button>
            </form>

        </div>
    );
}
