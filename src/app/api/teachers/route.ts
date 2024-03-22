import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import { QuesitonSchema } from '@/_validation/Question.schema';
import QuestionModel from '../_model/question.model';

import TeacherModel from '../_model/teacher.model';
import { TeacherSchema } from '@/_validation/Teacher.schema';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = TeacherSchema.safeParse(body); 

        if(success) {
            const teacher = new TeacherModel(body);

            await teacher.save();

            return NextResponse.json({
                success: true,
                message: 'Teacher response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}