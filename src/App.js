import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Loginpage from './components/login';
import Frontpage from './components/firstpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Loginpage/>} />
    <Route path="/frontpage" element={<Frontpage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
