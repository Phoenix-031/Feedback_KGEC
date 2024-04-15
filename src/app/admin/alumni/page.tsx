'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./alumni.module.scss";
import ResponseContainer from '../component/ResponseContainer';
import { useGetParentResponses } from '@/app/_functions/parent';
import { useGetTeacherResponses } from '@/app/_functions/teacher';
import { useGetEmployerResponses } from '@/app/_functions/employer';
import { useGetAlumniResponses } from '@/app/_functions/alumni';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const alumniResponseQuery = useGetAlumniResponses();
    
  return (
    <div className={styles.student__responses}>

        <div>
            <div>Alumni Responses</div>
        </div>

        <div className={styles.student__response}>
        {
            alumniResponseQuery.isLoading ? <Loading /> : (
                alumniResponseQuery.data.data?.map((alumniData : any, ind : number) => {
                    return(
                      <div key={ind}>
                        <div>
                          Alumni - {ind+1}
                        </div>
                        <LabelInput value={alumniData.name} placeholder='Name' />
                        <LabelInput value={alumniData.branch} placeholder='Branch' />
                        <LabelInput value={alumniData.batch} placeholder='Batch' />
                        <LabelInput value={alumniData.opportunities} placeholder='Opportunities' />

                        <div className={styles.response__section__container}>
                          {
                            alumniData.answers.map((ans : {question_id:string, answer:string},ind:number) => {
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