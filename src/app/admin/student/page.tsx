'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./student.module.scss";
import ResponseContainer from '../component/ResponseContainer';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const studentResponsesQuery = useGetStudentResponses();

  return (
    <div className={styles.student__responses}>

        <div>
            <div>Student Responses</div>
        </div>

        <div className={styles.student__response}>
        {
            studentResponsesQuery.isLoading ? <Loading /> : (
                studentResponsesQuery.data.data?.map((studentData : any, ind : number) => {
                    return(
                      <div key={ind}>
                        <div>
                          Student - {ind+1}
                        </div>
                        <div>
                        <LabelInput value={studentData.rollNo} placeholder='Roll No' />
                        <LabelInput value={studentData.department} placeholder='Departnemt' />
                        <LabelInput value={studentData.yearOfStudy} placeholder='Year Of Study' />
                        <LabelInput value={studentData.accademicYear} placeholder='Academic Year' />
                        </div>

                        <div className={styles.response__section__container}>
                          {
                            studentData.answers.map((ans : {question_id:string, answer:string},ind:number) => {
                              return(
                                <ResponseContainer key={ind} questionId={ans.question_id} answer={ans.answer} />
                              )
                            })
                          }
                        </div>

                        <div>

                        </div>
                      </div>
                    )
                })
            )
        }
        </div>
    </div>
  )
}

export default StudentResponses