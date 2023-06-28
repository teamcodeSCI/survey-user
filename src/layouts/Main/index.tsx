import React, { useEffect } from 'react';
import style from './main.module.scss';
import Header from '@/components/Header';
import { useDispatch } from 'react-redux';
import brandSlice from '@/features/brand/brandSlice';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(brandSlice.actions.getBrand({ brandCode: 'PR' }));
  }, [dispatch]);
  return (
    <div className={style['main']}>
      <Header />
      <div className={style['layout']}>
        <div className="container">
          <div className={style['wrapper']}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
