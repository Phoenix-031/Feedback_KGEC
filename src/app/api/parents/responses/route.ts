import { NextRequest, NextResponse } from 'next/server';

import { dbConnection } from '../../db/dbConnect';
import ParentModel from '../../_model/parent.model';

export async function GET() {
    try {

    await dbConnection();

    const allParentData = await ParentModel.find();
    // const resdata = await QuestionModel.find({entity: 'student'});

    return NextResponse.json({
        success: true,
        data: allParentData
    });
    } catch (error) {
        console.log(error);
    }   
}