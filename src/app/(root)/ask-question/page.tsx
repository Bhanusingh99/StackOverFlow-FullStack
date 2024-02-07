'use server'
import React from 'react'
import QuestionForm from '../../../../components/Forms/QuestionForm'
import { getUserBytId } from '../../../../lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AskQuestion = async () => {
  const userId = 'CL123456';
  if(!userId){
    redirect('/sign-in')
  }
  const mongoUser = await getUserBytId({ userId })
  console.log("user",mongoUser)
  return (
    <div>
      <h1 className='h1-bold text-white'>Ask Question</h1>
      <div className='mt-9'>
        <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)}/>
      </div>
    </div>
  )
}

export default AskQuestion