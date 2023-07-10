import React from 'react';
import style from './starQuestion.module.scss';
import StarAnswer from '../StarAnswer';

const data = [
  { name: 'Lễ tân', answer: [1, 2, 3, 4, 5] },
  { name: 'Điều dưỡng', answer: [1, 2, 3, 4, 5] },
  { name: 'Bác sĩ', answer: [1, 2, 3, 4, 5] },
  { name: 'Thu ngân', answer: [1, 2, 3, 4, 5] },
  { name: 'Bảo vệ', answer: [1, 2, 3, 4, 5] },
];
const StarQuestion = () => {
  return (
    <div className={style['starQuestion']}>
      <p>2.Quý khách đánh giá về mức độ hài lòng về các bộ phận ?</p>
      <div className={style['starAnswer']}>
        {data.map((item, idx) => (
          <StarAnswer key={idx} question={item} />
        ))}
      </div>
    </div>
  );
};

export default StarQuestion;
