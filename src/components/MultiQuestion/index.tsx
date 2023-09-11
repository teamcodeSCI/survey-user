import React, { useEffect } from 'react'
import style from './multiQuestion.module.scss'
import CheckboxAnswer from '../CheckboxAnswer'

const MultiQuestion = ({ currentItem, onAnswer, idx }: { currentItem: any, idx: number, onAnswer: (questionIndex: number, answer: never) => void }) => {

  return (
    <div className={style['multiQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        <div className={style['item']}>
          {currentItem.answer.slice(0, 4).map((item: any) =>
            <CheckboxAnswer key={item.id} item={item} />
          )}
        </div>

        <div className={style['item']}>
          {currentItem.answer.slice(4, 8).map((item: any) =>
            <CheckboxAnswer key={item.id} item={item} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(8, 12).map((item: any) =>
            <CheckboxAnswer key={item.id} item={item} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(12, 15).map((item: any) =>
            <CheckboxAnswer key={item.id} item={item} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MultiQuestion