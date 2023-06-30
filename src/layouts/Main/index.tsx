import React, { useEffect } from 'react';
import style from './main.module.scss';

import brandSlice, { backgroundSelector } from '@/features/brand/brandSlice';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { fetchSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { brandCodeSelector, loadedSurveySelector, loadingSurveySelector } from '@/features/survey/surveySlice';
import Loading from '@/components/Loading';

const Main = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const id = searchParams.get('id');
  const dispatch = useAppDispatch();
  const brandCode = useAppSelector(brandCodeSelector);
  const background = useAppSelector(backgroundSelector);
  const surveyLoaded = useAppSelector(loadedSurveySelector);
  const surveyLoading = useAppSelector(loadingSurveySelector);

  useEffect(() => {
    if (id) {
      dispatch(fetchSurvey(Number(id)));
      if (surveyLoaded) {
        dispatch(brandSlice.actions.getBrand({ brandCode: brandCode }));
      }
    } else {
      navigate('/not-found');
    }
  }, [dispatch, id, brandCode, surveyLoaded, navigate]);
  return (
    <div style={{ background: background }} className={style['main']}>
      <div className={style['layout']}>
        <div className="container">
          {surveyLoading ? (
            <Loading />
          ) : (
            surveyLoaded && (
              <div className={style['wrapper']}>
                <Outlet />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
