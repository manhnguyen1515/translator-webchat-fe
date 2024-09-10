import * as React from 'react';
import { CHANGE_NEW_PASS_TITLE, CHANGE_PW_WRONG_OTP_PLACEHOLDER, CHANGE_PW_WRONG_OTP_TEXT, OTP_TITLE, PAGE_SIGN_IN, PASSWORD_MIN_LENGTH, PW_CHECK_CAPITAL_TEXT, PW_CHECK_MIN_LENGTH_TEXT, PW_CHECK_NUMBER_TEXT, PW_CHECK_SPECIAL_CHAR_TEXT, REGISTER_CONFIRM_PASS_PLACEHOLDER, REGISTER_CONFIRM_PASS_TITLE, REGISTER_EMAIL_TITLE, REGISTER_PASS_PLACEHOLDER, REGISTER_WRONG_CONFIRM_PASS_TEXT, SPECIAL_CHARACTERS } from '../../../constants/constant';
import XIcon from '../../../components/Icons/XIcon';
import LoginBodyS from '../../../components/Text/LoginBodyS';
import CheckItem from '../components/CheckItem';
import PasswordInput from '../components/PasswordInput';
import { Button } from 'antd';
import InputField from '../components/InputField';
import UserService from '../../../services/userServices';
import { TVerifyOtpInput, eVerifyOtpError } from '../../../constants/types';
import { useLocation, useNavigate } from 'react-router-dom';
import axios, { AxiosError, HttpStatusCode } from 'axios';

interface IChangeNewPwProps {
}

const ChangeNewPw: React.FunctionComponent<IChangeNewPwProps> = (props) => {
    const [otp, setOtp] = React.useState<string>('')
    const [isOtpError, setIsOtpError] = React.useState<boolean>(false)
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const [checkLength, setCheckLength] = React.useState<boolean>()
    const [checkCapital, setCheckCapital] = React.useState<boolean>()
    const [checkNumber, setCheckNumber] = React.useState<boolean>()
    const [checkSpecial, setCheckSpecial] = React.useState<boolean>()
    const [isRegisterable, setIsRegisterable] = React.useState<boolean>(false)
    const [isMatch, setIsMatch] = React.useState<boolean>(true)
    const navigate = useNavigate();
    const location = useLocation();
    React.useMemo(() => {
        setCheckLength(password.length >= PASSWORD_MIN_LENGTH)
        setCheckCapital(password !== password.toLowerCase())
        setCheckNumber(/\d/.test(password))
        setCheckSpecial(SPECIAL_CHARACTERS.test(password))
        if (confirmPassword && confirmPassword.length >= password.length) {
            setIsMatch(password === confirmPassword)
        }

    }, [password, confirmPassword])

    React.useMemo(() => {
        if (password.length > 0 && confirmPassword.length > 0 && isMatch && checkLength && checkCapital && checkNumber && checkSpecial && otp.length > 0) {
            setIsRegisterable(true)
        } else {
            setIsRegisterable(false)
        }
    }, [password, confirmPassword, isMatch, checkLength, checkCapital, checkNumber, checkSpecial, otp])

    const onClick = async () => {
        try {
            const data: TVerifyOtpInput = {
                email: location.state.email,
                otp,
                newPassword: password,
            }
            const result = await UserService.verifyOtpAndChangePw(data)
            if (result.status) {
                navigate(PAGE_SIGN_IN)
            }
        } catch (error: any | AxiosError) {
            setIsRegisterable(false)
            if (axios.isAxiosError(error)) {
              let errorCode = 0;
              if (error.response?.status === HttpStatusCode.BadRequest) {
                errorCode = parseInt(error.response.data)
                // if (errorCode === eVerifyOtpError.UserNameExited) {
                //   setIsUsernameError(true)
                //   return
                // }
              }
            }
        }
    }
    return <>
        <div className='flex flex-1'>
            <div className='mt-[2rem] flex flex-col flex-1 gap-[0.5rem]'>
                <InputField title={OTP_TITLE} isError={isOtpError} hasValue={otp.length > 0} onChangeValue={(v: string) => {
                    setOtp(v)
                }} errorText={CHANGE_PW_WRONG_OTP_TEXT} placeholder={CHANGE_PW_WRONG_OTP_PLACEHOLDER} />
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
                        <LoginBodyS className='text-sys-alert-bold'>{REGISTER_WRONG_CONFIRM_PASS_TEXT}</LoginBodyS>
                    </div>
                </>}
                <div>
                    <Button className='w-full mt-[1rem] h-[4rem] bg-blue-Primary text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px] disabled:bg-blue-shade' disabled={!isRegisterable} onClick={onClick}>Tiếp tục</Button>
                </div>
            </div>
        </div>
    </>;
};

export default ChangeNewPw;
