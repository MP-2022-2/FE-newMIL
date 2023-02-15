import { ToastTypes } from '@/Components/Toast/types';
import { useRecoilState } from 'recoil';
import { setToastState } from '@/Utils/Stores/Recoil/toast';
import { useCallback } from 'react';

type UseToastMessageReturn = {
  openToastMessage: (message: string, type?: ToastTypes) => void;
  closeToastMessage: () => void;
};

export default function useToastMessage(timeout?: number): UseToastMessageReturn {
  const [toast, setToast] = useRecoilState(setToastState);

  const openToastMessage = useCallback(
    (message: string, type?: ToastTypes) => {
      setToast({ message, timeout: timeout ?? 1500, type: type ?? 'error' });
    },
    [toast.message, toast.type],
  );

  const closeToastMessage = () => {
    setToast({ ...toast, message: '' });
  };

  return { openToastMessage, closeToastMessage };
}
