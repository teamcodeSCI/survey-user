import React, { ChangeEvent, useState } from 'react';
import style from './textQuestion.module.scss';
import { PostSurvey } from '@/models/survey';
interface TextQuestionProps {

  setCreateSurvey: React.Dispatch<React.SetStateAction<PostSurvey>>, createSurvey: PostSurvey, currentItem: any

}
const TextQuestion = ({ setCreateSurvey, createSurvey, currentItem }: TextQuestionProps) => {
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
