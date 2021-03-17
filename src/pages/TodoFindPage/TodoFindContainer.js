import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import { useForm } from 'react-hook-form';

import { get } from '../../utils/utils';

import { addMission, loadMissions } from '../../redux/actions';

import TodoFind from './TodoFind';

export default function TodoFindContainer() {
  const dispatch = useDispatch();

  const missions = useSelector(get('missions'));

  const history = useHistory();

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    dispatch(loadMissions());
  }, []);

  function handleClickClose() {
    history.push('/todo');
  }

  const onSubmit = (data) => {
    dispatch(addMission(data));
    handleClickClose();
  };

  return (
    <TodoFind
      handleClickClose={handleClickClose}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      missions={missions}
    />
  );
}
