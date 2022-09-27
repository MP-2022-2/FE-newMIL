import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@/Pages/Login';
import SignUpPage from '@/Pages/SignUp';
import MainPage from '@/Pages/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user">
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>
          <Route path="/media">
            <Route path="professor" element={'교수님 소개'} />
            <Route path="graduate" element={'졸업 요건'} />
            <Route path="interview" element={'인터뷰'} />
          </Route>
          <Route path="talk" element={'게시판'} />
          <Route path="/cil" element={'CIL'} />
          <Route path="/*" element={'404 Not Found'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
