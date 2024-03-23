'use client';

import React, { useEffect, useState } from 'react';

import { Button, Typography } from 'antd';

import { getTeacherQuestions } from '@/app/_functions/teacher';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

import { Departments, YearOfStudy } from './types';

const { Text, Title } = Typography;

const Student = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * response states
   */
  const [accademicYear, setAccademicYear] = useState('');
  const [universityRoll, setUniversityRoll] = useState('');
  const [department, setDepartment] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('');
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
        Student Feedback Form
      </Title>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <LabelInput
          value={universityRoll}
          placeholder="University Roll"
          onChange={(val) => setUniversityRoll(val)}
        />

        <LabelInput
          value={accademicYear}
          placeholder="Accademic Year"
          onChange={(val) => setAccademicYear(val)}
        />

        <LabelSelect
          placeholder="Department"
          options={[
            {
              label: Departments.COMPUTER_SCIENCE_AND_ENGINEERING,
              value: Departments.COMPUTER_SCIENCE_AND_ENGINEERING,
            },
            {
              label: Departments.ELECTRONICS_AND_COMMUNICATION_ENGINEERING,
              value: Departments.ELECTRONICS_AND_COMMUNICATION_ENGINEERING,
            },
            {
              label: Departments.ELECTRICAL_ENGINEERING,
              value: Departments.ELECTRICAL_ENGINEERING,
            },
            {
              label: Departments.MECHANICAL_ENGINEERING,
              value: Departments.MECHANICAL_ENGINEERING,
            },
            {
              label: Departments.INFORMATION_TECHNOLOGY,
              value: Departments.INFORMATION_TECHNOLOGY,
            },
          ]}
          onChange={(val) => setDepartment(val)}
        />
        <LabelSelect
          placeholder="Year of Study"
          options={[
            {
              label: YearOfStudy.FIRST,
              value: YearOfStudy.FIRST,
            },
            {
              label: YearOfStudy.SECOND,
              value: YearOfStudy.SECOND,
            },
            {
              label: YearOfStudy.THIRD,
              value: YearOfStudy.THIRD,
            },
            {
              label: YearOfStudy.FOURTH,
              value: YearOfStudy.FOURTH,
            },
          ]}
          onChange={(val) => setYearOfStudy(val)}
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
          {questions.map((question: Question_T, index) => {
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
          onClick={() => {
            console.log(universityRoll);
            console.log(accademicYear);
            console.log(answers);
            console.log(department);
            console.log(yearOfStudy);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Student;
