import * as React from 'react';
import { useAuth } from '../../../../../context/AuthContext';

interface ILogoutProps {
}

const Logout: React.FunctionComponent<ILogoutProps> = ({...props}) => {
    const authContext = useAuth();
    const onLogout = () => {
        authContext?.logout()
    }
    return <>
        <div className='w-[100px] h-[2rem] flex items-center' onClick={onLogout}>Logout</div>
    </>;
};

export default Logout;
