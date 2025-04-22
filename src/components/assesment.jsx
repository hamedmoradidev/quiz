import React from 'react'
import IeltsQuestions from './questions'
export const Assesment = ({currentQuestion, handleAnswer}) => {
  return (
    <div className='flex flex-wrap justify-center items-baseline w-full h-[600px]'>
        <h2 className='text-3xl font-semibold text-left w-full'>Question Number {currentQuestion+1}</h2>
        <p className='text-2xl w-full flex items-center text-justify'>{IeltsQuestions[currentQuestion].question}</p>
        <ul className='flex flex-wrap justify-center items-center w-full gap-3'>
            {IeltsQuestions[currentQuestion].options.map((option, index) => (
                <li onClick={() => handleAnswer(option)} key={index} className='p-4 cursor-pointer bg-slate-600 text-white font-semibold rounded-2xl hover:bg-slate-500 text-justify w-full'>{option}</li>
            ))}
        </ul>
    </div>
  )
}
export default Assesment;
