import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import StudentModel from '../_model/student.model';
import { dbConnection } from '../db/dbConnect';
import { StudentSchema } from '@/_validation/Student.schema';
import QuestionModel from '../_model/question.model';

export async function GET() {
    try {

    await dbConnection();

    const resdata = await QuestionModel.find({entity: 'student'});

    return NextResponse.json(resdata);
    } catch (error) {
        console.log(error);
    }   
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        // const {success} = StudentSchema.safeParse(body); 
        const success = true

        if(success) {
            console.log(body)
            const Student = new StudentModel(body);

            await Student.save();

            return NextResponse.json({
                success: true,
                message: 'Student response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }    
}