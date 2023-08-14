import React, { useEffect } from 'react'
import style from './multiQuestion.module.scss'

const MultiQuestion = ({ currentItem, answer, setAnswer }: { currentItem: any, answer: any, setAnswer: any }) => {

  const handleAnswer = (e: any) => {
    setAnswer([...answer, e.target.value])
  }
  useEffect(() => {
    setAnswer([])
  }, [setAnswer])
  return (
    <div className={style['multiQuestion']}>
      <p>{currentItem.title}</p>
      <div className={style['answer']}>
        {currentItem.answer.map((item: any, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="checkbox" id={'answer' + idx} value={item.value} onChange={handleAnswer} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultiQuestion