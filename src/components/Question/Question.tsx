'use client';
import React, { useState } from 'react';

import { Radio, Space, Typography } from 'antd';

import styles from './styles.module.scss';

enum QuestionType {
  Excellent = 'Excellent',
  VeryGood = 'Very Good',
  Good = 'Good',
  Fair = 'Fair',
  Poor = 'Poor',
}
const { Text } = Typography;
function Question({
  question,
  onChange,
  defaultValue
}: {
  question: string;
  onChange?: (value: QuestionType) => void;
  defaultValue?: string;
}) {
  const [optionValue, setOptionValue] = useState('');

  return (
    <div className={styles.question__container}>
      <Text>{question}</Text>
      <div
        style={{
          marginTop: '1rem',
        }}
      >
        <Radio.Group
          onChange={(e) => {
            setOptionValue(e.target.value);
            onChange && onChange(e.target.value);
          }}
          value={optionValue}
        >
          <Space direction="vertical">
            <Radio disabled={QuestionType.Excellent !== defaultValue} value={QuestionType.Excellent}>Excellent</Radio>
            <Radio disabled={QuestionType.VeryGood !== defaultValue} value={QuestionType.VeryGood}>Very Good</Radio>
            <Radio disabled={QuestionType.Good !== defaultValue} value={QuestionType.Good}>Good</Radio>
            <Radio disabled={QuestionType.Fair !== defaultValue} value={QuestionType.Fair}>Fair</Radio>
            <Radio disabled={QuestionType.Poor !== defaultValue} value={QuestionType.Poor}>Poor</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
}

export default Question;
