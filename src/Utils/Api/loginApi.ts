import { setCookie } from '@/Pages/Login';
import instance from '@/Utils/Api/axios';
import { UserLoginType } from '@/@Types/UserType';

export const loginApi = (data: UserLoginType) => {
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
      window.location.replace('/');
    })
    .catch((err) => {
      if (err.response.status === 400) alert('정보가 올바르지 않습니다.');
    });
};
