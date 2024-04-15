import { NextRequest, NextResponse } from "next/server";
import QuestionModel from "../../_model/question.model";
import { dbConnection } from "../../db/dbConnect";
import Paragraph from "antd/es/skeleton/Paragraph";
import mongoose from "mongoose";

export async function GET(req : NextRequest,{params} : {params : {questionId:mongoose.Types.ObjectId}}) {
    try {

        const {questionId} = params;

        console.log(questionId);

        await dbConnection();

        const question= await QuestionModel.findById(questionId);

        return NextResponse.json(question);
    } catch (error) {
        console.log(error);
    }
}