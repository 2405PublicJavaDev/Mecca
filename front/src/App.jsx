import { useEffect, useState, EventHandler, ReactNode, useContext } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserContext } from './UserContext';
import { Session } from './Session';

import PageNotFound from './Pages/PageNotFound';

import Navigator from './Pages/Navigator';
import Ranking from './Pages/Ranking';
import UserInfo from './Pages/User/UserInfo';

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
import GeneralDetail from './Pages/General/GeneralDetail';

import MatchingList from './Pages/Matching/MatchingList';
import MatchingWrite from './Pages/Matching/MatchingWrite';

import AnnounceList from './Pages/Announce/AnnounceList';
import AnnounceWrite from './Pages/Announce/AnnounceWrite';
import AnnounceDetail from './Pages/Announce/AnnounceDetail';

import SupportWrite from './Pages/SupportWrite';

import AdminPanel from './Pages/Admin/AdminPanel';

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
        <div className="w-[1440px] h-[1024px] flex flex-col items-center justify-start gap-[72px] bg-[#fff] overflow-hidden">
          <Navigator />
          <Ranking />
        </div>
      }
      <Routes>
        <Route path='/' element={<Index />} />

        <Route path='/user/info' element={<UserInfo />} />

        <Route path='/user/signin' element={<SignIn />} />
        <Route path='/user/findaccount' element={<FindAccount />} />

        <Route path='/user/signup' element={<SignUp />} />
        <Route path='/kakao/callback' element={<Kakao />} />

        <Route path='/user/mypage' element={<MyPage />} />
        <Route path='/user/changepassword' element={<ChangePassword />} />
        <Route path='/user/delete' element={<Delete />} />

        <Route path='/general/list' element={<GeneralList />} />
        <Route path='/general/write' element={<GeneralWrite />} />
        <Route path='/general/detail' element={<GeneralDetail />} />

        <Route path='/matching/list' element={<MatchingList />} />
        <Route path='/matching/write' element={<MatchingWrite />} />

        <Route path='/announce/list' element={<AnnounceList />} />
        <Route path='/announce/write' element={<AnnounceWrite />} />
        <Route path='/announce/detail' element={<AnnounceDetail />} />

        <Route path='/support/write' element={<SupportWrite />} />

        <Route path='/admin' element={<AdminPanel />} />

        {/* 404 페이지 처리 */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;