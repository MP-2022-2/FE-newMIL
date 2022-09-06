import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import useLogin from '@/Hooks/useLogin';

const LoginRoute = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useLogin();

  return isLoggedIn ? <Navigate to="/login" /> : { children };
};

export default LoginRoute;
