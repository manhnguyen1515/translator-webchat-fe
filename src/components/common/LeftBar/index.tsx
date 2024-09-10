import * as React from 'react';
import DirectMessage from './DirectMessage';
import { TUserInfoDesign } from '../../../constants/types';
import { randomColor } from '../../../utils/helper';
import UserService from '../../../services/userServices';
import { AuthContext } from '../../../context/AuthContext';

interface ILeftBarProps {
}

const LeftBar: React.FunctionComponent<ILeftBarProps> = (props) => {
    const [users, setUsers] = React.useState<TUserInfoDesign[]>();
    const { userInfo } = React.useContext(AuthContext)!;

    React.useEffect(() => {
        (async () => {
            if (userInfo) {
                const res = await UserService.getAllUsers();
                const users = res.data.data;

                const usersDesign = users?.filter(user => user.username !== userInfo.user.username).map((user) => {
                    return {
                        design: {
                            color: randomColor(),
                        },
                        user: user
                    }
                })

                setUsers(usersDesign);
            }
        })()
    }, [userInfo]);
    return <>
        <div className='w-[244px] flex h-full bg-[#3F0E40] px-[20px]'>
            {users && <DirectMessage users={users}/>}
        </div>
    </>;
};

export default LeftBar;
