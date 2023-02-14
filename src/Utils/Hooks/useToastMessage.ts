import { ToastTypes } from '@/Components/Toast/types';
import { useRecoilState } from 'recoil';
import { setToastState } from '@/Utils/Store/Recoil/toast';
import { useCallback } from 'react';

type UseToastMessageReturn = (message: string, type?: ToastTypes) => void;

export default function useToastMessage(timeout?: number): UseToastMessageReturn {
  const [toast, setToast] = useRecoilState(setToastState);

  const openToastMessage = useCallback(
    (message: string, type?: ToastTypes) => {
      setToast({ message, timeout: timeout ?? 2000, type: type ?? 'error' });
    },
    [toast.message, toast.type],
  );

  return openToastMessage;
}
