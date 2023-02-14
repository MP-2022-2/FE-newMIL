import { atom, selector } from 'recoil';
import { ToastProps } from '@/Components/Toast/types';

const toastState = atom<ToastProps>({
  key: 'toastState',
  default: {
    message: '',
    timeout: 2000,
    type: 'error',
  },
});

export const setToastState = selector({
  key: 'setToastState',
  get: ({ get }) => get(toastState),
  set: ({ set }, newToastMessage) => {
    set(toastState, newToastMessage as ToastProps);
  },
});
