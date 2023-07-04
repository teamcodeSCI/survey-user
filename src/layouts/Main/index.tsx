import React, { useEffect } from 'react';
import style from './main.module.scss';

import brandSlice, { backgroundSelector, loadedSelector } from '@/features/brand/brandSlice';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import PageNotFound from '@/pages/PageNotFound';

const Main = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const brandCode = searchParams.get('brand_code');
  const dispatch = useAppDispatch();
  const background = useAppSelector(backgroundSelector);
  const loaded = useAppSelector(loadedSelector);

  useEffect(() => {
    if (brandCode) {
      dispatch(brandSlice.actions.getBrand({ brandCode: brandCode.toUpperCase() }));
    } else {
      navigate('/not-found');
    }
  }, [dispatch, brandCode, navigate, background, loaded]);
  return (
    <>
      {loaded ? (
        <div style={{ background: background }} className={style['main']}>
          <div className="container">
            <div className={style['wrapper']}>
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </>
  );
};

export default Main;
