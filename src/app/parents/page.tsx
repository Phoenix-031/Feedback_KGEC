'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { getParentQuestions } from '../_functions/parent'

const Parent = () => {

  const [questions, setQuestions] = useState([])
  
  useEffect(() => {

    const getdata = async() => {
      const dt = await getParentQuestions();
      console.log(dt)
      setQuestions(dt.data)
    }

    getdata();
    
  },[])
  
  return (
    <div>Parent</div>
    
  )
}

export default Parent