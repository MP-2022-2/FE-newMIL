import axios from 'axios';
import { TrackType, SignUpType } from '@/@Types/UserType';

export const trackApi = (data: TrackType) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/subject/registration`, data)
    .then((res) => {
      if (res.status === 201) {
        alert('수강 정보 등록 성공');
      }
      window.location.replace('/');
    })
    .catch((err) => {
      if (err.response.status === 400) alert('정보가 올바르지 않습니다.');
    });
};

export const signUpApi = (data: SignUpType) => {
  axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, data).catch((err) => {
    if (err.response.status === 400) alert('정보가 올바르지 않습니다.');
    if (err.response.status === 409) alert('이미 존재하는 정보입니다.');
  });
};
