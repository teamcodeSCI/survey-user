import React, { ChangeEvent, useState } from 'react';
import style from './textQuestion.module.scss';
interface TextQuestionProps {
  currentItem: any, answer: any, setAnswer: any
}
const TextQuestion = ({ currentItem }: TextQuestionProps) => {
  const [answer, setAnswer] = useState('');
  const handleAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };
  return (
    <div className={style['textQuestion']}>
      <p>{currentItem.title}</p>
      <textarea rows={1} placeholder="Nhập câu trả lời ..." value={answer} onChange={handleAnswer}></textarea>
    </div>
  );
};

export default TextQuestion;
