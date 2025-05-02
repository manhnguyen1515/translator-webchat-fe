import * as React from 'react';
import { TUserInfoDesign } from '../../../constants/types';
import DefaultUser from '../../../components/Icons/DefaultUser';
import { Body1, Body3 } from '../../../components/Text';
import { Select } from 'antd';
import { regions } from '../../user/register';
import { useSearchParams } from 'react-router-dom';
import { ChatContext } from '../../../context/ChatContext';

interface IChatHeaderProps {
    user: TUserInfoDesign
}

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = ({ user }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { selectedUser } = React.useContext(ChatContext)!;

    const updateQueryString = (key: string, value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
      };
    const handleChangeLanguage = (e: any) => {
        updateQueryString("language", e)
    }

    return <>
        <div className='h-[49px] flex flex-row gap-[8px] items-center px-[20px] w-full border border-t-0 border-l-0 border-r-0'>
            <DefaultUser color={user.design.color} />
            <Body1 className={`text-[#1D1C1D] `}>{user.user.nickname}</Body1>
            <Select
                placeholder={selectedUser?.user.regionCountry || "Select Language"}
                optionFilterProp="label"
                onChange={handleChangeLanguage}
                options={regions}
                className='mb-[0.5rem] h-[3rem]'
                labelRender={(i) => {
                    return <Body3 className='text-[18px]'>{i.label}</Body3>
                }}
                size='large'
            />
        </div>
    </>;
};

export default ChatHeader;
