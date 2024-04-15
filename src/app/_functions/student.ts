import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetStudentQuestions = () => {
  return useQuery({
    queryKey:['studentQuestions'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/student`);
      return res.data;
    },
  });
}

export const usePostStudentResponse = () => {
  return useMutation({
    mutationKey: ["postStudentResponse"],
    mutationFn : async(data:any) => {
      const res = await axios.post(`${API_URL}/student`, data);
      return res.data;
    }
  })

}

export const useGetStudentResponses = () =>{
  return useQuery({
    queryKey:['studentResponses'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/student/responses`);
      return res.data;
    },
  });
}