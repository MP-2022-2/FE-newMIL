import { atom } from 'recoil';

export const visible = atom<boolean>({
  key: 'visible',
  default: true,
});
