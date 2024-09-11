import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Session } from './Session';

import Navigator from './Pages/Navigator';

import Index from './Pages/Index';

import SignIn from './Pages/User/SignIn'
import FindAccount from './Pages/User/FindAccount';

import SignUp from './Pages/User/SignUp';
import Kakao from './Pages/User/Kakao';

import MyPage from './Pages/User/MyPage';
import ChangePassword from './Pages/User/ChangePassword';
import Delete from './Pages/User/Delete';

import GeneralList from './Pages/General/GeneralList';
import GeneralWrite from './Pages/General/GeneralWrite';

import MatchingList from './Pages/Matching/MatchingList';
import MatchingWrite from './Pages/Matching/MatchingWrite';
import Ranking from './Pages/Ranking';

import PageNotFound from './Pages/PageNotFound';

function App() {

  const location = useLocation();

  const { handleUser } = useContext(UserContext);

  useEffect(() => {
    const fetchSessionData = async () => {
      const response = await Session();
      if (response) {
        handleUser(response.uEmail, response.uNickname);
      }
    };

    fetchSessionData();
  }, []);

  return (
    <>
      {/* 
        헤더
      */}
      {!location.pathname.startsWith('/404') &&
        <div className="relative w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
          <Navigator />
          <Ranking />
        </div>
      }
      <Routes>
        <Route path='/' element={<Index />} />

        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/findaccount' element={<FindAccount />} />

        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/kakao/callback' element={<Kakao />} />

        <Route path='/user/mypage' element={<MyPage />} />
        <Route path='/user/changepassword' element={<ChangePassword />} />
        <Route path='/user/delete' element={<Delete />} />

        <Route path='/general/list' element={<GeneralList />} />
        <Route path='/general/write' element={<GeneralWrite />} />

        <Route path='/matching/list' element={<MatchingList />} />
        <Route path='/matching/write' element={<MatchingWrite />} />

        {/* 404 페이지 처리 */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;