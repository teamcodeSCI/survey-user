import React, { useState } from 'react';
import style from './reactQuestion.module.scss';
import { reactIcon } from '@/utils/const';

const ReactQuestion = () => {
  const [answer, setAnswer] = useState<number>(0);
  return (
    <div className={style['react']}>
      <p>1. Quý khách có trải nghiệm dịch vụ như thế nào?</p>
      <div className={style['answer']}>
        {reactIcon.map((item) => (
          <button
            style={item.value === answer ? { background: '#dcecff' } : {}}
            key={item.value}
            onClick={() => setAnswer(item.value)}
          >
            <img width={40} height={40} src={item.icon} alt="" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReactQuestion;
