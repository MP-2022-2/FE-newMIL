import axios from 'axios';
import { atom, selector } from 'recoil';
import { UserType } from '@/@Types/UserType';
import { getCookie } from '@/Pages/Login';

export const userState = atom<UserType>({
  key: 'userState',
  default: {
    userId: '',
    email: '',
    password: '',
    name: '',
    student_id: 0,
    identity: '',
    company: '',
    track: '',
  },
});

export const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const accessToken = getCookie('accessToken');
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/mine`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userState, newValue as UserType);
  },
});
