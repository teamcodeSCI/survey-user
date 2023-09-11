import React from 'react'
import style from './simpleQuestion.module.scss'
import { AnswerType } from '@/models/survey'

const SimpleQuestion = ({ currentItem, onAnswer, idx }: { currentItem: any, idx: number, onAnswer: (questionIndex: number, answer: AnswerType) => void }) => {
  return (
    <div className={style['simpleQuestion']}>
      <p>{currentItem.question}</p>
      <div className={style['answer']}>
        {currentItem.answer.map((item: any, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="radio" name='answer' id={'answer' + idx} value={item.value} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleQuestion