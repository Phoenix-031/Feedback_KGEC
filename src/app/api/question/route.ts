import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import QuestionModel from '../_model/question.model';
import { QuesitonSchema } from '@/_validation/Question.schema';



export async function POST(request: NextRequest) {

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

            await question.save();

            return NextResponse.json({
                success: true,
                message: 'Question added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }    
}