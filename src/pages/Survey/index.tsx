import { fetchSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector } from '@/features/survey/surveySlice';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Survey = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loaded = useAppSelector(loadedSurveySelector);

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
    <div className="survey">
      {loaded && (
        <div className="main">
          <div className=""></div>
        </div>
      )}
    </div>
  );
};

export default Survey;
