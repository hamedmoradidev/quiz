import React from 'react'

export const Result = ({reset, correctAnswers}) => {
  return (
    <div className='h-2/3 flex flex-wrap justify-center items-center gap-10 w-full'>
        <h1 className='text-center text-3xl font-bold'>Congratulations...</h1>
        <h2 className='text-3xl font-semibold text-center w-full'>You answered {correctAnswers} out of 20 questions correctly</h2>
        <h2 className='text-3xl font-semibold text-center w-full'>Rating: % {parseInt(correctAnswers/20 * 100)}</h2>
        <button onClick={reset} className='p-5 cursor-pointer bg-slate-600 text-white font-semibold rounded-2xl hover:bg-slate-500'>Reset Quiz!</button>
    </div>
  )
}
export default Result;
