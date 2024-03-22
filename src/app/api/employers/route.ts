import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import EmployerModel from '../_model/parent.model';
import { dbConnection } from '../db/dbConnect';
import { EmployerSchema } from '@/_validation/Employer.schema';
import QuestionModel from '../_model/question.model';

export async function GET() {
    try {

    await dbConnection();

    const resdata = await QuestionModel.find({entity: 'employer'});

    return NextResponse.json(resdata);
    } catch (error) {
        console.log(error);
    }   
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = EmployerSchema.safeParse(body); 

        if(success) {
            const Employer = new EmployerModel(body);

            await Employer.save();

            return NextResponse.json({
                success: true,
                message: 'Employer response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}