import React from 'react';
import style from './starQuestion.module.scss';
import StarAnswer from '../StarAnswer';

interface StarQuestionProps {
  question: string;
  answer: any[];
  row: any[];
}
const StarQuestion = ({ question, answer, row }: StarQuestionProps) => {
  const data: any = [];

  row.forEach((item) => {
    const newData: any = { ...item, answer: '' };
    newData.answer = answer;
    data.push(newData);
  });
  return (
    <div className={style['starQuestion']}>
      <p>{question}</p>
      <div className={style['starAnswer']}>
        {data.map((item: any, idx: number) => (
          <StarAnswer key={idx} name={item.value} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default StarQuestion;
