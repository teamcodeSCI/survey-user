import React, { useEffect } from 'react'
import style from './multiQuestion.module.scss'
import CheckboxAnswer from '../CheckboxAnswer'

const MultiQuestion = ({ currentItem, answer, setAnswer }: { currentItem: any, answer: any, setAnswer: any }) => {
  console.log("answer: ", answer);


  useEffect(() => {
    setAnswer([])
  }, [setAnswer])
  return (
    <div className={style['multiQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        <div className={style['item']}>
          {currentItem.answer.slice(0, 7).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} item={item} idx={idx} answerArr={answer} handleAnswer={setAnswer} />
          )}
        </div>
        <div className={style['item']}>
          {currentItem.answer.slice(8, 15).map((item: any, idx: number) =>
            <CheckboxAnswer key={item.id} item={item} idx={idx} answerArr={answer} handleAnswer={setAnswer} />
          )}
        </div>

      </div>
    </div>
  )
}

export default MultiQuestion