'use client';

import React, { useEffect, useState } from 'react';

import { Button, Typography } from 'antd';

import { getParentQuestions } from '@/app/_functions/parent';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';
import Loading from '@/components/Loading/Loading';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

const { Text, Title } = Typography;

const Parent = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  /**
   * response states
   */
  const [education, setEducation] = useState('');
  const [relationShip, setRelationShip] = useState('');
  const [occupation, setOccupation] = useState('');
  const [accademicYear, setAccademicYear] = useState('');
  const [name, setName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [answers, setAnswers] = useState<{
    [key: string]: string;
  }>({});

  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const dt = await getParentQuestions();
      setQuestions(dt.data);
      setLoading(false);
    };

    getdata();
  }, []);

  const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

  if (loading) return <Loading />;
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
        Parent Feedback Form
      </Title>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <LabelInput
          value={name}
          placeholder="Name"
          onChange={(val) => setName(val)}
        />

        <LabelInput
          value={studentName}
          placeholder="Student Name"
          onChange={(val) => setStudentName(val)}
        />

        <LabelInput
          value={accademicYear}
          placeholder="Accademic Year"
          onChange={(val) => setAccademicYear(val)}
        />

        <LabelSelect
          placeholder="Education"
          options={[
            { label: 'Graduate', value: 'Graduate' },
            { label: 'Post Graduate', value: 'Post Graduate' },
            { label: 'Any Other', value: 'Any Other' },
          ]}
          onChange={(val) => setEducation(val)}
        />
        <LabelSelect
          placeholder="Occupation"
          options={[
            { label: 'Cultivation', value: 'Cultivation' },
            { label: 'Business', value: 'Business' },
            {
              label: 'Employee(Public Sector)',
              value: 'Employee(Public Sector)',
            },
            {
              label: 'Employee(Private Sector)',
              value: 'Employee(Private Sector)',
            },
            { label: 'Any Other', value: 'Any Other' },
          ]}
          onChange={(val) => setOccupation(val)}
        />
        <LabelSelect
          placeholder="RelationShip with Student"
          options={[
            { label: 'Father', value: 'Father' },
            { label: 'Mother', value: 'Mother' },
          ]}
          onChange={(val) => setRelationShip(val)}
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
            console.log(name);
            console.log(studentName);
            console.log(accademicYear);
            console.log(answers);
            console.log(education);
            console.log(occupation);
            console.log(relationShip);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Parent;
