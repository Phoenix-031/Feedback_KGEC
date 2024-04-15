'use client';
import { useGetStudentResponses } from '@/app/_functions/student';
import Loading from '@/components/Loading/Loading';
import React, { useEffect } from 'react'
import { Radio, Space } from 'antd';

import { Button, Typography } from 'antd';
import LabelInput from '@/components/LabelInput/LabelInput';
import LabelSelect from '@/components/LabelSelect/LabelSelect';


import styles from "./student.module.scss";

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
    <div className={styles.student__responses}>
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
                      "dkfjvndjfk"
                    )
                })
            )
        }
    </div>
  )
}

export default StudentResponses