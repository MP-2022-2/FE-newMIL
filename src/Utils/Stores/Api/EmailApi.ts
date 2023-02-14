import axios from 'axios';
import { UserAuthType } from '@/@Types/UserType';
import { Dispatch, SetStateAction } from 'react';

import useToastMessage from '@/Utils/Hooks/useToastMessage';

export const emailApi = (
  data: UserAuthType,
  setIsVerified: Dispatch<SetStateAction<boolean>>,
  setIsVerifiedEmail: Dispatch<SetStateAction<string>>,
  isEmailAuthorizedForm?: boolean,
) => {
  const openToastMessage = useToastMessage();

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
          openToastMessage('메일을 다시 발송하였습니다', 'success');
        }
      })
      .catch((err) => {
        if (err.response.status === 400) openToastMessage('메일 발송에 실패하였습니다.');
      });

    return;
  }

  if (!isEmailAuthorizedForm) {
    // 인증 메일 발송 form
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/certification`, data)
      .then((res) => {
        if (res.status === 201) {
          openToastMessage('메일이 발송되었습니다.', 'success');
        }
      })
      .catch((err) => {
        if (err.response.status === 400) openToastMessage('메일 발송에 실패하였습니다.');
      });
  } else {
    // 인증 번호 확인 form
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/verification`, data)
      .then((res) => {
        if (res.status === 200) {
          openToastMessage('인증에 성공하였습니다.', 'success');
          setIsVerified(true);
          setIsVerifiedEmail(data.email);
        }
      })
      .catch((err) => {
        if (err.response.status === 400) openToastMessage('인증에 실패하였습니다.');
      });
  }
};
