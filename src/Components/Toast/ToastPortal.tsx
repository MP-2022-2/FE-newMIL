import ReactDOM from 'react-dom';
import { ToastPortalFunction } from './types';

const ToastPortal: ToastPortalFunction = ({ children }) => {
  const toastId = document.getElementById('toast');

  return ReactDOM.createPortal(children, toastId!);
};

export default ToastPortal;
