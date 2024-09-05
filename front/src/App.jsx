import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Index from './Pages';
import Kakao from './Pages/User/Kakao';
import SignIn from './Pages/User/SignIn'
import SignUp from './Pages/User/SignUp';

function App() {
  const [uEmail, setUEmail] = useState('');
  const [uPassword, setUPassword] = useState('');

  const handleUser = (email, password) => {
    // console.log(email);

    setUEmail(email);
    setUPassword(password);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index email={uEmail} password={uPassword} />} />
        <Route path='/user/signin' onSignIn={handleUser} element={<SignIn />} />
        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/kakao/callback' element={<Kakao />} />
      </Routes>
    </Router>
  );
}

export default App;