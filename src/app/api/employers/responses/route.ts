import { NextRequest, NextResponse } from 'next/server';

import { dbConnection } from '../../db/dbConnect';
import EmployerModel from '../../_model/employer.model';

export async function GET() {
    try {

    await dbConnection();

    const allEmployerData = await EmployerModel.find();
    // const resdata = await QuestionModel.find({entity: 'student'});

    return NextResponse.json({
        success: true,
        data: allEmployerData
    });
    } catch (error) {
        console.log(error);
    }   
}