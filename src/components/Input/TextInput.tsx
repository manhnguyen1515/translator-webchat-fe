import { Input } from 'antd';
import * as React from 'react';

interface ITextInputProps {
    onValueChange: (value: string) => void
    hasValue: boolean
    type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'
    placeholder?: string
    isDisabled?: boolean
}

const TextInput: React.FunctionComponent<ITextInputProps> = ({ onValueChange, hasValue, type, placeholder, isDisabled = false }) => {
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        onValueChange(e.currentTarget.value)
    }
    return <Input type={type} className={`w-full h-[4rem] ${hasValue ? 'border-b-blue-Primary !border-x-0 border-t-0 border-b-[1px] bg-neutral-White' : 'border-neutral-D00 border-[1px] bg-grey-bg hover:border-neutral-D00 focus:border-neutral-D00'}  text-[22px] font-5 leading-[32px]  focus:shadow-none rounded-[4px]`} onChange={onChange} placeholder={placeholder} disabled={isDisabled}/>;
};

export default TextInput;
