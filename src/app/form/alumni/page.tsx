'use client';

import React, { useState } from 'react';

import { Button, Typography } from 'antd';

import {
  useGetAlumniQuestions,
  usePostAlumniResponse,
} from '@/app/_functions/alumni';
import LabelInput from '@/components/LabelInput/LabelInput';
import Loading from '@/components/Loading/Loading';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

import styles from './style.module.scss';
import { useRouter } from 'next/navigation';

const { Text, Title } = Typography;

const Alumni = () => {

  const alumniQuery = useGetAlumniQuestions();
  const alumniResponseMutation = usePostAlumniResponse();
  const router = useRouter();
  
  /**
   * response states
   */

  const [branch, setBranch] = useState('');
  const [batch, setBatch] = useState('');
  const [name, setName] = useState('');
  const [answers, setAnswers] = useState<{
    [key: string]: string;
  }>({});
  const [opportunities, setOpportunities] = useState('');
  const [alumniInfo, setAlumniInfo] = useState({
    name: '',
    organization: '',
    position: '',
    graduationYear: '',
    suggestions: '',
  });

  const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

  return (
    alumniQuery.isLoading ? <Loading /> : (
    <div>
      <Title
        level={2}
        style={{
          ...textStyles,
          textAlign: 'center',
          fontSize: '1.75rem',
        }}
      >
        Alumni Feedback Form
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
          value={batch}
          placeholder="Batch"
          onChange={(val) => setBatch(val)}
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
          The purpose of this survey is to obtain alumni input on the quality of
          education they received and the level of preparation they had at
          University. The purpose of this survey is to assess the quality of the
          academic program. We seek your help in completing this survey.
        </Text>
      </div>

      <div>
        <Title level={3} style={textStyles}>
          Knowledge
        </Title>
        <div>
          {alumniQuery.data?.filter((question: Question_T) => question.section === 'Knowledge')
            .map((question: Question_T, index:number) => {
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

      <div>
        <Title level={3} style={textStyles}>
          Communication Skills
        </Title>
        <div>
          {alumniQuery.data?.filter(
              (question: Question_T) =>
                question.section === 'Communication Skills'
            )
            .map((question: Question_T, index:number) => {
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

      <div>
        <Title level={3} style={textStyles}>
          Interpersonal Skills
        </Title>

        <div>
          {alumniQuery.data?.filter(
              (question: Question_T) =>
                question.section === 'Interpersonal Skills'
            )
            .map((question: Question_T, index:number) => {
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

      <div>
        <Title level={3} style={textStyles}>
          Management/ leadership Skills
        </Title>

        <div>
          {alumniQuery.data?.filter(
              (question: Question_T) =>
                question.section === 'Management/ leadership Skills'
            )
            .map((question: Question_T, index:number) => {
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
          marginTop: '1rem',
        }}
      >
        <LabelInput
          value={opportunities}
          placeholder="Career Opportunities"
          onChange={(val) => setOpportunities(val)}
        />
      </div>
      <div>
        <Title level={3} style={textStyles}>
          Alumni Information
        </Title>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <LabelInput
            value={alumniInfo.name}
            placeholder="Name"
            onChange={(val) => setAlumniInfo({ ...alumniInfo, name: val })}
          />
          <LabelInput
            value={alumniInfo.organization}
            placeholder="Name Of Organization"
            onChange={(val) =>
              setAlumniInfo({ ...alumniInfo, organization: val })
            }
          />
          <LabelInput
            value={alumniInfo.position}
            placeholder="Position in Organization"
            onChange={(val) => setAlumniInfo({ ...alumniInfo, position: val })}
          />
          <LabelInput
            value={alumniInfo.graduationYear}
            placeholder="Year of Graduation"
            onChange={(val) =>
              setAlumniInfo({ ...alumniInfo, graduationYear: val })
            }
          />
          <LabelInput
            value={alumniInfo.suggestions}
            placeholder="Suggestions if any"
            onChange={(val) =>
              setAlumniInfo({ ...alumniInfo, suggestions: val })
            }
          />
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
              batch: batch,
              answers: newanswers,
              opportunities: opportunities,
              alumniInfo: alumniInfo,
            };
            await alumniResponseMutation.mutateAsync(data, {
              onSuccess: () => {
                router.push('/')
                alert('Response submitted successfully');
              },
              onError: () => {
                router.push('/')
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

export default Alumni;
