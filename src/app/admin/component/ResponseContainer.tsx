"use client";

import { useGetQuestionQuery } from '@/app/_functions/quesiton';
import mongoose from 'mongoose';
import React, { useEffect } from 'react'
import { useState } from 'react';

import styles from './container.module.scss';

interface ResponseCreatorProps {
    answer : string;
    questionId : string;
}

const ResponseContainer = ({questionId, answer}:ResponseCreatorProps) => {

    const questionQuery = useGetQuestionQuery(questionId);

  return (
    
        questionQuery.isLoading ? "Loading..." : (
            <div className={styles.response__container}
            >
                <div>
                    <p>Question :</p>
                    <p>{questionQuery.data.questionText}</p>
                </div>
                <div>
                    <p>Answer :</p>
                    <p>{answer}</p>
                </div>
            </div>
        )
  )
}

export default ResponseContainer