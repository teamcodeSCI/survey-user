import { fetchSurvey, postSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector, loadingSurveySelector, questionListSelector } from '@/features/survey/surveySlice';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './home.module.scss';
import ReactQuestion from '@/components/ReactQuestion';

import { logoSelector } from '@/features/brand/brandSlice';
import TextQuestion from '@/components/TextQuestion';
import NumberQuestion from '@/components/NumberQuestion';
import Start from '@/components/Start';
import StarQuestion from '@/components/StarQuestion';
import Loading from '@/components/Loading';
import MultiQuestion from '@/components/MultiQuestion';
import SimpleQuestion from '@/components/SimpleQuestion';
import { loadedPostSurveySelector } from '@/features/survey/postSurveySlice';



const Home = () => {

    const [isStart, setIsStart] = useState<boolean>(false);
    const [error, setError] = useState('')
    const [answer, setAnswer] = useState([])

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loaded = useAppSelector(loadedSurveySelector);
    const loadedPostSurvey = useAppSelector(loadedPostSurveySelector)
    const loading = useAppSelector(loadingSurveySelector);
    const questionList = useAppSelector(questionListSelector);

    const logo = useAppSelector(logoSelector);
    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');
    const handleIsStart: React.MouseEventHandler = () => {
        questionList.forEach((item: any) => {
            dispatch(postSurvey({
                id: item.survey_id,
                state: 'new',
                question_id: item.id,
                suggested_answer_id: 0,
                matrix_row_id: 0,
                answer_type: '',
                value_datetime: '',
                value_date: '',
                value_text_box: '',
                value_numberical_box: '',
                value_char_box: ''
            }))
        })
        setIsStart(true);
    };


    const questionType: any = [];

    if (loaded) {
        questionList.forEach((item: any) => {
            switch (item.question_type) {
                case 'simple_choice':
                    if (item.col_nb === '10') {
                        questionType.push(<NumberQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />);
                    } else {
                        if (item.icon) questionType.push(<ReactQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />);
                        else questionType.push(<SimpleQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />)
                    }
                    break;
                case 'free_text':
                    questionType.push(<TextQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />)
                    break;
                case 'textbox':
                    questionType.push(<TextQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />);
                    break;
                case 'matrix':
                    questionType.push(<StarQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />);
                    break;
                case 'multiple_choice':
                    questionType.push(<MultiQuestion currentItem={item} answer={answer} setAnswer={setAnswer} />)
                    break;
                default:
                    break;
            }
        })

    }
    useEffect(() => {
        if (id) {
            dispatch(fetchSurvey(Number(id)));
            // if (currentItems.length === 0) {
            //   navigate('/not-found');
            // }
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
                    <div className={style['main']}>
                        {!loading ? (loadedPostSurvey && loaded) && questionType : <Loading />}
                        {error !== '' && <p className={style['error']}>{error}</p>}
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

export default Home;
