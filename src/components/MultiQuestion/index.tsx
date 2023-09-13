import React, { useState } from 'react'
import style from './multiQuestion.module.scss'
import CheckboxAnswer from '../CheckboxAnswer'
import { AnswerType } from '@/models/survey';

const MultiQuestion = ({ currentItem, onAnswer, idx }: { currentItem: any, idx: number, onAnswer: (answers: AnswerType[]) => void; }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerType[]>([]);
  const [check, setCheck] = useState(false)
  const handleCheckboxChange = (option: AnswerType) => {
    const isSelected = selectedAnswers.find((item: AnswerType) =>
      item.suggested_answer_id === option.suggested_answer_id
    )
    if (Boolean(isSelected)) {
      // Remove the option from selectedAnswers if it's already selected
      setSelectedAnswers(selectedAnswers.filter((selected) => selected.suggested_answer_id !== option.suggested_answer_id));
      onAnswer(selectedAnswers.filter((selected) => selected.suggested_answer_id !== option.suggested_answer_id))
    } else {
      // Add the option to selectedAnswers if it's not selected
      setSelectedAnswers([...selectedAnswers, option]);
      onAnswer([...selectedAnswers, option])

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
          {currentItem.answer.slice(0, 4).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} currentItem={currentItem} item={item} handleCheckboxChange={handleCheckboxChange} updateAnswers={updateAnswers} check={check} setCheck={setCheck} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(4, 8).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} currentItem={currentItem} item={item} handleCheckboxChange={handleCheckboxChange} updateAnswers={updateAnswers} check={check} setCheck={setCheck} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(8, 12).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} currentItem={currentItem} item={item} handleCheckboxChange={handleCheckboxChange} updateAnswers={updateAnswers} check={check} setCheck={setCheck} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(12, 15).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} currentItem={currentItem} item={item} handleCheckboxChange={handleCheckboxChange} updateAnswers={updateAnswers} check={check} setCheck={setCheck} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MultiQuestion