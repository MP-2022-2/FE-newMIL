import axios from 'axios';
import { getCookie } from '@/Pages/Login';

export const userFunc = () => {
  const accessToken = getCookie('accessToken');

  const res = axios
    .get(`${process.env.REACT_APP_API_URL}/user/mine`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((err) => {
      throw new Error(err);
    });

  return res;
};
