import React, { useState } from 'react';
import style from './reactQuestion.module.scss';
import { PUBLIC_URL } from '@/utils/const';
import { AnswerType } from '@/models/survey';

interface Answer {
  id: number;
  question_id: number;
  value: string;
  value_description: string;
}
interface ReactQuestionState {
  currentItem: any, idx: number,
  onAnswer: (questionIndex: number, answer: AnswerType) => void
}

const ReactQuestion = ({ currentItem, idx, onAnswer }: ReactQuestionState) => {
  const [answer, setAnswer] = useState<AnswerType>({
    id: currentItem.survey_id,
    state: 'new',
    question_id: currentItem.id,
    suggested_answer_id: 0,
    matrix_row_id: 0,
    answer_type: currentItem.question_type,
    value_datetime: '',
    value_date: '',
    value_text_box: '',
    value_numberical_box: '',
    value_char_box: '',
    value_comment: ''
  })
  const handleAnswer = (option: AnswerType) => {
    setAnswer(option)

    onAnswer(idx, option)
  }
  const newAnswers: any = [];
  currentItem.answer.forEach((item: any) => {
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
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        {newAnswers.map((item: any) => (
          <button
            style={item.id === answer.suggested_answer_id ? { background: '#dcecff' } : {}}
            key={item.id}
            onClick={() => handleAnswer({
              id: currentItem.survey_id,
              state: 'new',
              question_id: currentItem.id,
              suggested_answer_id: item.id,
              matrix_row_id: 0,
              answer_type: currentItem.question_type,
              value_datetime: '',
              value_date: '',
              value_text_box: '',
              value_numberical_box: '',
              value_char_box: '',
              value_comment: ''
            })}
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
