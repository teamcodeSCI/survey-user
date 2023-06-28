import React, { useEffect } from 'react';
import style from './main.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import brandSlice, { backgroundSelector } from '@/features/brand/brandSlice';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const background = useSelector(backgroundSelector);
  useEffect(() => {
    dispatch(brandSlice.actions.getBrand({ brandCode: 'KN' }));
  }, [dispatch]);
  return (
    <div style={{ background: background }} className={style['main']}>
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
