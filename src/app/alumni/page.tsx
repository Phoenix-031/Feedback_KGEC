'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getAlumniQuestions } from '../_functions/alumni'

const Alumni = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getAlumniQuestions();
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