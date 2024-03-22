'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getStudentQuestions } from '../_functions/student'
import { Card } from 'antd'
import { Question_T } from '@/types/Question'

const Student = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getStudentQuestions();
      // console.log(dt)
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div className={styles.main__container}>
      {
        questions.map((question : Question_T, index) => {
          return (
            <Card key={index} style={{
              width: '100%',
            }}>
              <p>{question.questionText}</p>
            </Card>
          )
        })
      }
    </div>
    
  )
}

export default Student