import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import useLogin from '@/Utils/Hooks/useLogin';
import BoardPage from '@/Pages/Board';
import Post from '@/Pages/Board/Post';
import ErrorPage from '@/404';
import Editor from '@/Pages/Board/Editor';

const LoginRoute = () => {
  const status = useLogin();

  return status ? <Outlet /> : <Navigate to="/user/login" />;
};

const LoginRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<LoginRoute />}>
        <Route path="board">
          <Route path=":boardPath" element={<BoardPage />} />
          <Route path=":boardPath/:id" element={<Post />} />
          <Route path="edit" element={<Editor />} />
        </Route>
      </Route>
      <Route element={<ErrorPage />} path="*" />
    </Routes>
  );
};

export default LoginRoutes;
