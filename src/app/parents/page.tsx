'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getParentQuestions } from '../_functions/parent'
import { Card } from 'antd'
import { Question_T } from '@/types/Question'

const Parent = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getParentQuestions();
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>
      {
        questions.map((question : Question_T, index) => {
          return (
            <Card key={index}>
              <p>{question.questionText}</p>
            </Card>
          )
        })
      }
    </div>
    
  )
}

export default Parent