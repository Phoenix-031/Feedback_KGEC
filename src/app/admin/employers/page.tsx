'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./employer.module.scss";
import ResponseContainer from '../component/ResponseContainer';
import { useGetParentResponses } from '@/app/_functions/parent';
import { useGetTeacherResponses } from '@/app/_functions/teacher';
import { useGetEmployerResponses } from '@/app/_functions/employer';

const { Text, Title } = Typography;

const StudentResponses = () => {

      const textStyles: React.CSSProperties = {
    margin: '1.5rem 1rem',
  };

    const employerResponseQuery = useGetEmployerResponses();
    
  return (
    <div className={styles.student__responses}>
        <div>
            <div>Employers Responses</div>
        </div>

        <div className={styles.student__response}>
        {
            employerResponseQuery.isLoading ? <Loading /> : (
                employerResponseQuery.data.data?.map((employerData : any, ind : number) => {
                    return(
                      <div key={ind}>
                        <div>
                          Employer - {ind+1}
                        </div>
                        <div>
                        <LabelInput value={employerData.nameOfCompany} placeholder='Name Of Company' />
                        <LabelInput value={employerData.noepwd} placeholder='Name of the evaluating person with Designation:' />
                        </div>

                        <div className={styles.response__section__container}>
                          {
                            employerData.answers.map((ans : {question_id:string, answer:string},ind:number) => {
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