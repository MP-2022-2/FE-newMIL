import { Icon } from '@iconify/react';
import theme from '@/Styles/theme';
import { useRecoilState } from 'recoil';
import { setToastState } from '@/Recoil/toast';
import { useState, useCallback, useEffect, useRef } from 'react';
import { ToastFunction } from './types';
import { ToastContainer } from './style';

const color = [
  { type: 'success', icon: 'mdi:success-circle', color: `${theme.color.good}` },
  { type: 'warn', icon: 'material-symbols:warning-rounded', color: `${theme.color.ajouGold}` },
  { type: 'error', icon: 'ic:baseline-error', color: `${theme.color.bad}` },
];

export const ToastMessage: ToastFunction = () => {
  const [toast, setToast] = useRecoilState(setToastState);
  const toastId = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [animationState, setAnimationState] = useState<string>('fadeIn');
  const isType = color.filter((e) => e.type === toast.type);

  const removeToast = useCallback(() => {
    if (toastId.current) clearTimeout(toastId.current);
    setAnimationState('fadeOut');
    setTimeout(() => {
      setToast({ ...toast, message: '' });
      setAnimationState('fadeIn');
    }, 350);
  }, [toast.message, toast.type]);

  useEffect(() => {
    if (toast.message === '') return;
    if (toastId.current) clearTimeout(toastId.current);

    toastId.current = setTimeout(() => {
      removeToast();
    }, toast.timeout);
  }, [toast.message]);

  return (
    <>
      {toast.message && (
        <ToastContainer animation={animationState} color={isType[0].color}>
          <Icon icon={isType[0].icon} width="36" height="36" color={isType[0].color} />
          <caption>{toast.message}</caption>
        </ToastContainer>
      )}
    </>
  );
};

export default ToastMessage;
