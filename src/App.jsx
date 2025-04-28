import React, { useState } from 'react'
import Welcome from './components/welcome'
import Assesment from './components/assesment'
import Result from './components/result'
import IeltsQuestions from './components/questions'
import ContactMe from './components/ContactMe'
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
      const isCorrect = option === IeltsQuestions[currentQuestion].answer
      const updatedAnswer = [...answers, isCorrect ? 1 : 0]
      const totalCorrect = updatedAnswer.reduce((sum, val) => sum + val)
      setCorrectAnswers(totalCorrect)
      setResult(true)  
      setAssesment(false)
    }else{
      setCurrentQuestion(prev => prev + 1)
    }
  }
  return (
    <div className='min-h-lvh flex flex-wrap justify-center items-center bg-amber-100 px-5 lg:px-10'>
        {welcome && <Welcome startAssesment={startAssesment} />}
        {assesment && <Assesment currentQuestion={currentQuestion} handleAnswer={handleAnswer} />}
        {result && <Result reset={reset} correctAnswers={correctAnswers} />}
        <ContactMe />
    </div>
  )
}

