import React, { useState } from 'react';
import style from './numberQuestion.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector } from '@/features/brand/brandSlice';
import { AnswerType } from '@/models/survey';
interface NumberQuestionProps {
  currentItem: any,
  idx: number,
  onAnswer: (questionIndex: number, answer: AnswerType) => void
}
const NumberQuestion = ({ currentItem, idx, onAnswer }: NumberQuestionProps) => {

  const background = useAppSelector(backgroundSelector);
  const [hover, setHover] = useState(0);
  const [answer, setAnswer] = useState<AnswerType>({
    id: currentItem.survey_id,
    state: 'new',
    question_id: currentItem.id,
    suggested_answer_id: 0,
    matrix_row_id: 0,
    answer_type: currentItem.question_type,
    value_datetime: '',
    value_date: '',
    value_text_box: '',
    value_numberical_box: '',
    value_char_box: '',
    value_comment: ''
  })

  const handleAnswer = (option: AnswerType) => {
    setAnswer(option)
    onAnswer(idx, option)
  }
  return (
    <div className={style['numberQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['numberAnswer']}>
        {currentItem.answer.map((item: any) => (
          <button
            style={item.id === (answer.suggested_answer_id || hover) ? { background: background, color: '#fff' } : {}}

            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(answer.suggested_answer_id)}
            onClick={() => handleAnswer({
              id: currentItem.survey_id,
              state: 'new',
              question_id: currentItem.id,
              suggested_answer_id: item.id,
              matrix_row_id: 0,
              answer_type: currentItem.question_type,
              value_datetime: '',
              value_date: '',
              value_text_box: '',
              value_numberical_box: '',
              value_char_box: '',
              value_comment: ''
            })}
            key={item.id}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div >
  );
};

export default NumberQuestion;
