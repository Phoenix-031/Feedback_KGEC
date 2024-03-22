import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import EmployerModel from '../_model/parent.model';
import { dbConnection } from '../db/dbConnect';
import { EmployerSchema } from '@/_validation/Employer.schema';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
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