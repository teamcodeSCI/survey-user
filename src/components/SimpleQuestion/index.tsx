import React from 'react'
import style from './simpleQuestion.module.scss'

const SimpleQuestion = ({ currentItem, answer, setAnswer }: { currentItem: any, answer: any, setAnswer: any }) => {

  const handleAnswer = (e: any) => { setAnswer([]); setAnswer([e.target.value]); }
  return (
    <div className={style['simpleQuestion']}>
      <p>{currentItem.question}</p>
      <div className={style['answer']}>
        {currentItem.answer.map((item: any, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="radio" name='answer' id={'answer' + idx} value={item.value} onChange={handleAnswer} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleQuestion