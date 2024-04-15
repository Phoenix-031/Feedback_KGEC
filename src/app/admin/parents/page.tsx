'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./parents.module.scss";
import ResponseContainer from '../component/ResponseContainer';
import { useGetParentResponses } from '@/app/_functions/parent';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const parentResponsesQuery = useGetParentResponses();

    useEffect(() => {
      console.log(parentResponsesQuery.data);
    },[parentResponsesQuery.isLoading])
    
  return (
    <div className={styles.student__responses}>

        <div>
            <div>Parent Responses</div>
        </div>

        <div className={styles.student__response}>
        {
            parentResponsesQuery.isLoading ? <Loading /> : (
                parentResponsesQuery.data.data?.map((parentData : any, ind : number) => {
                    return(
                      <div key={ind}>
                        <div>
                          Parent - {ind+1}
                        </div>
                        <LabelInput value={parentData.name} placeholder='Name' />
                        <LabelInput value={parentData.studentName} placeholder='Student Name' />
                        <LabelInput value={parentData.occupation} placeholder='Occupation' />
                        <LabelInput value={parentData.accademicYear} placeholder='Academic Year' />
                        <LabelInput value={parentData.relationship} placeholder='Relationship' />
                        <LabelInput value={parentData.education} placeholder='Education' />

                        <div className={styles.response__section__container}>
                          {
                            parentData.answers.map((ans : {question_id:string, answer:string},ind:number) => {
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