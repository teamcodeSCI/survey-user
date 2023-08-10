import React, { useState } from 'react';
import style from './numberQuestion.module.scss';
import { useAppSelector } from '@/app/hooks';
import { backgroundSelector } from '@/features/brand/brandSlice';
import { PostSurvey } from '@/models/survey';
interface NumberQuestionProps {
  currentItem: any,
  setCreateSurvey: React.Dispatch<React.SetStateAction<PostSurvey>>, createSurvey: PostSurvey
}
const NumberQuestion = ({ setCreateSurvey, createSurvey, currentItem }: NumberQuestionProps) => {
  const background = useAppSelector(backgroundSelector);
  const [answer, setAnswer] = useState(0);
  const [hover, setHover] = useState(0);
  const data: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={style['numberQuestion']}>
      <p>{currentItem.question}</p>
      <div className={style['numberAnswer']}>
        {data.map((item) => (
          <button
            style={item === (answer || hover) ? { background: background, color: '#fff' } : {}}
            onClick={() => setAnswer(item)}
            onMouseEnter={() => setHover(item)}
            onMouseLeave={() => setHover(answer)}
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
