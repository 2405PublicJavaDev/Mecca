import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './Pages';
import Kakao from './Pages/User/Kakao';
import SignIn from './Pages/User/SignIn'
import SignUp from './Pages/User/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/kakao/callback' element={<Kakao />} />
      </Routes>
    </Router>
  );
}

export default App;