import { atom, selector } from 'recoil';
import { APILoginType, UserSignUpType } from '@/@Types/UserType';
import { getCookie } from '@/Pages/Login';
import instance from '@/Utils/Stores/Api/axios';

export const userState = atom<APILoginType>({
  key: 'userState',
  default: {
    nickName: '',
    name: '',
    track: '',
    studentId: 0,
    company: '',
    email: '',
    msg: '',
    status: 0,
    refreshToken: '',
    accessToken: '',
    identity: '',
  },
});

export const userSignUpState = atom<UserSignUpType>({
  key: 'userSignUpState',
  default: {
    nickName: '',
    email: '',
    userId: '',
    password: '',
    name: '',
    studentId: 0,
    company: '',
    track: '',
    identity: '',
    verify: '',
  },
});

export const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const accessToken = getCookie('accessToken');
    if (accessToken === undefined) return false; // 추후에 refreshToken 여부에 따른 추가 로직 구현

    const res = await instance({ url: 'user/mine' });
    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userState, newValue as APILoginType);
  },
});
