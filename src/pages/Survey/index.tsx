import { fetchSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector, questionListSelector } from '@/features/survey/surveySlice';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './survey.module.scss';
import ReactQuestion from '@/components/ReactQuestion';
import Pagination from '@/components/Pagination';
import { logoSelector } from '@/features/brand/brandSlice';
import TextQuestion from '@/components/TextQuestion';
import NumberQuestion from '@/components/NumberQuestion';
// import StarQuestion from '@/components/StarQuestion';
import Start from '@/components/Start';

const Survey = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [isStart, setIsStart] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loaded = useAppSelector(loadedSurveySelector);
  const questionList = useAppSelector(questionListSelector);

  const itemPerPage = 1;
  const indexOfLastItem = pageNum * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems: any = loaded ? questionList.slice(indexOfFirstItem, indexOfLastItem) : [];

  const pageCount = loaded ? Math.ceil(questionList.length / itemPerPage) : 0;
  const logo = useAppSelector(logoSelector);
  const [searchParams] = useSearchParams();
  const brandCode = searchParams.get('brand_code');
  const id = searchParams.get('id');
  const handleIsStart: React.MouseEventHandler = () => {
    setIsStart(!isStart);
  };
  const sendResult = () => {
    navigate(`/ending?brand_code=${brandCode}`);
  };
  let questionType: any = '';
  if (loaded) {
    switch (currentItems[0].question_type) {
      case 'simple_choice':
        if (currentItems[0].col_nb === '10') {
          questionType = <NumberQuestion question={currentItems[0].title} />;
        } else {
          if (currentItems[0].icon)
            questionType = <ReactQuestion question={currentItems[0].title} answers={currentItems[0].answer} />;
        }
        break;
      case 'free_text':
        questionType = <TextQuestion question={currentItems[0].title} />;
        break;
      case 'textbox':
        questionType = <TextQuestion question={currentItems[0].title} />;
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    if (id) {
      dispatch(fetchSurvey(Number(id)));
    } else {
      navigate('/not-found');
    }
  }, [dispatch, id, navigate]);
  return (
    <>
      {isStart ? (
        <div className={style['survey']}>
          <div className={style['logo']}>
            <img src={logo} alt="" />
          </div>
          {questionType}
          <div className={style['pagination']}>
            <Pagination
              pageNum={pageNum}
              setPageNum={setPageNum}
              pageCount={pageCount}
              range={pageCount}
              sendResult={sendResult}
            />
          </div>
        </div>
      ) : (
        <div>
          <Start handleIsStart={handleIsStart} />
        </div>
      )}
    </>
  );
};

export default Survey;
