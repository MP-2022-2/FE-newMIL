import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import useLogin from '@/Utils/Hooks/useLogin';
import BoardPage from '@/Pages/Board';

const LoginRoute = () => {
  const status = useLogin();

  return status ? <Outlet /> : <Navigate to="/user/login" />;
};

const LoginRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route element={<LoginRoute />}>
        <Route path="board" element={<BoardPage />} />
      </Route>
      <Route element={'404 Not Found'} path="*" />
    </Routes>
  );
};

export default LoginRoutes;
