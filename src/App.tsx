import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@/Pages/Login';
import SignUpPage from '@/Pages/SignUp';
import Navigation from '@/Components/Header';
import MainPage from '@/Pages/Main';

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cil" element={'CIL'} />
        <Route path="/media" element={'media'} />
        <Route path="/talk" element={'소통'} />
        <Route path="/professor" element={'교수님'} />
        <Route path="/*" element={'404 Not Found'} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
