import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
import mongoose from 'mongoose';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetQuestionQuery = (questionId  :string) => {
    return useQuery({
        queryKey:['question', questionId],
        queryFn: async() => {
            const res = await axios.get(`${API_URL}/question/${questionId}`);
            return res.data;
        },
    });
}