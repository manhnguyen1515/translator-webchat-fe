import { Input } from 'antd';
import * as React from 'react';
import LoginTitleS from '../../../components/Text/LoginTitleS';
import LoginButton from '../../../components/Text/LoginButton';
interface IPasswordInputProps {
    title: string
    hasValue: boolean
    onChangeValue: (v: string) => void
    placeholder?: string
}

const PasswordInput: React.FunctionComponent<IPasswordInputProps> = ({ title, hasValue, onChangeValue, placeholder }) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        onChangeValue(e.currentTarget.value)
    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return <div className='flex-col'>
        <LoginTitleS>{title}</LoginTitleS>
        <div className='mt-[0.5rem] relative'>
            <Input.Password className={`input-password w-full h-[4rem] ${hasValue ? 'border-b-blue-Primary bg-neutral-White' : 'password border-neutral-D00 bg-grey-bg hover:border-neutral-D00 focus:border-neutral-D00'} !border-x-0 border-t-0 border-b-[1px] border-neutral-D00 rounded-[4px] text-[22px] font-5 leading-[32px] focus:shadow-none `} onChange={onChange} visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }} placeholder={placeholder} />
            <div className='absolute h-[4rem] right-[1rem] top-0 flex flex-col justify-center align-middle hover:cursor-pointer z-[1]'>
                <LoginButton className='text-blue-Primary' onClick={() => setPasswordVisible((prevState) => !prevState)}>{passwordVisible ? 'HIDE':'SHOW'}</LoginButton>
            </div>
        </div>
    </div>;
};

export default PasswordInput;
