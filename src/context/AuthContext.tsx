import * as React from "react";
import { createContext, useContext } from "react";
import { TUserLogin } from "../constants/types";
import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN, PAGE_DEFAULT, PAGE_SIGN_IN } from "../constants/constant";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  userInfo: TUserLogin | undefined;
  setUserInfo: React.Dispatch<React.SetStateAction<TUserLogin | undefined>>;
  token: string;
  logout: () => void
}
export const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [userInfo, setUserInfo] = React.useState<TUserLogin>();
  const [token, setToken] = React.useState<string>('');
  const navigate = useNavigate();
  React.useEffect(() => {
    const localToken = localStorage.getItem(LS_ACCESS_TOKEN)
    if (!userInfo && !localToken) {
      navigate(PAGE_SIGN_IN)
    } else if (userInfo) {
      setToken(userInfo.accessToken)
      localStorage.setItem(LS_ACCESS_TOKEN, userInfo.accessToken)
      navigate(PAGE_DEFAULT)
    }
  }, [userInfo]);

  const logout = () => {
    navigate(PAGE_SIGN_IN)
    setUserInfo(undefined)
    localStorage.removeItem(LS_ACCESS_TOKEN);
    localStorage.removeItem(LS_REFRESH_TOKEN);
  }

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth(): IAuthContext | undefined {
  const authContext = useContext(AuthContext);
  return authContext;
}
