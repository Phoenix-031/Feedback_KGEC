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
}: {
  question: string;
  onChange: (value: QuestionType) => void;
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
            onChange(e.target.value);
          }}
          value={optionValue}
        >
          <Space direction="vertical">
            <Radio value={QuestionType.Excellent}>Excellent</Radio>
            <Radio value={QuestionType.VeryGood}>Very Good</Radio>
            <Radio value={QuestionType.Good}>Good</Radio>
            <Radio value={QuestionType.Fair}>Fair</Radio>
            <Radio value={QuestionType.Poor}>Poor</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
}

export default Question;
