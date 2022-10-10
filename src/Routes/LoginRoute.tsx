import { Navigate, Outlet } from 'react-router-dom';

import useLogin from '@/Utils/Hooks/useLogin';

const LoginRoute = () => {
  const { isLoggedIn } = useLogin();

  return isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
};

export default LoginRoute;
