'use client';

import React, { useState } from 'react';

import { Button, Typography } from 'antd';

import {
  useGetTeacherQuestions,
  usePostTeacherResponse,
} from '@/app/_functions/teacher';
import LabelInput from '@/components/LabelInput/LabelInput';
import Loading from '@/components/Loading/Loading';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';
import { useRouter } from 'next/navigation';

const { Text, Title } = Typography;

const Teacher = () => {

  const teacherQuery = useGetTeacherQuestions();
  const teacherResponseMutation = usePostTeacherResponse();
  const router= useRouter()

  /**
   * response states
   */
  const [branch, setBranch] = useState('');
  const [accademicYear, setAccademicYear] = useState('');
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<{
    [key: string]: string;
  }>({});

  const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

  return (
    teacherQuery.isLoading ? <Loading /> : (
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
          {teacherQuery.data?.map((question: Question_T, index:number) => {
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
          onClick={async () => {
            const newanswers = Object.keys(answers).map((key) => {
              return {
                question_id: key,
                answer: answers[key],
              };
            });
            const data = {
              name: name,
              branch: branch,
              answers: newanswers,
              accademicYear: accademicYear,
            };

            await teacherResponseMutation.mutateAsync(data, {
              onSuccess: () => {
                router.push('/');
                alert('Response submitted successfully');
              },
              onError: () => {
                router.push('/');
                alert('Response not submitted');
              },
            });
            
          }}
        >
          Submit
        </Button>
      </div>
    </div>
    )
  );
};

export default Teacher;
