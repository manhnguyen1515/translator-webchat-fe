import { Modal } from 'antd';
import * as React from 'react';
import { CHANGE_NEW_PASS_TITLE, CHANGE_OLD_PASS_TITLE, CHANGE_PW_EMAIL_TITLE, CHANGE_PW_WRONG_PASS_TEXT, PASSWORD_MIN_LENGTH, PW_CHECK_CAPITAL_TEXT, PW_CHECK_MIN_LENGTH_TEXT, PW_CHECK_NUMBER_TEXT, PW_CHECK_SPECIAL_CHAR_TEXT, REGISTER_CONFIRM_PASS_PLACEHOLDER, REGISTER_CONFIRM_PASS_TITLE, REGISTER_PASS_PLACEHOLDER, REGISTER_PASS_TITLE, REGISTER_WRONG_CONFIRM_PASS_TEXT, RESP_STATUS_CODE_USER_ERROR, SPECIAL_CHARACTERS } from '../../../../../../constants/constant';
import CheckItem from '../../../../../../pages/user/components/CheckItem';
import PasswordInput from '../../../../../../pages/user/components/PasswordInput';
import { TUserChangePassInput } from '../../../../../../constants/types';
import axios, { AxiosError } from 'axios';
import UserService from '../../../../../../services/userServices';
import XIcon from '../../../../../Icons/XIcon';
import LoginBodyS from '../../../../../Text/LoginBodyS';
import { AuthContext } from '../../../../../../context/AuthContext';

interface IChangePasswordProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePassword: React.FunctionComponent<IChangePasswordProps> = ({ isOpen, setIsOpen }) => {
    const {userInfo} = React.useContext(AuthContext)!
    const [errorText, setErrorText] = React.useState<string>(REGISTER_WRONG_CONFIRM_PASS_TEXT)
    const [oldPassword, setOldPassword] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const [checkLength, setCheckLength] = React.useState<boolean>()
    const [checkCapital, setCheckCapital] = React.useState<boolean>()
    const [checkNumber, setCheckNumber] = React.useState<boolean>()
    const [checkSpecial, setCheckSpecial] = React.useState<boolean>()
    const [isMatch, setIsMatch] = React.useState<boolean>(true)
    React.useMemo(() => {
        setCheckLength(password.length >= PASSWORD_MIN_LENGTH)
        setCheckCapital(password !== password.toLowerCase())
        setCheckNumber(/\d/.test(password))
        setCheckSpecial(SPECIAL_CHARACTERS.test(password))
        if (confirmPassword && confirmPassword.length >= password.length) {
            setIsMatch(password === confirmPassword)
        }

    }, [password, confirmPassword])
    const onConfirm = async () => {
        if (!isMatch || confirmPassword !== password) {
            setIsMatch(false)
            return
        }
        try {
            const changeInput: TUserChangePassInput = {
                email: userInfo!.user.email,
                oldPassword,
                newPassword: password
            }
            const result = await UserService.changePassword(changeInput)
            if (result) {
                setIsOpen(false)
            }
        } catch (error: any | AxiosError) {
            if (axios.isAxiosError(error)) {
                if (error.response?.status === RESP_STATUS_CODE_USER_ERROR) {
                    setErrorText(CHANGE_PW_WRONG_PASS_TEXT)
                    setIsMatch(true)
                }
            }
        }
    }
    return <>
        <Modal title={CHANGE_PW_EMAIL_TITLE} open={isOpen} onCancel={() => setIsOpen(false)} onOk={onConfirm} centered={true}>
            <PasswordInput title={CHANGE_OLD_PASS_TITLE} hasValue={oldPassword.length > 0} onChangeValue={(v: string) => {
                setOldPassword(v)
            }} placeholder={REGISTER_PASS_PLACEHOLDER} />
            <PasswordInput title={CHANGE_NEW_PASS_TITLE} hasValue={password.length > 0} onChangeValue={(v: string) => {
                setPassword(v)
            }} placeholder={REGISTER_PASS_PLACEHOLDER} />
            <div className='mt-[0.5rem] flex flex-col gap-[0.5rem]'>
                <CheckItem text={PW_CHECK_MIN_LENGTH_TEXT} isChecked={checkLength} />
                <CheckItem text={PW_CHECK_CAPITAL_TEXT} isChecked={checkCapital} />
                <CheckItem text={PW_CHECK_NUMBER_TEXT} isChecked={checkNumber} />
                <CheckItem text={PW_CHECK_SPECIAL_CHAR_TEXT} isChecked={checkSpecial} />
            </div>
            <div className='mt-[0.5rem]'>
                <PasswordInput title={REGISTER_CONFIRM_PASS_TITLE} hasValue={confirmPassword.length > 0} onChangeValue={(v: string) => {
                    setConfirmPassword(v)
                }} placeholder={REGISTER_CONFIRM_PASS_PLACEHOLDER} />
            </div>
            {!isMatch && <>
                <div className='w-full mt-[0.5rem] bg-sys-alert-light p-[1rem] flex gap-[0.5rem]'>
                    <div className='w-[1.5rem] h-[1.5rem]'>
                        <XIcon />
                    </div>
                    <LoginBodyS className='text-sys-alert-bold'>{errorText}</LoginBodyS>
                </div>
            </>}
        </Modal>
    </>;
};

export default ChangePassword;
