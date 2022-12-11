import { atom } from 'recoil';

export const selectedSubject = atom<string[] | string>({
  key: 'selectedSubject',
  default: [],
});
