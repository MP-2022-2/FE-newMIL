import { BrowserRouter, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import LoginRoutes from '@/Routes/LoginRoute';
import LoginPage from '@/Pages/Login';
import { InfoPage, SignUpPage } from '@/Pages/SignUp';
import MainPage from '@/Pages/Main';
import InterviewPage from '@/Pages/Media/Interview';
import ProfessorPage from '@/Pages/Media/Professor';
import GraduatePage from '@/Pages/Media/Graduate';
import ProfessorDetailPage from '@/Pages/Media/Professor/SubPage';

import { Toast, ToastPortal } from '@/Components/Toast';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <ToastPortal>
        <Toast />
      </ToastPortal>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cil" element={'CIL'} />
          <Route path="media">
            <Route path="professor" element={<ProfessorPage />} />
            <Route
              path="professor/professorDetail/:professorId"
              element={<ProfessorDetailPage />}
            />
            <Route path="graduate" element={<GraduatePage />} />
            <Route path="interview" element={<InterviewPage />} />
          </Route>

          <Route path="user">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup">
              <Route path="info" element={<InfoPage />} />
              <Route path=":role" element={<SignUpPage />} />
            </Route>
          </Route>

          <Route path="/*" element={<LoginRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
