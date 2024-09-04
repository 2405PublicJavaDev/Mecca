import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './Pages';
import KakaoTest from './Pages/kakaoTest';
import SignUp from './Pages/User/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/kakao/callback' element={<KakaoTest />} />
      </Routes>
    </Router>
  );
}

export default App;