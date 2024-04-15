import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import QuestionModel from '../_model/question.model';
import { QuesitonSchema } from '@/_validation/Question.schema';
import mongoose from 'mongoose';



export async function POST(request: NextRequest) {

    try {
        await dbConnection();
        const body = await request.json();

        const {success} = QuesitonSchema.safeParse(body); 

        if(success) {
            const question = new QuestionModel({
                questionText: body.questionText,
                answer: body.answer,
                section: body.section,
                entity : body.entity,
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

// export async function GET(questionId:mongoose.Types.ObjectId) {
//     try {

//     await dbConnection();

//     const resdata = await QuestionModel.find({__id:questionId});

//     return NextResponse.json(resdata);
//     } catch (error) {
//         console.log(error);
//     }   
// }