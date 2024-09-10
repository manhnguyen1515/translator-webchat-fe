import * as React from 'react';
import { DEFAULT_USER_COLOR } from '../../../../../constants/constant';
import DefaultUser from '../../../../Icons/DefaultUser';
import { MenuProps, Dropdown, Button } from 'antd';
import UserMenuLayout from './UserMenuLayout';
import Logout from './Logout';
import Profile from './Profile';

interface IUserMenuProps {
}

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Profile />
        ),
    },
    {
        key: '2',
        label: (
            <Logout />
        ),
    },
];

const UserMenu: React.FunctionComponent<IUserMenuProps> = (props) => {
    return <>
        <div className='cursor-pointer w-fit'>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
                <div onClick={(e) => e.preventDefault()}>
                    <DefaultUser color={DEFAULT_USER_COLOR} />
                </div>
            </Dropdown>
        </div>
    </>;
};

export default UserMenu;
