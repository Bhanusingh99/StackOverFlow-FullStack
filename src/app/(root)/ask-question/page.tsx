import React from 'react'
import QuestionForm from '../../../../components/Forms/QuestionForm'

const AskQuestion = () => {
  return (
    <div>
      <h1 className='h1-bold text-white'>Ask Question</h1>
      <div className='mt-9'>
        <QuestionForm/>
      </div>
    </div>
  )
}

export default AskQuestion