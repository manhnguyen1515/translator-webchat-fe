import { RouteObject, useRoutes } from "react-router-dom";
import "./App.less";
import 'react-chat-elements/dist/main.css';
import AuthProvider from "./context/AuthContext";
import TestPage from "./pages/test";
import { PAGE_TEST, PAGE_SIGN_IN, LOGIN_TITLE, LOGIN_SUBTITLE, PAGE_SIGN_UP, REGISTER_SUBTITLE, REGISTER_TITLE, PAGE_DEFAULT, PAGE_CHANGE_PASSWORD_EMAIL, CHANGE_PW_EMAIL_TITLE, CHANGE_PW_EMAIL_SUBTITLE, PAGE_CHANGE_PASSWORD_NEW, CHANGE_PW_NEW_SUBTITLE, CHANGE_PW_NEW_TITLE } from "./constants/constant";
import LoginPage from "./pages/user";
import LoginForm from "./pages/user/login";
import RegisterForm from "./pages/user/register";
import ChatFrame from "./pages/chat";
import Layout from "./components/common/Layout/Layout";
import { ChatProvider } from "./context/ChatContext";
import ChangePwEmail from "./pages/user/changePassword/email";
import ChangeNewPw from "./pages/user/changePassword/newPw";
import ProtectedContext from "./context/ProtectedContext";

export default function App() {
  const privateRoutes: RouteObject[] = [
    {
      path: PAGE_TEST,
      element: <ProtectedContext><TestPage /></ProtectedContext>,
    },
    {
      path: PAGE_DEFAULT,
      element:
      <ProtectedContext>
        <Layout>
          <ChatFrame />
        </Layout>
      </ProtectedContext>
      ,
    },
  ];
  const publicRoutes: RouteObject[] = [
    {
      path: PAGE_SIGN_IN,
      element: <LoginPage Element={LoginForm} title={LOGIN_TITLE} subtitle={LOGIN_SUBTITLE} />,
    },
    {
      path: PAGE_SIGN_UP,
      element: <LoginPage Element={RegisterForm} title={REGISTER_TITLE} subtitle={REGISTER_SUBTITLE} />,
    },
    {
      path: PAGE_CHANGE_PASSWORD_EMAIL,
      element: <LoginPage Element={ChangePwEmail} title={CHANGE_PW_EMAIL_TITLE} subtitle={CHANGE_PW_EMAIL_SUBTITLE} />,
    },
    {
      path: PAGE_CHANGE_PASSWORD_NEW,
      element: <LoginPage Element={ChangeNewPw} title={CHANGE_PW_NEW_TITLE} subtitle={CHANGE_PW_NEW_SUBTITLE} />,
    },
  ];
  const elements = useRoutes([...publicRoutes, ...privateRoutes]);
  return <>
    <AuthProvider>
      <ChatProvider>
        {elements}
      </ChatProvider>
    </AuthProvider>
  </>;
}
