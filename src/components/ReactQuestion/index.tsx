import React, { useState } from 'react';
import style from './reactQuestion.module.scss';
import { PUBLIC_URL } from '@/utils/const';

interface Answer {
  id: number;
  question_id: number;
  value: string;
  value_description: string;
}
interface ReactQuestionState {
  question: string;
  answers: Answer[];
}

const ReactQuestion = ({ question, answers }: ReactQuestionState) => {
  const [answer, setAnswer] = useState<number>(0);
  const newAnswers: any = [];

  answers.forEach((item: any) => {
    const newAnswer: Answer & { icon: string } = {
      ...item,
      icon: '',
    };
    switch (item.value) {
      case '1. KHÔNG HÀI LÒNG':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/angry-react.svg`;
        break;
      case '2. CHẤP NHẬN ĐƯỢC':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/accept-react.svg`;
        break;
      case '3. ĐẠT MONG ĐỢI':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/expectations-react.svg`;
        break;
      case '4. THỎA MÃN ƯỚC MUỐN':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/satisfy-react.svg`;
        break;
      case '5. TRÊN CẢ ƯỚC MUỐN':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/happy-react.svg`;
        break;
      case '6. QUÁ TUYỆT VỜI':
        newAnswer.icon = `${PUBLIC_URL}/assets/icons/perfect-react.svg`;
        break;
      default:
        break;
    }
    newAnswers.push(newAnswer);
  });

  return (
    <div className={style['react']}>
      <p>{question}</p>
      <div className={style['answer']}>
        {newAnswers.map((item: any) => (
          <button
            style={item.id === answer ? { background: '#dcecff' } : {}}
            key={item.id}
            onClick={() => setAnswer(item.id)}
          >
            <img width={40} height={40} src={item.icon} alt="" />
            <span>{item.value.slice(3).toLowerCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReactQuestion;
