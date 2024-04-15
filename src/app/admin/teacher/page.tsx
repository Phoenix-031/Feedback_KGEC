'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./teacher.module.scss";
import ResponseContainer from '../component/ResponseContainer';
import { useGetParentResponses } from '@/app/_functions/parent';
import { useGetTeacherResponses } from '@/app/_functions/teacher';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const teacherResponseQuery = useGetTeacherResponses();
    
  return (
    <div className={styles.student__responses}>

        <div>
            <div>Teacher Responses</div>
        </div>

        <div className={styles.student__response}>
        {
            teacherResponseQuery.isLoading ? <Loading /> : (
                teacherResponseQuery.data.data?.map((teacherData : any, ind : number) => {
                    return(
                      <div key={ind}>
                        <div>
                          Teacher - {ind+1}
                        </div>
                        <LabelInput value={teacherData.name} placeholder='Name' />
                        <LabelInput value={teacherData.branch} placeholder='Branch' />
                        <LabelInput value={teacherData.accademicYear} placeholder='Academic Year' />

                        <div className={styles.response__section__container}>
                          {
                            teacherData.answers.map((ans : {question_id:string, answer:string},ind:number) => {
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