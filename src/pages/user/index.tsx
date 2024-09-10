import * as React from "react";
import Background from "./components/Background";
import "./login.scss";
import { LOGIN_BG_IMAGE } from "../../constants/constant";

interface ILoginPageProps {
  Element: React.FC
  title: string
  subtitle: string
}
const LoginPage: React.FunctionComponent<ILoginPageProps> = ({ Element, title, subtitle }) => {
  
  return (
    <div>
      <Background Element={Element} title={title} subtitle={subtitle}/>
    </div>
  );
};

export default LoginPage;
