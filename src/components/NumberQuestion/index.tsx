import React, { useState } from 'react';
import style from './numberQuestion.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector } from '@/features/brand/brandSlice';
interface NumberQuestionProps {
  currentItem: any,
  answer: any, setAnswer: any
}
const NumberQuestion = ({ currentItem, answer, setAnswer }: NumberQuestionProps) => {
  const background = useAppSelector(backgroundSelector);
  const [hover, setHover] = useState(0);
  return (
    <div className={style['numberQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['numberAnswer']}>
        {currentItem.answer.map((item: any) => (
          <button
            style={item.id === (answer[0] || hover) ? { background: background, color: '#fff' } : {}}
            onClick={() => {
              setAnswer([])
              setAnswer([item.id])
            }}
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(answer[0])}
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
