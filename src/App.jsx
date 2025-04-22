import React, { useState } from 'react'
import Welcome from './components/welcome'
import Assesment from './components/assesment'
import Result from './components/result'
import IeltsQuestions from './components/questions'
export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [welcome, setWelcome] = useState(true)
  const [assesment, setAssesment] = useState(false)
  const [result, setResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const startAssesment = () => {
    setAssesment(true)
    setWelcome(false)
  }
  const reset = () => {
    setResult(false)
    setWelcome(true)
    setCurrentQuestion(0)
    setAnswers([])
    setCorrectAnswers(0)
  }
  const handleAnswer = (option) => {
    if(option == IeltsQuestions[currentQuestion].answer){
      setAnswers(prev => [...prev, 1])
    }else{
      setAnswers(prev => [...prev, 0])
    }
    if(currentQuestion == IeltsQuestions.length - 1){
      setCorrectAnswers(answers.reduce((current, initial) => current + initial))
      setResult(true)  
      setAssesment(false)
    }else{
      setCurrentQuestion(prev => prev + 1)
    }
  }
  return (
    <div className='min-h-lvh w-full flex justify-center items-center *:md:w-1/2 bg-amber-100 p-5'>
        {welcome && <Welcome startAssesment={startAssesment} />}
        {assesment && <Assesment currentQuestion={currentQuestion} handleAnswer={handleAnswer} />}
        {result && <Result reset={reset} correctAnswers={correctAnswers} />}
    </div>
  )
}

