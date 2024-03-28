import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetEmployerQuestions = () => {
  return useQuery({
    queryKey:['employerQuestions'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/employers`);
      return res.data;
    },
  });
}

export const usePostEmployerResponse = () => {
  return useMutation({
    mutationKey: ["postEmployerResponse"],
    mutationFn : async(data:any) => {
      const res = await axios.post(`${API_URL}/employers`, data);
      return res.data;
    }
  })

}