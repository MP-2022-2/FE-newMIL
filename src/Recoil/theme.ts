import { atom } from 'recoil';

export const visible = atom<boolean>({
  key: 'visible',
  default: true,
});

export const boardState = atom<string>({
  key: 'boardState',
  default: '자유',
});

export const trackState = atom<string>({
  key: 'trackState',
  default: '전체',
});
