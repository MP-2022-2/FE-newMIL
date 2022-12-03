import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import useLogin from '@/Utils/Hooks/useLogin';
import BoardPage from '@/Pages/Board';
import Post from '@/Pages/Board/Components/Post';
import ErrorPage from '@/404';

const LoginRoute = () => {
  const status = useLogin();

  return status ? <Outlet /> : <Navigate to="/user/login" />;
};

const LoginRoutes = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route element={<LoginRoute />}>
        <Route path="board/자유" element={<BoardPage />} />
        <Route path="board/질문" element={<BoardPage />} />
        <Route path="board/졸업생" element={<BoardPage />} />
        <Route path="board/재학생" element={<BoardPage />} />
        <Route path="board/자유/:id" element={<Post />} />
      </Route>
      <Route element={<ErrorPage />} path="*" />
    </Routes>
  );
};

export default LoginRoutes;
