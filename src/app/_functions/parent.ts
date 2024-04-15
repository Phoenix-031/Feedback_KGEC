import axios from 'axios';
import { useQuery, useMutation } from '@tanstack/react-query';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useGetParentQuestions = () => {
  return useQuery({
    queryKey:['parentQuestions'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/parents`);
      return res.data;
    },
  });
}

export const usePostParentResponse = () => {
  return useMutation({
    mutationKey: ["postParentResponse"],
    mutationFn : async(data:any) => {
      const res = await axios.post(`${API_URL}/parents`, data);
      return res.data;
    }
  })

}

export const useGetParentResponses = () =>{
  return useQuery({
    queryKey:['parentResponses'],
    queryFn: async() => {
      const res = await axios.get(`${API_URL}/parents/responses`);
      return res.data;
    },
  });
}