'use client';

import React, { useEffect, useState } from 'react';

import { Button, Typography } from 'antd';

import { getTeacherQuestions, postTeacherResponse } from '@/app/_functions/teacher';
import LabelInput from '@/components/LabelInput/LabelInput';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

import styles from './style.module.scss';

const { Text, Title } = Typography;

const Teacher = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * response states
   */
  const [branch, setBranch] = useState('');
  const [accademicYear, setAccademicYear] = useState('');
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const dt = await getTeacherQuestions();
      setQuestions(dt.data);
      setLoading(false);
    };

    getdata();
  }, []);

  const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Title
        level={2}
        style={{
          ...textStyles,
          textAlign: 'center',
          fontSize: '1.75rem',
        }}
      >
        Teacher Feedback Form
      </Title>

      <div className={styles.input_container_layout}>
        <LabelInput
          value={name}
          placeholder="Name"
          onChange={(val) => setName(val)}
        />

        <LabelInput
          value={branch}
          placeholder="Branch"
          onChange={(val) => setBranch(val)}
        />

        <LabelInput
          value={accademicYear}
          placeholder="Accademic Year"
          onChange={(val) => setAccademicYear(val)}
        />
      </div>

      <div
        style={{
          margin: '1.5rem 1rem',
        }}
      >
        <Text
          style={{
            marginInline: '3rem',
          }}
        >
          This questionnaire is intended to collect information relating to your
          satisfaction towards the curriculum, teaching, learning and
          evaluation. The information provided by you will be kept confidential
          and will be used as important feedback for quality improvement of the
          program of studies/institution. Directions: a score for each item
          please indicate your level of satisfaction with the following
          statement by choosing between 1 and 5
        </Text>
      </div>

      <div>
        <div>
          {questions?.map((question: Question_T, index) => {
            return (
              <Question
                key={index}
                question={question.questionText}
                onChange={(e) => {
                  setAnswers((prev) => {
                    return {
                      ...prev,
                      [question._id]: e,
                    };
                  });
                }}
              />
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Button
          type="default"

          onClick={async() => {
            const newanswers = Object.keys(answers).map((key) => {
              return {
                question_id: key,
                answer: answers[key],
              };
            })
            // console.log(newanswers);
            const data = {
              name : name,
              branch : branch,
              answers: newanswers,
              accademicYear: accademicYear,
            }
            setLoading(true);
            const res = await postTeacherResponse(data);
            // console.log(res);
            if(res.success) {
              alert('Response submitted successfully');
            }
            setLoading(false);

          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Teacher;
