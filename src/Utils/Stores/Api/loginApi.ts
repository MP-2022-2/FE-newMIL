import { setCookie } from '@/Pages/Login';
import instance from '@/Utils/Stores/Api/axios';
import { UserLoginType } from '@/@Types/UserType';
import { ApiReturn } from '@/@Types/api';

type LoginApiReturn = (data: UserLoginType) => any;

export const loginApi: LoginApiReturn = (data: UserLoginType) =>
  new Promise<ApiReturn>((resolve) => {
    instance({ method: 'post', url: 'user/login', data })
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
        resolve({
          status: 'success',
          message: res.data.msg,
        });
      })
      .catch((err) => {
        if (err.response.data.status === 400) {
          resolve({
            status: 'error',
            message: err.response.data.msg,
          });
        } else {
          resolve({
            status: 'error',
            message: '오류가 발생하였습니다 😥',
          });
        }
      });
  });
