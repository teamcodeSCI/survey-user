import React, { useState } from 'react';
import style from './starAnswer.module.scss';

interface StarAnswerProps {
  question: { name: string; answer: number[] };
}
const StarAnswer = ({ question }: StarAnswerProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={style['starAnswer']}>
      <div className={style['title']}>{question.name}</div>
      <div className={style['answer']}>
        {question.answer.map((star) => (
          <button
            key={star}
            className={star <= (hover || rating) ? style['on'] : style['off']}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
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
