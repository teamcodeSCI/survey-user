import React, { useState } from 'react';
import style from './numberQuestion.module.scss';
interface NumberQuestionProps {
  question: string;
}
const NumberQuestion = ({ question }: NumberQuestionProps) => {
  const [answer, setAnswer] = useState(0);
  const data: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={style['numberQuestion']}>
      <p>{question}</p>
      <div className={style['numberAnswer']}>
        {data.map((item) => (
          <button
            style={answer === item ? { background: 'rgb(14, 165, 237)', color: '#fff' } : {}}
            onClick={() => {
              setAnswer(item);
            }}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberQuestion;
