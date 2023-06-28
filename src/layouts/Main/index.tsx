import React, { useEffect } from 'react';
import style from './main.module.scss';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import brandSlice from '../../features/brand/brandSlice';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(brandSlice.actions.getBrand({ brandCode: 'PR' }));
  }, [dispatch]);
  return (
    <div className={style['main']}>
      <Header />
    </div>
  );
};

export default Main;
