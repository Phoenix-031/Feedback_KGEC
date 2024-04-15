'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const studentResponsesQuery = useGetStudentResponses();
    // const fetchQuestionQuery = useGet

    useEffect(() => {
        console.log(studentResponsesQuery.data);
    },[studentResponsesQuery.isLoading])
    
  return (
    <div>
        <div>
            <button>Print</button>
        </div>

        <div>
            <div>Student Responses</div>
        </div>

        {
            studentResponsesQuery.isLoading ? <Loading /> : (
                studentResponsesQuery.data.data?.map((studentData : any, ind : number) => {
                    return(
    <div key={ind}>
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
          value={studentData.rollNo}
          placeholder="University Roll"
        //   onChange={(val) => setUniversityRoll(val)}
        />

        <LabelInput
          value={studentData.yearOfStudy}
          placeholder="Accademic Year"
        //   onChange={(val) => setAccademicYear(val)}
        />

        {/* <LabelSelect
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
        /> */}
      </div>

      {/* <div
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
          {studentData.answers?.map(async(question: Question_T, index : number) => {
            const questionInfo= await 
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
          })}
        </div>
      </div> */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* <Button
          type="default"

          onClick={async () => {
            const newanswers = Object.keys(answers).map((key) => {
              return {
                question_id: key,
                answer: answers[key],
              };
            });
            const data = {
              rollNo: universityRoll,
              department: department,
              accademicYear: accademicYear,
              answers: newanswers,
              yearOfStudy: yearOfStudy,
            };

            await studentResponseMutation.mutateAsync(data,{
              onSuccess : () => {
                router.push('/')
                alert("Response submitted successfully")
              },
              onError : () => {
                router.push('/')
                alert("Response not submitted")
              }
            })
          }}
        >
          Submit
        </Button> */}
      </div>
    </div>
                    )
                })
            )
        }
    </div>
  )
}

export default StudentResponses