import { ToastFunction, ToastProps } from './types';
import { ToastContainer } from './style';

export const ToastMessage: ToastFunction = (props: ToastProps) => {
  const { message } = props;

  return <ToastContainer>{message}</ToastContainer>;
};

export default ToastMessage;
