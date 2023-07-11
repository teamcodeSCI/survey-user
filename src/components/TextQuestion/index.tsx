import React, { ChangeEvent, useState } from 'react';
import style from './textQuestion.module.scss';
interface TextQuestionProps {
  question: string;
}
const TextQuestion = ({ question }: TextQuestionProps) => {
  const [answer, setAnswer] = useState('');
  const handleAnswer = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };
  return (
    <div className={style['textQuestion']}>
      <p>{question}</p>
      <textarea rows={1} placeholder="Nhập câu trả lời ..." value={answer} onChange={handleAnswer}></textarea>
    </div>
  );
};

export default TextQuestion;
