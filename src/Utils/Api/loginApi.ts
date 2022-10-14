import axios from 'axios';
import { setCookie } from '@/Pages/Login';
import { UserLoginType } from '@/@Types/UserType';

export const loginFunc = (data: UserLoginType) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/user/login`, data)
    .then((res) => {
      if (res.status === 200) {
        setCookie('accessToken', JSON.stringify(res.data.accessToken), {
          path: '/',
          expires: new Date(Date.now() + 60 * 60 * 1 * 1000),
        });
        setCookie('refreshToken', JSON.stringify(res.data.refreshToken), {
          path: '/',
          expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        });
      }
      window.location.replace('/');
    })
    .catch((err) => {
      if (err.response.status === 400) alert('정보가 올바르지 않습니다.');
    });
};
