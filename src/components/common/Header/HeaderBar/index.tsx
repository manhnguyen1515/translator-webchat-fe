import * as React from 'react';
import { LOGO_IMAGE_WHITE } from '../../../../constants/constant';
import UserMenu from './UserMenu';
import ChatService from '../../../../services/chatServices';
import axios, { AxiosError } from 'axios';
import { TUserInfoDesign } from '../../../../constants/types';
import { Select, SelectProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { ChatContext } from '../../../../context/ChatContext';
import { randomColor } from '../../../../utils/helper';
import { AuthContext } from '../../../../context/AuthContext';

interface IHeaderBarProps {
}

const HeaderBar: React.FunctionComponent<IHeaderBarProps> = (props) => {
    const { userInfo } = React.useContext(AuthContext)!;
    const [searchText, setSearchText] = React.useState<string>('');
    const [friends, setFriends] = React.useState<SelectProps['options']>([]);
    const [choose, setChoose] = React.useState<string>();
    const [userSelect, setUserSelect] = React.useState<TUserInfoDesign | null>(null);
    const {setSelectedUser} = React.useContext(ChatContext)!

    const onChange = (value: string) => {
        const currText = value
        setSearchText(currText)
    }

    const handleChange = (newValue: string) => {
        setChoose(newValue);
        setSelectedUser(userSelect);
    };

    React.useEffect(() => {
        const interval = setTimeout(async () => {
            if (searchText.trim() !== '') {
                try {
                    //search by name
                    const result = await ChatService.searchFriend({ usernameOrNickname: searchText });
                    const data = result.data.data

                    if (data.username !== userInfo?.user?.username) {
                        setUserSelect({
                        user: data,
                        design: {
                            color: randomColor()
                        }});
                        const converted = [{
                            label: data.nickname,
                            value: data.username
                        }]
                        setFriends(converted)
                    }
                } catch (error: any | AxiosError) {
                    if (axios.isAxiosError(error)) {
                        console.error(error);
                    }
                }
            }
        }, 300);
        return () => clearTimeout(interval);
    }, [searchText]);
    return <>
        <div className='w-full h-full flex flex-1 flex-col items-center relative justify-center'>
            <div className='w-full flex flex-row justify-between flex-1 items-center px-[16px]'>
                <div className="w-[150px] h-fit">
                    <img src={LOGO_IMAGE_WHITE} alt="logo" />
                </div>
                <div className='w-[714px] flex flex-row justify-center items-center bg-[#5D3D5E] rounded-[6px] gap-[8px] cursor-pointer'>
                    <Select
                        className='w-full'
                        showSearch
                        value={choose}
                        placeholder={"Search friends"}
                        defaultActiveFirstOption={false}
                        suffixIcon={<SearchOutlined style={{ fontSize: '16px' }} />}
                        filterOption={false}
                        onSearch={onChange}
                        onChange={handleChange}
                        notFoundContent={null}
                        options={(friends || []).map((d) => ({
                            value: d.value,
                            label: d.label,
                        }))}
                    />
                </div>
                <UserMenu />
            </div>
        </div>
    </>;
};

export default HeaderBar;
