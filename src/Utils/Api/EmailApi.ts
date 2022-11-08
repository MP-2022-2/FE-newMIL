import axios from 'axios';
import { UserAuthType } from '@/@Types/UserType';

export const emailFunc = (data: UserAuthType) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/user/certification`, data)
    .then((res) => {
      if (res.status === 201) {
        alert('메일이 발송되었습니다.');
      }
    })
    .catch((err) => {
      if (err.response.status === 400) alert('정보가 올바르지 않습니다.');
    });
};
