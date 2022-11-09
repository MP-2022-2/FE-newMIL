import { atom, selector } from 'recoil';
import { APILoginType, UserSignUpType } from '@/@Types/UserType';
import { getCookie } from '@/Pages/Login';
import { userFunc } from '@/Utils/Api/UserApi';

export const userState = atom<APILoginType>({
  key: 'userState',
  default: {
    name: '',
    track: '',
    studentId: 0,
    company: '',
    email: '',
    msg: '',
    status: 0,
    refreshToken: '',
    accessToken: '',
  },
});

export const userSignUpState = atom<UserSignUpType>({
  key: 'userSignUpState',
  default: {
    email: '',
    userId: '',
    password: '',
    name: '',
    studentId: 0,
    company: '',
    track: '',
    verify: '',
  },
});

export const userDataState = selector({
  key: 'userDataState',
  get: async () => {
    const accessToken = getCookie('accessToken');
    if (accessToken === undefined) return false; // 추후에 refreshToken 여부에 따른 추가 로직 구현

    const res = await userFunc();

    return res.data;
  },
  set: ({ set }, newValue) => {
    set(userState, newValue as APILoginType);
  },
});
