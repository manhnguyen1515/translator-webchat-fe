import * as React from 'react';
import { Button } from 'antd';
import InputField from '../components/InputField';
import PasswordInput from '../components/PasswordInput';
import { LOGIN_USER_IDENTIFIER_TITLE, LOGIN_WRONG_USER_IDENTIFIER_TEXT, LOGIN_PASSWORD_TITLE, PASSWORD_MIN_LENGTH, LOGIN_USER_IDENTIFIER_PLACEHOLDER, LOGIN_PASSWORD_PLACEHOLDER, PAGE_DEFAULT, PAGE_SIGN_UP, REGISTER_WRONG_PASS_TEXT, PAGE_CHANGE_PASSWORD_EMAIL } from '../../../constants/constant';
import { AuthContext } from '../../../context/AuthContext';
import UserService from '../../../services/userServices';
import { TUserLoginInput, eLoginError } from '../../../constants/types';
import { useNavigate } from 'react-router-dom';
import { Body1 } from '../../../components/Text';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import XIcon from '../../../components/Icons/XIcon';
import LoginBodyS from '../../../components/Text/LoginBodyS';

interface ILoginFormProps {
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const [userIdentifier, setUserIdentifier] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [hasUserIdentifierValue, setHasUserIdentifierValue] = React.useState<boolean>(false)
  const [hasPasswordValue, setHasPasswordValue] = React.useState<boolean>(false)
  const [isError, setIsError] = React.useState<boolean>(false)
  const [isPassError, setIsPassError] = React.useState<boolean>(false)
  const [isEnable, setIsEnable] = React.useState<boolean>(false)
  const { setUserInfo } = React.useContext(AuthContext)!
  // const authContext = useAuth();
  const onChangeUserIdentifier = (v: string) => {
    setUserIdentifier(v)
    if (isError) setIsError(false)
  }

  const onChangePassword = (v: string) => {
    setPassword(v)
    if (isPassError) setIsPassError(false)
  }
  React.useMemo(() => {
    setHasUserIdentifierValue(userIdentifier.length > 0)
  }, [userIdentifier])
  React.useMemo(() => {
    setHasPasswordValue(password.length > 0)
  }, [password])

  React.useMemo(() => {
    setIsEnable(password.length > 0 && userIdentifier.length > 0 && password.length >= PASSWORD_MIN_LENGTH)
  }, [password, userIdentifier])

  const onClick = async () => {
    setIsError(false);
    const accountLogin: TUserLoginInput = {
      usernameOrEmail: userIdentifier,
      password: password,
    }
    try {
      const result = await UserService.login(accountLogin)
      if (result.status === HttpStatusCode.Ok) {
        setUserInfo(result.data.data)
        navigate(PAGE_DEFAULT)
      }
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        setIsEnable(false)
        if (error.response?.status === HttpStatusCode.NotFound) {
          const errorCode = parseInt(error.response.data)
          if (errorCode === eLoginError.UserNotFound) {
            setIsError(true)
            return
          }
          if (errorCode === eLoginError.InvalidPassword) {
            setIsPassError(true)
            return
          }
        }
      }
    }
  }

  const navigate = useNavigate();
  const onCreate = () => {
    navigate(PAGE_SIGN_UP)
  }

  const onForget = () => {
    navigate(PAGE_CHANGE_PASSWORD_EMAIL)
  }
  return <div className='flex flex-1'>
    <div className='mt-[2rem] flex flex-col flex-1 gap-[0.5rem]'>
      <InputField title={LOGIN_USER_IDENTIFIER_TITLE} isError={isError} hasValue={hasUserIdentifierValue} onChangeValue={onChangeUserIdentifier} errorText={LOGIN_WRONG_USER_IDENTIFIER_TEXT} placeholder={LOGIN_USER_IDENTIFIER_PLACEHOLDER} />
      <PasswordInput title={LOGIN_PASSWORD_TITLE} hasValue={hasPasswordValue} onChangeValue={onChangePassword} placeholder={LOGIN_PASSWORD_PLACEHOLDER} />
      {isPassError && <>
        <div className='w-full mt-[0.5rem] bg-sys-alert-light p-[1rem] flex gap-[0.5rem]'>
          <div className='w-[1.5rem] h-[1.5rem]'>
            <XIcon />
          </div>
          <LoginBodyS className='text-sys-alert-bold'>{REGISTER_WRONG_PASS_TEXT}</LoginBodyS>
        </div>
      </>}
      <div>
        <Button className='w-full mt-[1.5rem] h-[4rem] bg-blue-Primary text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px] disabled:bg-blue-shade disabled:text-neutral-White' disabled={!(isEnable)} onClick={onClick}>Log in</Button>
      </div>
      <div className='w-full flex flex-row justify-center underline cursor-pointer text-blue-D30' onClick={onForget}>
        <Body1>Forget password?</Body1>
      </div>
      <div className='w-full h-[2px] bg-blue-L30 mt-[24px]' />
      <div className='w-full flex flex-row justify-center'>
        <Button className='w-[240px] mt-[1.5rem] h-[4rem] bg-turquoise-D30 text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px]' onClick={onCreate}>Create new account</Button>
      </div>
    </div>
  </div>;
};

export default LoginForm;
