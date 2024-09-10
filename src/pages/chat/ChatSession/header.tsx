import * as React from 'react';
import { TUserInfoDesign } from '../../../constants/types';
import DefaultUser from '../../../components/Icons/DefaultUser';
import { Body1, Body3 } from '../../../components/Text';
import { Select } from 'antd';
import { regions } from '../../user/register';
import { useSearchParams } from 'react-router-dom';

interface IChatHeaderProps {
    user: TUserInfoDesign
}

const ChatHeader: React.FunctionComponent<IChatHeaderProps> = ({ user }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const languages = [...regions, {
        value: "Default",
        label: "Default",
    }];

    const updateQueryString = (key: string, value: string) => {
        searchParams.set(key, value);
        setSearchParams(searchParams);
      };
    const handleChangeLanguage = (e: any) => {
        if (e === "Default") {
            searchParams.delete("language");
            setSearchParams(searchParams);
        } else {
            updateQueryString("language", e)
        }
    }

    return <>
        <div className='h-[49px] flex flex-row gap-[8px] items-center px-[20px] w-full border border-t-0 border-l-0 border-r-0'>
            <DefaultUser color={user.design.color} />
            <Body1 className={`text-[#1D1C1D] `}>{user.user.nickname}</Body1>
            <Select
                placeholder={"Choose Language"}
                optionFilterProp="label"
                onChange={handleChangeLanguage}
                options={languages}
                className='mb-[0.5rem] h-[3rem]'
                labelRender={(i) => {
                    return <Body3 className='text-[18px]'>{i.value}</Body3>
                }}
                size='large'
            />
        </div>
    </>;
};

export default ChatHeader;
