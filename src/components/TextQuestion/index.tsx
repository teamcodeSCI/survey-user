import React, { ChangeEvent, useEffect } from 'react';
import style from './textQuestion.module.scss';
interface TextQuestionProps {
  currentItem: any, answer: any, setAnswer: any
}
const TextQuestion = ({ currentItem, answer, setAnswer }: TextQuestionProps) => {
  const handleAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer([e.target.value]);
  };
  useEffect(() => {
    setAnswer([])
  }, [setAnswer])
  return (
    <div className={style['textQuestion']}>
      <p>{currentItem.title}</p>
      <textarea rows={1} placeholder="Nhập câu trả lời ..." value={answer} onChange={handleAnswer}></textarea>
    </div>
  );
};

export default TextQuestion;
