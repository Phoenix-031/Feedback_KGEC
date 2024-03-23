'use client';

import React, { useEffect, useState } from 'react';

import { Button, Input, Typography } from 'antd';

import { getAlumniQuestions } from '@/app/_functions/alumni';
import Question from '@/components/Question/Question';
import { Question_T } from '@/types/Question';

import styles from './style.module.scss';

const { Text, Title } = Typography;

const Alumni = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const getdata = async () => {
      setLoading(true);
      const dt = await getAlumniQuestions();
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
          {questions
            .filter((question: Question_T) => question.section === 'Knowledge')
            .map((question: Question_T, index) => {
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
          {questions
            .filter(
              (question: Question_T) =>
                question.section === 'Communication Skills'
            )
            .map((question: Question_T, index) => {
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
          {questions
            .filter(
              (question: Question_T) =>
                question.section === 'Interpersonal Skills'
            )
            .map((question: Question_T, index) => {
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
          {questions
            .filter(
              (question: Question_T) =>
                question.section === 'Management/ leadership Skills'
            )
            .map((question: Question_T, index) => {
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
          onClick={() => {
            console.log(name);
            console.log(branch);
            console.log(batch);
            console.log(answers);
            console.log(opportunities);
            console.log(alumniInfo);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

function LabelInput({
  value,
  placeholder,
  onChange,
}: {
  value?: string;
  placeholder: string;
  onChange?: (val: string) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        // maxWidth: '400px',
      }}
    >
      <label
        style={{
          fontSize: '15px',
          marginInline: '2px',
        }}
      >
        {placeholder}:
      </label>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
}
export default Alumni;
