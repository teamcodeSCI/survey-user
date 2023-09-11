import React, { useState } from 'react';
import style from './textQuestion.module.scss';
import { AnswerType } from '@/models/survey';
interface TextQuestionProps {
  currentItem: any, onAnswer: (questionIndex: number, answer: AnswerType) => void, idx: number
}
const TextQuestion = ({ currentItem, onAnswer, idx }: TextQuestionProps) => {

  const [answer, setAnswer] = useState<AnswerType>({
    id: currentItem.survey_id,
    state: 'new',
    question_id: currentItem.id,
    suggested_answer_id: 0,
    matrix_row_id: 0,
    answer_type: currentItem.answer_type,
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
    <div className={style['textQuestion']}>
      <p>{currentItem.title}</p>
      <textarea rows={1} placeholder="Nhập câu trả lời ..." value={answer.value_char_box} onChange={(e) => handleAnswer({
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
        value_char_box: e.target.value,
        value_comment: ''
      })}></textarea>
    </div>
  );
};

export default TextQuestion;
