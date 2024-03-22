import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import { QuesitonSchema } from '@/_validation/Question.schema';
import QuestionModel from '../_model/question.model';
import { AlumniSchema } from '@/_validation/Alumni.schema';
import AlumniModel from '../_model/alumni.model';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = AlumniSchema.safeParse(body); 

        if(success) {
            const Alumni = new AlumniModel(body);

            await Alumni.save();

            return NextResponse.json({
                success: true,
                message: 'Alumni response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}