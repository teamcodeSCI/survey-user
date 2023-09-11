import { fetchSurvey, postSurvey } from '@/apis/survey';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { loadedSurveySelector, loadingSurveySelector, questionListSelector } from '@/features/survey/surveySlice';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import style from './home.module.scss';
import ReactQuestion from '@/components/ReactQuestion';

import { backgroundSelector, logoSelector } from '@/features/brand/brandSlice';
import TextQuestion from '@/components/TextQuestion';
import NumberQuestion from '@/components/NumberQuestion';
import Start from '@/components/Start';

import Loading from '@/components/Loading';
import MultiQuestion from '@/components/MultiQuestion';
import SimpleQuestion from '@/components/SimpleQuestion';
import { loadedPostSurveySelector } from '@/features/survey/postSurveySlice';
import { AnswerType } from '@/models/survey';



const Home = () => {

    const [isStart, setIsStart] = useState<boolean>(false);
    const [error, setError] = useState('')
    const [answers, setAnswers] = useState<AnswerType[]>([])
    console.log("answers: ", answers);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loaded = useAppSelector(loadedSurveySelector);
    const loadedPostSurvey = useAppSelector(loadedPostSurveySelector)
    const loading = useAppSelector(loadingSurveySelector);
    const questionList = useAppSelector(questionListSelector);

    const logo = useAppSelector(logoSelector);
    const background = useAppSelector(backgroundSelector);
    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');

    const handleIsStart: React.MouseEventHandler = () => {
        questionList.forEach((item: any) => {
            if (item.question_type === 'multiple_choice') {
                item.answer.forEach((e: any) => {
                    // dispatch(postSurvey({
                    //     id: item.survey_id,
                    //     state: 'new',
                    //     question_id: item.id,
                    //     suggested_answer_id: e.id,
                    //     matrix_row_id: 0,
                    //     answer_type: '',
                    //     value_datetime: '',
                    //     value_date: '',
                    //     value_text_box: '',
                    //     value_numberical_box: '',
                    //     value_char_box: '',
                    //     value_comment: ''
                    // }))
                })
            } else {
                // dispatch(postSurvey({
                //     id: item.survey_id,
                //     state: 'new',
                //     question_id: item.id,
                //     suggested_answer_id: 0,
                //     matrix_row_id: 0,
                //     answer_type: '',
                //     value_datetime: '',
                //     value_date: '',
                //     value_text_box: '',
                //     value_numberical_box: '',
                //     value_char_box: ''
                // }))
            }
        })
        setIsStart(true);

    };
    const handleAnswer = (questionIndex: number, answer: AnswerType) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = answer;
        setAnswers(updatedAnswers);
    };

    const questionType: any = [];


    if (loaded) {
        questionList.forEach((item: any, idx: number) => {
            switch (item.question_type) {
                case 'simple_choice':
                    if (item.col_nb === '10') {
                        questionType.push(<NumberQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />);
                    } else {
                        if (item.icon) questionType.push(<ReactQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />);
                        else questionType.push(<SimpleQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />)
                    }
                    break;
                case 'free_text':
                    questionType.push(<TextQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />)
                    break;
                case 'textbox':
                    questionType.push(<TextQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />);
                    break;
                case 'multiple_choice':
                    questionType.push(<MultiQuestion currentItem={item} onAnswer={handleAnswer} idx={idx} />)
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
                        {!loading ? (loaded) && questionType.map((item: any, idx: number) => <div key={idx}>{item}</div>) : <Loading />}
                        {error !== '' && <p className={style['error']}>{error}</p>}
                    </div>
                    <div className={style['sendBtn']}>
                        <button style={{ background: background }}>Gửi kết quả</button>
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
