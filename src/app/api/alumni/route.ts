import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import { QuesitonSchema } from '@/_validation/Question.schema';
import QuestionModel from '../_model/question.model';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {
    // return NextResponse.json({'message ' :'server is up and running'})

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = QuesitonSchema.safeParse(body); 

        if(success) {
            const question = new QuestionModel({
                questionText: body.questionText,
                answer: body.answer,
                section: body.section
            });

            const conn = await question.save();

            console.log(conn)

            return NextResponse.json({
                success: true,
                message: 'Question added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}