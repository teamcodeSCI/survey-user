import { fetchSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector } from '@/features/survey/surveySlice';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './survey.module.scss';
import ReactQuestion from '@/components/ReactQuestion';
import Pagination from '@/components/Pagination';
import { logoSelector } from '@/features/brand/brandSlice';

const Survey = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loaded = useAppSelector(loadedSurveySelector);

  const logo = useAppSelector(logoSelector);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      dispatch(fetchSurvey(Number(id)));
    } else {
      navigate('/not-found');
    }
  }, [dispatch, id, navigate]);
  return (
    <div className={style['survey']}>
      <div className={style['logo']}>
        <img src={logo} alt="" />
      </div>
      {loaded && <ReactQuestion />}
      <div className={style['pagination']}>
        <Pagination pageNum={pageNum} setPageNum={setPageNum} pageCount={5} range={5} />
      </div>
    </div>
  );
};

export default Survey;
