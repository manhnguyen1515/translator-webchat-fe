import { Button, Modal, Select } from 'antd';
import * as React from 'react';
import { FAKE_LIST_USER, PROFILE_MODAL_TITLE, REGISTER_EMAIL_TITLE, REGISTER_NICKNAME_TITLE, REGISTER_REGION_TITLE, REGISTER_USERNAME_TITLE } from '../../../../../../constants/constant';
import DataField from './DataField';
import { regions } from '../../../../../../pages/user/register';
import LoginTitleS from '../../../../../Text/LoginTitleS';
import { TUserUpdateInput, eRegion } from '../../../../../../constants/types';
import UserService from '../../../../../../services/userServices';
import { AxiosError } from 'axios';
import { Body3 } from '../../../../../Text';
import ChangePassword from './ChangePassword';

interface IProfileModalProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfileModal: React.FunctionComponent<IProfileModalProps> = ({ isOpen, setIsOpen }) => {
    const currentUser = FAKE_LIST_USER[0]
    const [nickname, setNickname] = React.useState<string>(currentUser.nickname)
    const [isChangePassword, setIsChangePassword] = React.useState<boolean>(false)
    const onChangePassword = () => {
        setIsChangePassword(true)
    };
    // const onConfirm = async () => {
    //     setIsOpen(false)
    //     const accountCreate: TUserUpdateInput = {
    //         email: currentUser.email,
    //         username: currentUser.username,
    //         nickname,
    //         regionCountry: region,
    //     }
    //     try {
    //         const result = await UserService.update(accountCreate)
    //     } catch (error: any | AxiosError) { }
    // }
    return <>
        <Modal title={PROFILE_MODAL_TITLE} open={isOpen} onCancel={() => setIsOpen(false)}>
            <DataField title={REGISTER_EMAIL_TITLE} value={currentUser.email} />
            <DataField title={REGISTER_USERNAME_TITLE} value={currentUser.username} />
            <DataField title={REGISTER_NICKNAME_TITLE} value={currentUser.nickname} />
            <div className='mt-[1rem]'>
                <LoginTitleS>{REGISTER_REGION_TITLE}</LoginTitleS>
                <Select
                    disabled={true}
                    placeholder={"Choose " + REGISTER_REGION_TITLE}
                    optionFilterProp="label"
                    options={regions}
                    className='mt-[0.5rem] h-[3rem] text-[2rem] text-xl'
                    size='large'
                    labelRender={(i) => {
                        return <Body3 className='text-[18px]'>{i.value}</Body3>
                    }}
                    defaultValue={currentUser.regionCountry}
                />
            </div>
            <Button className='w-[180px] mt-[1.5rem] h-[3rem] bg-turquoise-D30 text-[18px] font-6 leading-[32px] text-neutral-White rounded-[4px]' onClick={onChangePassword}>Change password</Button>
        </Modal>
        <ChangePassword isOpen={isChangePassword} setIsOpen={setIsChangePassword}/>
    </>;
};

export default ProfileModal;
