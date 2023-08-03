import React from 'react'
import style from './multiQuestion.module.scss'

const MultiQuestion = ({ question, answer }: { question: string, answer: any[] }) => {
  return (
    <div className={style['multiQuestion']}>
      <p>{question}</p>
      <div className={style['answer']}>
        {answer.map((item, idx: number) =>
          <div key={item.value} className={style['item']}>
            <input type="checkbox" id={'answer' + idx} value={item.value} />
            <label htmlFor={'answer' + idx}>{item.value}</label>
          </div>
        )}
      </div>
    </div>
  )
}

export default MultiQuestion