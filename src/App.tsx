import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import Navigation from './Components/Header';

const App = () => (
  <>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CIL" element={'CIL'} />
        <Route path="/talk" element={'소통'} />
        <Route path="/professor" element={'교수님'} />
        <Route path="/*" element={'404 Not Found'} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
