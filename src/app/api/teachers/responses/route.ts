import { NextRequest, NextResponse } from 'next/server';

import { dbConnection } from '../../db/dbConnect';
import TeacherModel from '../../_model/teacher.model';

export async function GET() {
    try {

    await dbConnection();

    const allTeacherData = await TeacherModel.find();
    // const resdata = await QuestionModel.find({entity: 'student'});

    return NextResponse.json({
        success: true,
        data: allTeacherData
    });
    } catch (error) {
        console.log(error);
    }   
}