import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@/Pages/Login';
import SignUpPage from '@/Pages/SignUp';
import MainPage from '@/Pages/Main';
import Header from '@/Components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/login" element={<LoginPage />} />
          <Route path="/user/signup" element={<SignUpPage />} />
          <Route path="/cil" element={'CIL'} />
          <Route path="/media" element={'media'} />
          <Route path="/talk" element={'소통'} />
          <Route path="/professor" element={'교수님'} />
          <Route path="/*" element={'404 Not Found'} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
