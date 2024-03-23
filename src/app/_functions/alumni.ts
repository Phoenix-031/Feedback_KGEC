import axios from 'axios';

export const getAlumniQuestions = async () => {
  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_URL = 'www.kgec-naac.in/api'

  try {
    const response = await axios.get(`${API_URL}/alumni`);

    return {
        success: true,
        data: response.data
    }

    // if (response.status !== 200) {
    //   return {
    //     success: false,
    //     message: 'Login failed',
    //   };
    // }
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
};


export const postAlumniResponse = async (data: any) => {
    // const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_URL = 'www.kgec-naac.in/api'
    try {
        const response = await axios.post(`${API_URL}/alumni`, data);
        console.log(response);
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