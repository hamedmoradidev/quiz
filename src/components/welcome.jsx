import React from 'react'
import Logo from './images/IELTS_logo.svg'
 const welcome = ({startAssesment}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-20'>
        <h1 className='text-center text-3xl font-bold'>Welcome to IELTS 7 Band Score Assesment</h1>
        <img src={Logo} className='w-50' alt="" />
        <p className='w-2/3'>Here are 20 IELTS-style multiple-choice questions across Reading, Listening, Grammar, and Vocabulary — all designed for a Band 7 level.</p>
        <button onClick={startAssesment} className='p-5 cursor-pointer bg-slate-600 text-white font-semibold rounded-2xl hover:bg-slate-500'>Start Quiz!</button>
    </div>
  )
}
export default welcome;
