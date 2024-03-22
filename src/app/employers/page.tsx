'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getEmployerQuestions } from '../_functions/employer'

const Alumni = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getEmployerQuestions();
      console.log(dt)
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>Alumni</div>
    
  )
}

export default Alumni