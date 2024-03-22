'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getTeacherQuestions } from '../_functions/teacher'

const Teacher = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getTeacherQuestions();
      console.log(dt)
      // setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>Teacher</div>
    
  )
}

export default Teacher