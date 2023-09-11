import React, { useEffect, useState } from 'react'
import style from './multiQuestion.module.scss'
import CheckboxAnswer from '../CheckboxAnswer'
import { AnswerType } from '@/models/survey';

const MultiQuestion = ({ currentItem, onAnswer, idx }: { currentItem: any, idx: number, onAnswer: (answers: AnswerType[]) => void; }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerType[]>([]);

  const handleCheckboxChange = (option: AnswerType) => {
    const isSelected = selectedAnswers.includes(option);

    if (isSelected) {
      // Remove the option from selectedAnswers if it's already selected
      setSelectedAnswers(selectedAnswers.filter((selected) => selected.suggested_answer_id !== option.id));
      onAnswer(selectedAnswers)
    } else {
      // Add the option to selectedAnswers if it's not selected
      setSelectedAnswers([...selectedAnswers, option]);
      onAnswer(selectedAnswers)

    }
  };

  const updateAnswers = (id: any, value: any) => {
    const updatedAnswer = [...selectedAnswers]
    const answerItem = updatedAnswer.map((item: any) => id === item.suggested_answer_id ? value : item)
    setSelectedAnswers(answerItem)
    onAnswer(answerItem)
  }
  return (
    <div className={style['multiQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        <div className={style['item']}>
          {currentItem.answer.map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} currentItem={currentItem} item={item} handleCheckboxChange={handleCheckboxChange} updateAnswers={updateAnswers} idx={idx} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MultiQuestion