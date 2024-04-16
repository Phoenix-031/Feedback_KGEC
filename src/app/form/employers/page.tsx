'use client';

import React, { useEffect, useState } from 'react';

import { Button, Typography } from 'antd';

import { useGetEmployerQuestions, usePostEmployerResponse } from '@/app/_functions/employer';
import LabelInput from '@/components/LabelInput/LabelInput';
import Loading from '@/components/Loading/Loading';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

import { useRouter } from 'next/navigation';

const { Text, Title } = Typography;

const Employee = () => {

  const router = useRouter()
  const getEmployerQuestionQuery = useGetEmployerQuestions();
  const postEmployerResponseMutation = usePostEmployerResponse();
  /**
   * response states
   */
  const [companyName, setCompanyName] = useState('');
  const [
    nameOfEvaluatingPersonWithDesignation,
    setNameOfEvaluatingPersonWithDesignation,
  ] = useState('');
  const [answers, setAnswers] = useState<{
    [key: string]: string;
  }>({});

  
  const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

  {
    getEmployerQuestionQuery.isLoading && <Loading />;
  }
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
        Employee Feedback Form
      </Title>

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
          <span
            style={{
              display: 'block',
            }}
          >
            Dear employers,
          </span>{' '}
          <span
            style={{
              marginLeft: '3rem',
            }}
          >
            As
          </span>{' '}
          industry is the ultimate customer of engineering graduates, its
          satisfaction about standards and content of Kalyani Government
          Engineering College products is important. Kalyani Government
          Engineering College always maintains a continuous dialogue
          accordingly. As the ultimate beneficiary of our quality product your
          support and feedback will help us to maintain the required standards
          of education. Here are some of the points to facilitate you in giving
          feedback about our students. You are requested to give marks in the
          box provided against each item as per the following norms.
        </Text>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <LabelInput
          value={companyName}
          placeholder="Name of Company/Institution"
          onChange={(val) => setCompanyName(val)}
        />

        <LabelInput
          value={nameOfEvaluatingPersonWithDesignation}
          placeholder="Name of the evaluating person with Designation"
          onChange={(val) => setNameOfEvaluatingPersonWithDesignation(val)}
        />
      </div>

      <div
        style={{
          margin: '1.5rem 0',
        }}
      >
        <Text
          style={{
            fontWeight: 'bold',
          }}
        >
          About Kalyani Government Engineering College Products already employed
        </Text>
      </div>

      <div>
        <div>
          {getEmployerQuestionQuery.data?.map((question: Question_T, index : number) => {
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
          loading={postEmployerResponseMutation.isSuccess}
          onClick={async() => {
            const newanswers = Object.keys(answers).map((key) => {
              return {
                question_id: key,
                answer: answers[key],
              };
            });
           await postEmployerResponseMutation.mutateAsync({
              nameOfCompany:companyName,
              noepwd : nameOfEvaluatingPersonWithDesignation,
              answers:newanswers,
            },
            {
              onSuccess : () => {
                router.push("/")
                alert("Response submitted successfully")
              },
              onError : (error) => {
                console.log(error)
                router.push('/')
              }
            },
            );
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Employee;
