'use client';

import React, { useEffect, useState } from 'react';

import { Button, Card } from 'antd';

import { Question_T } from '@/types/Question';

import { getEmployerQuestions } from '../../_functions/employer';
import styles from './style.module.scss';

const Alumni = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const dt = await getEmployerQuestions();
      setQuestions(dt.data);
    };

    getdata();
  }, []);

  return (
    <div className={styles.main__container}>
      {questions.map((question: Question_T, index) => {
        return (
          <Card
            key={index}
            style={{
              width: '100%',
            }}
          >
            <p>{question.questionText}</p>
          </Card>
        );
      })}
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Button type="default">Submit</Button>
      </div>
    </div>
  );
};

export default Alumni;
