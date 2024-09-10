import * as React from 'react';
import { TUserInfo, TUserInfoDesign } from '../../../../../constants/types';
import { Body3 } from '../../../../Text';
import DefaultUser from '../../../../Icons/DefaultUser';
import { randomColor } from '../../../../../utils/helper';
import { ChatContext } from '../../../../../context/ChatContext';

interface IDMUserProps {
    user: TUserInfoDesign
    isSelected: boolean
}

const DMUser: React.FunctionComponent<IDMUserProps> = ({ user, isSelected }) => {
    const {setSelectedUser} = React.useContext(ChatContext)!
    const onClick = () => {
        setSelectedUser(user)
    }
    return <>
        <div className='h-[26px] flex flex-row gap-[8px] items-center cursor-pointer w-fit' onClick={onClick}>
            <DefaultUser color={user.design.color}/>
            <Body3 className={`text-neutral-White opacity-70 ${isSelected && 'font-7'}`}>{user.user.nickname}</Body3>
        </div>
    </>;
};

export default DMUser;
