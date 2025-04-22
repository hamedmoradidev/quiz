import React from 'react'
import IeltsQuestions from './questions'
export const Assesment = ({currentQuestion, handleAnswer}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-20'>
        <h2 className='text-3xl font-semibold text-left w-full'>Question Number {currentQuestion+1}</h2>
        <p className='text-2xl w-full text-justify'>{IeltsQuestions[currentQuestion].question}</p>
        <ul className='flex flex-col gap-5 w-full'>
            {IeltsQuestions[currentQuestion].options.map((option, index) => (
                <li onClick={() => handleAnswer(option)} key={index} className='p-5 cursor-pointer bg-slate-600 text-white font-semibold rounded-2xl hover:bg-slate-500'>{option}</li>
            ))}
        </ul>
    </div>
  )
}
export default Assesment;
