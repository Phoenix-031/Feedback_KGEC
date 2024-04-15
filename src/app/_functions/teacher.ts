import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetTeacherQuestions = () => {
  return useQuery({
    queryKey:['teacherQuestions'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/teachers`);
      return res.data;
    },
  });
}

export const usePostTeacherResponse = () => {
  return useMutation({
    mutationKey: ["postTeacherResponse"],
    mutationFn : async(data:any) => {
      const res = await axios.post(`${API_URL}/teachers`, data);
      return res.data;
    }
  })
}

export const useGetTeacherResponses = () =>{
  return useQuery({
    queryKey:['teacherResponses'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/teachers/responses`);
      return res.data;
    },
  });
}