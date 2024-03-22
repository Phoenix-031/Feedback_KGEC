import { NextRequest, NextResponse } from 'next/server';
import {z} from 'zod';

export async function GET(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}

export async function POST(request: NextRequest) {
    return NextResponse.json({'message ' :'server is up and running'})
}