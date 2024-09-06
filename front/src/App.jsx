import { Route, Routes, useNavigate } from 'react-router-dom';
import { UserProvider } from './UserContext';

import Navigator from './Pages/Navigator';

import Index from './Pages';

import SignIn from './Pages/User/SignIn'
import FindAccount from './Pages/User/FindAccount';
import ChangePasswordForFindAccount from './Pages/User/ChangePasswordForFindAccount';

import SignUp from './Pages/User/SignUp';
import Verify from './Pages/User/Verify';
import Kakao from './Pages/User/Kakao';

import MyPage from './Pages/User/MyPage';
import SignOut from './Pages/User/SignOut';

import GeneralList from './Pages/Matching/MatchingList';
import GeneralWrite from './Pages/Matching/MatchingWrite';

import MatchingList from './Pages/Matching/MatchingList';
import MatchingWrite from './Pages/Matching/MatchingWrite';
import Ranking from './Pages/Ranking';

function App() {
  return (
    <UserProvider>

      {/* 
        헤더
      */}
      <div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
        <Navigator />
        <Ranking />
      </div>

      <Routes>
        <Route path='/' element={<Index />} />

        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/findaccount' element={<FindAccount />} />
        <Route path='/user/changepasswordforfindaccount' element={<ChangePasswordForFindAccount />} />

        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/user/signup/verify' element={<Verify />} />
        <Route path='/kakao/callback' element={<Kakao />} />

        <Route path='/user/mypage' element={<MyPage />} />
        <Route path='/user/signout' element={<SignOut />} />

        <Route path='/general/list' element={<GeneralList />} />
        <Route path='/general/write' element={<GeneralWrite />} />

        <Route path='/matching/list' element={<MatchingList />} />
        <Route path='/matching/write' element={<MatchingWrite />} />
      </Routes>

    </UserProvider >
  );
}

export default App;