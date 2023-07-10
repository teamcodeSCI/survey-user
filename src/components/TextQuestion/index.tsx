import React, { ChangeEvent, useState } from 'react';
import style from './textQuestion.module.scss';

const TextQuestion = () => {
  const [question, setQuestion] = useState('');
  const handleQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };
  return (
    <div className={style['textQuestion']}>
      <p>2. Lý do khách hàng không hài lòng?</p>
      <input type="text" placeholder="Nhập câu trả lời ..." value={question} onChange={handleQuestion} />
    </div>
  );
};

export default TextQuestion;
