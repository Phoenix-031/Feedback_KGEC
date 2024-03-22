'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getAlumniQuestions } from '../_functions/alumni'
import { Card } from 'antd'
import { Question_T } from '@/types/Question'
import Typography from 'antd'

import {Button} from 'antd'

// const {p} = Typography

const Alumni = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getAlumniQuestions();
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>

      <div>
        <div>
          <p>Knowledge</p>
        </div>

        <div>
              {
                questions.filter((question : Question_T) => question.section === 'Knowledge').map((question : Question_T, index) => {
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
        
      </div>

      <div>
        <div>
          <p>Communication Skills</p>
        </div>

        <div>
              {
                questions.filter((question : Question_T) => question.section === 'Communication Skills').map((question : Question_T, index) => {
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
        
      </div>

      <div>
        <div>
          <p>Interpersonal Skills</p>
        </div>

        <div>
              {
                questions.filter((question : Question_T) => question.section === 'Interpersonal Skills').map((question : Question_T, index) => {
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
        
      </div>

      <div>
        <div>
          <p>Management/ leadership Skills</p>
        </div>

        <div>
              {
                questions.filter((question : Question_T) => question.section === 'Management/ leadership Skills').map((question : Question_T, index) => {
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
        
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <Button type="default">Submit</Button>
      </div>
      
    </div>
    
  )
}

export default Alumni