import { Route, Routes } from "react-router";
import RootLayout from "./layouts/RootLayout";
import MainPage from "./pages/main/MainPage";
import EditorPage from "./pages/editor/EditorPage";
import PostDetailPage from "./pages/post/PostDetailPage";
import Event from "./pages/event/Event";
import Login from "./pages/login/LoginPage";
import MyPage from "./pages/mypage/MyPage";
import SignUpPage from "./pages/signup/SignUpPage";
import SignUpSuccessPage from "./pages/signup/SignUpSuccessPage";
import PasswordResetPage from "./pages/password/PasswordResetPage";
import { useLoginStore } from "./store/loginStore";
import { useEffect, useState } from "react";
import { tokenService } from "./utils/token";
import Private from "./layouts/Private";
import NonPrivate from "./layouts/NonPrivate";
import Loading from "./components/Loading";
import CapsuleListPage from "./components/CapsuleListPage";
import AlarmListPage from "./components/AlarmListPage";
import Error404 from "./components/Error404";
import UserInfoPage from "./pages/userinfo/UserInfoPage";
import EventEditorPage from "./pages/editor/EventEditorPage";
import MyFollowersPage from "./pages/userinfo/MyFollowerPage";
import MyFollowingPage from "./pages/userinfo/MyFollowingPage";
import { useThemeStore } from "./store/themeStore";

export default function App() {
 // 새로고침할때마다 session storage에서 token 받아와서 로그인
 const login = useLoginStore((state) => state.login);
 // 처음에 렌더링될때 isLoggedIn이 false가 되는것을 방지
 const [isLoading, setIsLoading] = useState(true);
 const { isDark } = useThemeStore();

 const getUser = async () => {
   try {
     if (tokenService.getToken()) {
       login(tokenService.getToken());
     }
   } catch (err) {
     console.error(err);
   } finally {
     setIsLoading(false);
   }
 };

 useEffect(() => {
   getUser();
 }, []);

 // 다크모드 초기화를 위한 별도의 useEffect
 useEffect(() => {
   // isDark 상태에 따라 HTML 클래스 설정
   if (isDark) {
     document.documentElement.classList.add('dark');
   } else {
     document.documentElement.classList.remove('dark');
   }
 }, [isDark]); // isDark가 변경될 때마다 실행

 if (isLoading) return <Loading />;

 return (
   <>
     <Routes>
       <Route element={<RootLayout />}>
         <Route element={<Private />}>
           <Route path="/mypage" element={<MyPage />} />
           <Route path="/editor" element={<EditorPage />} />
           <Route path="/eventeditor" element={<EventEditorPage />} />
           <Route path="/detail/:postId" element={<PostDetailPage />} />
           <Route path="/resetpassword" element={<PasswordResetPage />} />
           <Route path="/capsule-list" element={<CapsuleListPage />} />
           <Route path="/alarm-list" element={<AlarmListPage />} />
         </Route>
         <Route path="/" element={<MainPage />} />
         <Route path="/event" element={<Event />} />
         <Route path="/userinfo/:fullname" element={<UserInfoPage />} />
         <Route path="/userinfo/:fullname/myfollower" element={<MyFollowersPage />} />
         <Route path="/userinfo/:fullname/myfollowing" element={<MyFollowingPage />} />
         <Route element={<NonPrivate />}>
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<SignUpPage />} />
           <Route path="/signupsuccess" element={<SignUpSuccessPage />} />
         </Route>
         <Route path="*" element={<Error404 />} />
       </Route>
     </Routes>
   </>
 );
}