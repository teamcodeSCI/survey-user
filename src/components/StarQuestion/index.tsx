import React from 'react';
import style from './starQuestion.module.scss';
import StarAnswer from '../StarAnswer';

interface StarQuestionProps {
  currentItem: any, answer: any, setAnswer: any
}
const StarQuestion = ({ currentItem }: StarQuestionProps) => {
  const data: any = [];

  currentItem.row.forEach((item: any) => {
    const newData: any = { ...item, answer: '' };
    newData.answer = currentItem.answer;
    data.push(newData);
  });
  return (
    <div className={style['starQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['starAnswer']}>
        {data.map((item: any, idx: number) => (
          <StarAnswer key={idx} name={item.value} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default StarQuestion;
