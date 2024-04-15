import { NextRequest, NextResponse } from 'next/server';

import { dbConnection } from '../../db/dbConnect';
import AlumniModel from '../../_model/alumni.model';

export async function GET() {
    try {

    await dbConnection();

    const allAlumniData = await AlumniModel.find();

    return NextResponse.json({
        success: true,
        data: allAlumniData
    });
    } catch (error) {
        console.log(error);
    }   
}