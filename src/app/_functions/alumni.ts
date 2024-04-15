import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetAlumniQuestions = () => {
  return useQuery({
    queryKey:['alumniQuestions'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/alumni`);
      return res.data;
    },
  });
}

export const usePostAlumniResponse = () => {
  return useMutation({
    mutationKey: ["postAlumniResponse"],
    mutationFn : async(data:any) => {
      const res = await axios.post(`${API_URL}/alumni`, data);
      return res.data;
    }
  })
}

export const useGetAlumniResponses = () =>{
  return useQuery({
    queryKey:['alumniResponses'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/alumni/responses`);
      return res.data;
    },
  });
}