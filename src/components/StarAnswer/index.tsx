import React, { useState } from 'react';
import style from './starAnswer.module.scss';

interface StarAnswerProps {
  name: string;
  answer: any;
  rate: any; setRate: any
}
const StarAnswer = ({ name, answer, rate, setRate }: StarAnswerProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={style['starAnswer']}>
      <div className={style['title']}>{name}: </div>
      <div className={style['answer']}>
        {answer.map((star: any) => (
          <button
            key={Number(star.value)}
            className={Number(star.value) <= (hover || rating) ? style['on'] : style['off']}
            onClick={() => { setRating(Number(star.value)); setRate([...rate, Number(star.value)]) }}
            onMouseEnter={() => setHover(Number(star.value))}
            onMouseLeave={() => setHover(rating)}
          >
            <span>&#9733;</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarAnswer;
