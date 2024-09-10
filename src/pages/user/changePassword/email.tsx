import { Button } from 'antd';
import * as React from 'react';
import { REGISTER_EMAIL_TITLE, REGISTER_EMAIL_PLACEHOLDER, CHANGE_PW_WRONG_EMAIL_TEXT, PAGE_CHANGE_PASSWORD_NEW } from '../../../constants/constant';
import InputField from '../components/InputField';
import { validateEmail } from '../../../utils/helper';
import { useNavigate } from 'react-router-dom';
import UserService from '../../../services/userServices';
import { AxiosError } from 'axios';

interface IChangePwEmailProps {
}

const ChangePwEmail: React.FunctionComponent<IChangePwEmailProps> = (props) => {
  const [email, setEmail] = React.useState<string>('')
  const [isEmailError, setIsEmailError] = React.useState<boolean>()
  const navigate = useNavigate();
  React.useMemo(() => {
    if (email.length > 3) {
      setIsEmailError(!validateEmail(email))
    }
  }, [email])
  const onClick = async () => {
    try {
      const result = await UserService.sendOtp({email})
      if (result.status) {
        navigate(PAGE_CHANGE_PASSWORD_NEW, {state: {
          email: email
        }})
      }
    } catch (error: any | AxiosError) {
      setIsEmailError(true)
    }
  }

  return <>
  <div className='flex flex-1'>
      <div className='mt-[2rem] flex flex-col flex-1 gap-[0.5rem]'>
        <InputField title={REGISTER_EMAIL_TITLE} isError={isEmailError || false} hasValue={email.length > 0} onChangeValue={(v: string) => {
          setEmail(v)
        }} errorText={CHANGE_PW_WRONG_EMAIL_TEXT} placeholder={REGISTER_EMAIL_PLACEHOLDER} />
        <div>
          <Button className='w-full mt-[1rem] h-[4rem] bg-blue-Primary text-[22px] font-6 leading-[32px] text-neutral-White rounded-[4px] disabled:bg-blue-shade' disabled={!(isEmailError === false)} onClick={onClick}>Tiếp tục</Button>
        </div>
      </div>
    </div>
  </>;
};

export default ChangePwEmail;
