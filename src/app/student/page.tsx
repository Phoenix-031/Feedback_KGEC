'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getStudentQuestions } from '../_functions/student'

const Student = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getStudentQuestions();
      console.log(dt)
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>Student</div>
    
  )
}

export default Student