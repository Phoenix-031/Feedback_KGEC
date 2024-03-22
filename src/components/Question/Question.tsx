'use client';
import React, { useState } from 'react';

import { Radio, Space, Typography } from 'antd';

import styles from './styles.module.scss';

const { Text } = Typography;
function Question() {
  const [optionValue, setOptionValue] = useState(1);
  return (
    <div className={styles.question__container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum
        quam quis numquam nesciunt unde est pariatur, qui minima eaque?
      </Text>
      <div
        style={{
          marginTop: '1rem',
        }}
      >
        <Radio.Group
          onChange={(e) => setOptionValue(e.target.value)}
          value={optionValue}
        >
          <Space direction="vertical">
            <Radio value={1}>Excellent</Radio>
            <Radio value={2}>Very Good</Radio>
            <Radio value={3}>Good</Radio>
            <Radio value={4}>Fair</Radio>
            <Radio value={5}>Poor</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );
}

export default Question;
