import React, { useState } from 'react';
import style from './textQuestion.module.scss';
import { AnswerType } from '@/models/survey';
interface TextQuestionProps {
  currentItem: any, onAnswer: (answers: AnswerType[]) => void, idx: number
}
const TextQuestion = ({ currentItem, onAnswer, idx }: TextQuestionProps) => {

  const [answer, setAnswer] = useState<AnswerType>({

    skipped: false,
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
    onAnswer(option ? [option] : [])
  }

  return (
    <div className={style['textQuestion']}>
      <p>{currentItem.title}</p>
      <textarea rows={1} placeholder="Nhập câu trả lời ..." value={answer.value_text_box} onChange={(e) => handleAnswer({
        skipped: false,
        question_id: currentItem.id,
        suggested_answer_id: 0,
        matrix_row_id: 0,
        answer_type: currentItem.question_type,
        value_datetime: '',
        value_date: '',
        value_text_box: e.target.value.replace(/[<>[\]+'"]/g, ''),
        value_numberical_box: '',
        value_char_box: '',
        value_comment: ''
      })}></textarea>
    </div>
  );
};

export default TextQuestion;
