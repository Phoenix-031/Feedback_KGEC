import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

import ParentModel from '../_model/parent.model';
import { dbConnection } from '../db/dbConnect';
import { ParentSchema } from '@/_validation/Parent.schema';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {

    try {

        await dbConnection();
        const body = await request.json();

        const {success} = ParentSchema.safeParse(body); 

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