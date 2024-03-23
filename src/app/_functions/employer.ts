import axios from 'axios';

export const getEmployerQuestions = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;    
  const url = `${API_URL}/alumni`
    const newurl = url.split('/')
    console.log(newurl)
  try {
    const response = await axios.get(`${API_URL}/employers`);

    return {
        success: true,
        data: response.data
    }
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
};


export const postEmployerResponse = async (data: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const url = `${API_URL}/alumni`
    const newurl = url.split('/')
    console.log(newurl)
    
    try {
        const response = await axios.post(`${API_URL}/alumni`, data);
        return {
        success: true,
        message: 'Response successful',
        };
    } catch (error) {
        return {
        success: false,
        message: 'Something went wrong',
        };
    }
}