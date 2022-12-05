import axios from 'axios';
import { getCookie } from '@/Pages/Login';

export const VerifiedGetApi = (url: string) => {
  const accessToken = getCookie('accessToken');

  const res = axios
    .get(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .catch((err) => {
      throw new Error(err);
    });

  return res;
};
