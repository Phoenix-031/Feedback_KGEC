import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import ParentModel from '../_model/parent.model';
import { dbConnection } from '../db/dbConnect';
import { ParentSchema } from '@/_validation/Parent.schema';
import QuestionModel from '../_model/question.model';

export async function GET() {
    try {

    await dbConnection();

    const resdata = await QuestionModel.find({entity: 'parent'});

    return NextResponse.json(resdata);
    } catch (error) {
        console.log(error);
    }   
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        // const {success} = ParentSchema.safeParse(body);
        const success = true 

        if(success) {
            const Parent = new ParentModel(body);

            await Parent.save();

            return NextResponse.json({
                success: true,
                message: 'Parents response added successfully'
            });
        }

        
    } catch (error) {
        console.log(error);
    }

    
}