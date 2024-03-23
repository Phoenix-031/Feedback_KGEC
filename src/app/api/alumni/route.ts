import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';
import { dbConnection } from '../db/dbConnect';
import { AlumniSchema } from '@/_validation/Alumni.schema';
import AlumniModel from '../_model/alumni.model';
import QuestionModel from '../_model/question.model';

export async function GET() {
    try {

    await dbConnection();

    const resdata = await QuestionModel.find({entity: 'alumni'});

    return NextResponse.json(resdata);
    } catch (error) {
        console.log(error);
    }   
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        // const {success} = AlumniSchema.safeParse(body);
        const success = true; 

        if(success) {
            const Alumni = new AlumniModel(body);

            await Alumni.save();
            // console.log(dt)

            return NextResponse.json({
                // data : dt,
                success: true,
                message: 'Alumni response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}