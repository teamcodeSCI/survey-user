import React, { useState } from 'react';
import style from './numberQuestion.module.scss';

import { AnswerType } from '@/models/survey';
interface NumberQuestionProps {
  currentItem: any,
  onAnswer: (answers: AnswerType[]) => void;
}
const NumberQuestion = ({ currentItem, onAnswer }: NumberQuestionProps) => {
  const color = ['#e94c36', '#e94c36', '#f59d00', '#f59d00', '#fbca43', '#fbca43', '#bbdb5b', '#bbdb5b', '#58d357', '#58d357']

  const [hover, setHover] = useState(0);
  const [answer, setAnswer] = useState<AnswerType>({

    skipped: false,
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
    onAnswer(option ? [option] : [])
  }
  return (
    <div className={style['numberQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['numberAnswer']}>
        {currentItem.answer.map((item: any, idx: number) => (
          <button
            style={{ background: color[idx], opacity: item.id === (answer.suggested_answer_id || hover) ? '1' : '0.6', border: item.id === (answer.suggested_answer_id || hover) ? '2px solid #838282' : '2px solid transparent' }}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(answer.suggested_answer_id)}
            onClick={() => handleAnswer({
              skipped: false,
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
      <div className={style['level']}>
        <span>Chắc chắn không</span>
        <p></p>
        <span>Chắc chắn có</span>
      </div>
    </div >
  );
};

export default NumberQuestion;
