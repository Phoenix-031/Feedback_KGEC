import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import StudentModel from '../_model/student.model';
import { dbConnection } from '../db/dbConnect';
import { StudentSchema } from '@/_validation/Student.schema';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = StudentSchema.safeParse(body); 

        if(success) {
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