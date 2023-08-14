import { fetchSurvey, postSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector, loadingSurveySelector, questionListSelector } from '@/features/survey/surveySlice';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './survey.module.scss';
import ReactQuestion from '@/components/ReactQuestion';
import Pagination from '@/components/Pagination';
import { logoSelector } from '@/features/brand/brandSlice';
import TextQuestion from '@/components/TextQuestion';
import NumberQuestion from '@/components/NumberQuestion';
import Start from '@/components/Start';
import StarQuestion from '@/components/StarQuestion';
import Loading from '@/components/Loading';
import MultiQuestion from '@/components/MultiQuestion';
import SimpleQuestion from '@/components/SimpleQuestion';
import { loadedPostSurveySelector } from '@/features/survey/postSurveySlice';



const Survey = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [isStart, setIsStart] = useState<boolean>(false);

  const [answer, setAnswer] = useState([])

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loaded = useAppSelector(loadedSurveySelector);
  const loadedPostSurvey = useAppSelector(loadedPostSurveySelector)
  const loading = useAppSelector(loadingSurveySelector);
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
    // questionList.forEach((item: any) => dispatch(postSurvey({
    //   id: item.survey_id,
    //   state: 'new',
    //   question_id: item.id,
    //   suggested_answer_id: 0,
    //   matrix_row_id: 0,
    //   answer_type: '',
    //   value_datetime: '',
    //   value_date: '',
    //   value_text_box: '',
    //   value_numberical_box: '',
    //   value_char_box: ''
    // })))
    setIsStart(true);
  };


  const sendResult = () => {
    if (loaded) {
      switch (currentItems[0].question_type) {
        case 'simple_choice':
          dispatch(postSurvey({
            id: currentItems[0].survey_id,
            state: 'skip',
            question_id: currentItems[0].id,
            suggested_answer_id: answer[0],
            matrix_row_id: 0,
            answer_type: currentItems[0].question_type,
            value_datetime: '',
            value_date: '',
            value_text_box: '',
            value_numberical_box: '',
            value_char_box: ''
          }))
          break;
        case 'free_text':
          dispatch(postSurvey({
            id: currentItems[0].survey_id,
            state: 'skip',
            question_id: currentItems[0].id,
            suggested_answer_id: 0,
            matrix_row_id: 0,
            answer_type: currentItems[0].question_type,
            value_datetime: '',
            value_date: '',
            value_text_box: answer[0],
            value_numberical_box: '',
            value_char_box: ''
          }))
          break;
        case 'textbox':
          dispatch(postSurvey({
            id: currentItems[0].survey_id,
            state: 'skip',
            question_id: currentItems[0].id,
            suggested_answer_id: 0,
            matrix_row_id: 0,
            answer_type: currentItems[0].question_type,
            value_datetime: '',
            value_date: '',
            value_text_box: answer[0],
            value_numberical_box: '',
            value_char_box: ''
          }))
          break;
        case 'matrix':
          currentItems[0].row.forEach((item: any, idx: number) => {
            dispatch(postSurvey({
              id: currentItems[0].survey_id,
              state: 'skip',
              question_id: currentItems[0].id,
              suggested_answer_id: answer[idx],
              matrix_row_id: item.id,
              answer_type: currentItems[0].question_type,
              value_datetime: '',
              value_date: '',
              value_text_box: '',
              value_numberical_box: '',
              value_char_box: ''
            }))
          })
          break;
        case 'multiple_choice':
          answer.forEach(item => dispatch(postSurvey({
            id: currentItems[0].survey_id,
            state: 'skip',
            question_id: currentItems[0].id,
            suggested_answer_id: item,
            matrix_row_id: 0,
            answer_type: currentItems[0].question_type,
            value_datetime: '',
            value_date: '',
            value_text_box: '',
            value_numberical_box: '',
            value_char_box: ''
          })))
          break;
        default:
          break;
      }
    }
    setAnswer([])
    // navigate(`/ending?brand_code=${brandCode}`);
  };
  let questionType: any = '';
  if (loaded) {
    switch (currentItems[0].question_type) {
      case 'simple_choice':
        if (currentItems[0].col_nb === '10') {
          questionType = <NumberQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />;
        } else {
          if (currentItems[0].icon) questionType = <ReactQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />;
          else questionType = <SimpleQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />
        }
        break;
      case 'free_text':
        questionType = <TextQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />;
        break;
      case 'textbox':
        questionType = <TextQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />;
        break;
      case 'matrix':
        questionType = <StarQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />;
        break;
      case 'multiple_choice':
        questionType = <MultiQuestion currentItem={currentItems[0]} answer={answer} setAnswer={setAnswer} />
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
          {!loading ? loaded && questionType : <Loading />}
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
