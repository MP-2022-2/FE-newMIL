import axios from 'axios';
import { UserAuthType } from '@/@Types/UserType';
import { Dispatch, SetStateAction } from 'react';

export const emailFunc = (
  data: UserAuthType,
  setIsVerified: Dispatch<SetStateAction<boolean>>,
  auth?: boolean,
) => {
  if (data.reset) {
    axios.post(`${process.env.REACT_APP_API_URL}/user/verification`, {
      email: undefined,
      randomCode: undefined,
    });

    axios
      .post(`${process.env.REACT_APP_API_URL}/user/certification`, {
        email: data.email,
        randomCode: data.randomCode,
      })
      .then((res) => {
        if (res.status === 201) {
          alert('메일을 다시 발송하였습니다.');
        }
      })
      .catch((err) => {
        if (err.response.status === 400) alert('메일 발송에 실패하였습니다.');
      });

    return;
  }

  if (!auth) {
    // 인증 메일 발송
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/certification`, data)
      .then((res) => {
        if (res.status === 201) {
          alert('메일이 발송되었습니다.');
        }
      })
      .catch((err) => {
        if (err.response.status === 400) alert('메일 발송에 실패하였습니다.');
      });
  } else {
    // 인증 번호 확인
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/verification`, data)
      .then((res) => {
        if (res.status === 200) {
          alert('인증에 성공하였습니다.');
          setIsVerified(true);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) alert('인증에 실패하였습니다.');
      });
  }
};
