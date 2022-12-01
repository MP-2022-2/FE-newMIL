import { BrowserRouter, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import LoginRoutes from '@/Routes/LoginRoute';
import LoginPage from '@/Pages/Login';
import SignUpPage from '@/Pages/SignUp';
import MainPage from '@/Pages/Main';
import InterviewPage from '@/Pages/Media/Interview';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cil" element={'CIL'} />
          <Route path="media">
            <Route path="professor" element={'교수님'} />
            <Route path="graduate" element={'졸업 요건'} />
            <Route path="interview" element={<InterviewPage />} />
          </Route>

          <Route path="user">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route path="/*" element={<LoginRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
