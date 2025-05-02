import * as React from "react";
import { createContext, useContext } from "react";
import { TUserLogin } from "../constants/types";
import { LS_ACCESS_TOKEN, LS_REFRESH_TOKEN } from "../constants/constant";
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
    if (userInfo) {
      setToken(userInfo.accessToken)
      localStorage.setItem(LS_ACCESS_TOKEN, userInfo.accessToken)
    }
  }, [userInfo]);
  
  const logout = React.useCallback(() => {
    localStorage.removeItem(LS_ACCESS_TOKEN);
    localStorage.removeItem(LS_REFRESH_TOKEN);
    setUserInfo(undefined);
    navigate("/signin");
   }, [navigate]);

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
