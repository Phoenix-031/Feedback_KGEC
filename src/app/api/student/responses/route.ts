import { NextRequest, NextResponse } from 'next/server';

import StudentModel from '../../_model/student.model';
import { dbConnection } from '../../db/dbConnect';

export async function GET() {
    try {

    await dbConnection();

    const allStudentData = await StudentModel.find();
    // const resdata = await QuestionModel.find({entity: 'student'});

    return NextResponse.json({
        success: true,
        data: allStudentData
    });
    } catch (error) {
        console.log(error);
    }   
}