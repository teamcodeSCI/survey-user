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
  const data: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={style['numberQuestion']}>
      <p>{currentItem.question}</p>
      <div className={style['numberAnswer']}>
        {data.map((item) => (
          <button
            style={item === (answer || hover) ? { background: background, color: '#fff' } : {}}
            onClick={() => {
              setAnswer([])
              setAnswer([item])
            }}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(answer)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div >
  );
};

export default NumberQuestion;
