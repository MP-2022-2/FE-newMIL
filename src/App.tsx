import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '@/Pages/Login';
import Navigation from '@/Components/Header';
import MainPage from '@/Pages/Main';

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/CIL" element={'CIL'} />
        <Route path="/talk" element={'소통'} />
        <Route path="/professor" element={'교수님'} />
        <Route path="/*" element={'404 Not Found'} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
