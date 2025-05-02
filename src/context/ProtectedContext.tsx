import * as React from "react";
import { TUserLogin } from "../constants/types";
import { LS_ACCESS_TOKEN, PAGE_SIGN_IN } from "../constants/constant";
import { useNavigate } from "react-router-dom";


const ProtectedContext: React.FC = ({ children }) => { 
  const [userInfo, setUserInfo] = React.useState<TUserLogin>();
  const navigate = useNavigate();
  
  React.useEffect(() => {
      const localToken = localStorage.getItem(LS_ACCESS_TOKEN)
      if (!userInfo && !localToken) {
        navigate(PAGE_SIGN_IN)
      }
    }, [navigate, userInfo]);

    return (
      <>{children}</>
    );
}
export default ProtectedContext;